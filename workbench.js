/* A research and experiment workbench, not an autonomous income engine. */
(() => {
 'use strict';
 const T = text => window.SiteLanguage.t(text);
 const $ = s => document.querySelector(s);
 const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const labels = {tech:'技术交付',digital:'数字产品',content:'内容制作',other:'其他探索'};
 const key = 'afm-experiments-v2';
 let projects = [], state = {}, direction = 'all', limit = 6, toastTimer, activeProject;
 const filters = {type:'all',difficulty:'all',currency:'all',model:'all'};
 const facets = {"type": {"label": "项目类型", "values": {"all": "全部", "dev": "开发与悬赏", "vending": "数字产品与知识服务", "content": "内容创作", "saas": "SaaS 与网站", "ecommerce": "电商与选品", "web3": "Web3 与数据", "traffic": "获客与社群", "consulting": "企业服务与咨询"}}, "difficulty": {"label": "入门门槛", "values": {"all": "全部", "no-code": "零代码入门", "low-code": "轻量代码与自动化", "hardcore": "需要开发基础"}}, "currency": {"label": "参考币种", "values": {"all": "全部", "cny": "人民币 CNY", "usd": "美元 USD", "crypto": "加密资产"}}, "model": {"label": "合作方式", "values": {"all": "全部", "once": "单次交付", "product": "产品销售", "subscription": "订阅与维护", "research": "研究与验证"}}};
 function toast(text) { clearTimeout(toastTimer); $('#toast').textContent=text; $('#toast').hidden=false; toastTimer=setTimeout(()=>{$('#toast').hidden=true;},3200); }
 function save() { try { localStorage.setItem(key,JSON.stringify(state)); } catch { toast('浏览器无法保存，请下载记录备份。本次操作仍然有效。'); } }
 function download(text,name) { const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})); const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); }
 function current() { return projects.filter(p=>state[p.id]?.active); }
 function updateCount() { $('#experiment-count').textContent=current().length; }
 function restore() {
  try {
   const raw=localStorage.getItem(key);
   const data=raw?JSON.parse(raw):null;
   if(data&&typeof data==='object'&&!Array.isArray(data)) {
    projects.forEach(p=>{const v=data[p.id];if(v&&typeof v==='object')state[p.id]={active:v.active===true,checks:p.checks.map((_,i)=>v.checks?.[i]===true),notes:typeof v.notes==='string'?v.notes.slice(0,8000):''};});
   } else if(!raw) {
    let previous=JSON.parse(localStorage.getItem('vibe_portfolio')||'[]');if(!Array.isArray(previous))previous=[];
    previous.forEach(v=>{const p=projects.find(p=>p.id===v?.id);if(p)state[p.id]={active:true,checks:p.checks.map(()=>false),notes:''};});
   }
  } catch { state={}; }
  updateCount();
 }
 function render() {
  const q=$('#search').value.trim().toLocaleLowerCase();
  const filtered=projects.filter(p=>(direction==='all'||p.category===direction)&&Object.entries(filters).every(([key,value])=>value==='all'||(key==='currency'?p.currencies.includes(value):p[key]===value))&&[p.title,p.description,p.deliverable,...p.tags,...p.searchTags,...[p.title,p.description,p.deliverable,...p.tags].map(T)].join(' ').toLocaleLowerCase().includes(q));
  const sort=$('#project-sort').value;
  if(sort==='difficulty'){const rank={'no-code':0,'low-code':1,'hardcore':2};filtered.sort((a,b)=>rank[a.difficulty]-rank[b.difficulty]);}
  if(sort==='name')filtered.sort((a,b)=>T(a.title).localeCompare(T(b.title),window.SiteLanguage.language==='en'?'en':'zh-CN'));
  document.querySelectorAll('[data-dimension]').forEach(b=>b.setAttribute('aria-pressed',String(filters[b.dataset.dimension]===b.dataset.value)));
  const selected=Object.entries(filters).filter(([,v])=>v!=='all');
  $('#active-filters').innerHTML=(direction!=='all'?`<button type="button" class="filter-chip" data-clear="direction"><span>${esc(labels[direction])}</span><span aria-hidden="true">×</span></button>`:'')+selected.map(([k,v])=>`<button type="button" class="filter-chip" data-clear="${k}"><span>${esc(facets[k].label)}</span><span>:</span><span>${esc(facets[k].values[v])}</span><span aria-hidden="true">×</span></button>`).join('');
  $('#active-filters').hidden=selected.length===0&&direction==='all';
  $('#reset-all-filters').disabled=!selected.length&&direction==='all'&&!q&&sort==='default';
  $('#result-count').textContent=`共 ${filtered.length} 个项目`;
  $('#project-list').innerHTML=filtered.slice(0,limit).map(p=>`<article class="project-row"><div class="project-copy"><h3><button type="button" class="project-title" data-detail="${p.id}">${esc(p.title)}</button></h3><p>${esc(p.description)}</p><div class="project-tags"><span>${esc(facets.type.values[p.type])}</span><span>${esc(facets.difficulty.values[p.difficulty])}</span><span>${esc(facets.model.values[p.model])}</span></div><div class="project-meta"><div><span>交付物</span><strong>${esc(p.deliverable)}</strong></div><div><span>验证状态</span><strong class="verification">${esc(p.verification)}</strong></div><div><span>参考资料</span><a href="${esc(p.reference)}" target="_blank" rel="noopener">查看资料 ↗</a></div></div></div><button type="button" class="button primary project-start" data-start-project="${p.id}">${state[p.id]?.active?'查看实验':'开始实验'}</button></article>`).join('')||'<div class="empty"><h3>没有找到匹配项目</h3><p>换一个关键词，或重置筛选。</p><button type="button" class="button" id="reset-filters">重置筛选</button></div>';
  let more=$('#load-more');
  if(!more){more=document.createElement('button');more.id='load-more';more.type='button';more.className='button load-more';$('#project-list').after(more);more.addEventListener('click',()=>{limit+=6;render();});}
  more.hidden=filtered.length<=limit;more.textContent=`显示更多项目（还有 ${Math.max(0,filtered.length-limit)} 个）`;
 }
 function resetFilters() {
  direction='all';Object.keys(filters).forEach(k=>filters[k]='all');$('#search').value='';$('#project-sort').value='default';limit=6;render();
 }
 function setFilter(next,scroll=false) {
  direction=next;Object.keys(filters).forEach(k=>filters[k]='all');limit=6;
  render();if(scroll)$('#library').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 }
 function projectPlan(p) { return `# ${T(p.title)}

${T('方向：')} ${T(labels[p.category])}
${T('资料状态：')} ${T(p.verification)}

${T('目标')}
${T(p.description)}

${T('交付物')}
${T(p.deliverable)}

${T('执行步骤')}
${p.steps.map((s,i)=>`${i+1}. ${T(s)}`).join('\n')}

${T('验收记录')}
${p.checks.map(s=>`- [ ] ${T(s)}`).join('\n')}

${T('参考资料')}
${p.reference}

${T('请根据自己的实际投入和结果记录；计划不代表执行或收款已经发生。')}
`; }
 function openProject(id) {
  const p=projects.find(p=>p.id===id);if(!p)return;activeProject=p;
  $('#project-detail').innerHTML=`<p class="small muted">${labels[p.category]} · ${esc(p.verification)}</p><h2 id="project-title">${esc(p.title)}</h2><p>${esc(p.description)}</p><div class="deliverable"><span>本次交付物</span><strong>${esc(p.deliverable)}</strong></div><h3>执行步骤</h3><ol class="project-steps">${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h3>验收清单</h3><ul>${p.checks.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><p class="small muted">从资料与计划开始，完成情况由你记录。交易工具类项目先做只读研究，不会在这里发起交易。</p><a class="reference-link" href="${esc(p.reference)}" target="_blank" rel="noopener">打开参考资料 ↗</a><div class="actions"><a class="button primary" href="/projects.html?recipe=${p.id}&lang=${window.SiteLanguage.language}">创建交付项目 →</a><button type="button" class="button" id="add-experiment">${state[id]?.active?'查看我的实验':'加入我的实验'}</button><button type="button" class="button" id="download-plan">下载项目计划 ↓</button></div>`;
  $('#download-plan').addEventListener('click',()=>download(projectPlan(p),`${p.id}-plan.md`));
  $('#add-experiment').addEventListener('click',()=>{
   const existing=state[id];state[id]={active:true,checks:existing?.checks||p.checks.map(()=>false),notes:existing?.notes||''};save();updateCount();render();$('#project-dialog').close();openExperiments();
  });
  $('#project-dialog').showModal();
 }
 function renderExperiments() {
  const items=current();
  $('#experiment-list').innerHTML=items.map(p=>`<article class="experiment-card" data-experiment="${p.id}"><div class="experiment-heading"><h3>${esc(p.title)}</h3><button type="button" class="text-button" data-remove="${p.id}">移出列表</button></div><p class="small muted experiment-progress">已记录 ${state[p.id].checks.filter(Boolean).length} / ${p.checks.length} 项</p><div class="experiment-checks">${p.checks.map((s,i)=>`<label><input type="checkbox" data-check="${i}" ${state[p.id].checks[i]?'checked':''}><span>${esc(s)}</span></label>`).join('')}</div><label for="notes-${p.id}" class="notes-label">过程与结果</label><textarea id="notes-${p.id}" data-notes maxlength="8000" rows="3" placeholder="记录产出、遇到的问题、试用反馈与实际收支。"></textarea></article>`).join('')||'<div class="empty"><h3>从一个交付物开始</h3><p>在项目库中选择方向，查看计划并加入实验。</p><button class="button" type="button" id="back-to-library">去项目库 →</button></div>';
  $('#experiment-list').querySelectorAll('[data-experiment]').forEach(card=>{card.querySelector('[data-notes]').value=state[card.dataset.experiment].notes;});
  $('#export-experiments').hidden=items.length===0;
 }
 function openExperiments() {renderExperiments();$('#experiments-dialog').showModal();}
 $('#open-experiments').addEventListener('click',openExperiments);
 document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 });
 $('#project-list').addEventListener('click',e=>{
  const detail=e.target.closest('[data-detail],[data-start-project]');if(detail)openProject(detail.dataset.detail||detail.dataset.startProject);
  if(e.target.closest('#reset-filters'))resetFilters();
 });
 document.querySelector('.filter-matrix').addEventListener('click',e=>{const b=e.target.closest('[data-dimension]');if(!b||!Object.hasOwn(filters,b.dataset.dimension))return;filters[b.dataset.dimension]=b.dataset.value;if(b.dataset.dimension==='type')direction='all';limit=6;render();});
 $('#active-filters').addEventListener('click',e=>{const b=e.target.closest('[data-clear]');if(!b)return;if(b.dataset.clear==='direction')direction='all';else filters[b.dataset.clear]='all';limit=6;render();});
 $('#reset-all-filters').addEventListener('click',resetFilters);
 $('#project-sort').addEventListener('change',()=>{limit=6;render();});
 document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>{$('#search').value='';setFilter(b.dataset.start,true);}));
 $('#search').addEventListener('input',()=>{limit=6;render();});
 $('#experiment-list').addEventListener('change',e=>{
  const card=e.target.closest('[data-experiment]');if(!card)return;const item=state[card.dataset.experiment];
  if(e.target.matches('[data-check]')){item.checks[Number(e.target.dataset.check)]=e.target.checked;save();card.querySelector('.experiment-progress').textContent=`已记录 ${item.checks.filter(Boolean).length} / ${item.checks.length} 项`;}
 });
 $('#experiment-list').addEventListener('input',e=>{const card=e.target.closest('[data-experiment]');if(card&&e.target.matches('[data-notes]')){state[card.dataset.experiment].notes=e.target.value;save();}});
 $('#experiment-list').addEventListener('click',e=>{
  const b=e.target.closest('[data-remove]');if(b){state[b.dataset.remove].active=false;save();updateCount();renderExperiments();render();}
  if(e.target.closest('#back-to-library')){$('#experiments-dialog').close();$('#library').scrollIntoView();$('#search').focus();}
 });
 $('#export-experiments').addEventListener('click',()=>{
  const text=current().map(p=>`${projectPlan(p)}\n${T('本人进度记录')}\n${p.checks.map((s,i)=>`- [${state[p.id].checks[i]?'x':' '}] ${T(s)}`).join('\n')}\n\n${T('过程与结果')}\n${state[p.id].notes||T('尚未填写')}\n`).join('\n---\n\n');
  download(text,'ai-for-money-experiments.md');
 });
 function costValues() {
  const fields=['received','tools','fees','refunds'];const values={};let complete=true,valid=true;
  [...fields,'hours'].forEach(k=>{const input=$('#cost-'+k);const raw=input.value.trim();if(fields.includes(k)&&raw==='')complete=false;const n=raw===''?null:Number(raw);if(input.validity.badInput||(n!==null&&(!Number.isFinite(n)||n<0||n>1e12)))valid=false;values[k]=n;});
  const net=complete&&valid?values.received-values.tools-values.fees-values.refunds:null;
  return{...values,complete,valid,net,currency:$('#currency').value};
 }
 function updateCost() {
  const c=costValues();const format=n=>new Intl.NumberFormat(window.SiteLanguage.language==='en'?'en-US':'zh-CN',{style:'currency',currency:c.currency}).format(n);
  $('#net-result').textContent=c.net===null?'—':format(c.net);
  $('#hourly-result').textContent=c.net!==null&&c.hours>0?format(c.net/c.hours):'—';
  $('#cost-message').textContent=!c.valid?'请输入不小于 0 的有效金额与工时。':!c.complete?'填写已收款和三项费用后计算；没有费用请明确填 0。':c.hours>0?'按本次实际输入计算，不包含未填写的其他成本。':'已计算净贡献；填写正数工时可计算每小时净贡献。';
 }
 $('#cost-form').addEventListener('input',updateCost);$('#currency').addEventListener('change',updateCost);
 $('#export-cost').addEventListener('click',()=>{
  const c=costValues();if(c.net===null){toast('请先补全有效的收款与费用数据。');return;}
  const lines=[T('AI for Money · 本次收支记录'),`${T('单位：')} ${c.currency}`,`${T('已收款：')} ${c.received}`,`${T('工具与算力成本：')} ${c.tools}`,`${T('渠道费用：')} ${c.fees}`,`${T('退款：')} ${c.refunds}`,`${T('净贡献：')} ${c.net.toFixed(2)}`,`${T('工时：')} ${c.hours??T('未填写')}`,`${T('每小时净贡献：')} ${c.hours>0?(c.net/c.hours).toFixed(2):T('未计算')}`,'',T('仅按本人输入计算，未包含税费和其他未填成本；不是收入预测。')];
  download(lines.join('\n'),'ai-for-money-cost-record.txt');
 });
 document.addEventListener('languagechange',()=>{if(projects.length)render();updateCost();});
 fetch('/recipes.json').then(r=>{if(!r.ok)throw Error('recipes');return r.json();}).then(data=>{
  projects=data;const priority=['bounty-hunter-fleet','gumroad-xianyu-vending','languo-short-drama'];projects.sort((a,b)=>(priority.includes(a.id)?priority.indexOf(a.id):99)-(priority.includes(b.id)?priority.indexOf(b.id):99));restore();render();
 }).catch(()=>{$('#result-count').textContent='资料暂时未能加载';$('#project-list').innerHTML='<p>请刷新重试，或通过页脚 GitHub 链接读取项目资料。</p>';});
})();
