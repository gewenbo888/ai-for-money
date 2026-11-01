/* Local, reversible interface translations. Never rewrites typed form values or experiment notes. */
(() => {
 'use strict';
 const words = {
"开始第一个项目":"Start your first project",
"开始制作":"Start making",
"我的项目":"My projects",
  "跳至正文": "Skip to content",
  "主导航": "Main navigation",
  "全部": "All",
  "复制": "Copy",
  "已复制": "Copied",
  "关闭": "Close",
  "繁星会 / Psyverse": "Psyverse",
  "必填": "Required",
  "选填": "Optional",
  "目标": "Goal",
  "执行步骤": "Steps",
  "验收记录": "Acceptance checklist",
  "参考资料": "References",
  "过程与结果": "Process and results",
  "尚未填写": "Not recorded yet",
  "资料待验证": "Not yet verified",
  "样片可预览": "Sample available",
  "技术交付": "Technical services",
  "数字产品": "Digital products",
  "内容制作": "Content production",
  "其他探索": "Further research",
  "AI for Money · 从工作流到真实交付": "AI for Money · From workflows to real deliverables",
  "探索 AI 辅助的技术交付、数字产品与内容制作。筛选二十四个项目方向，记录自己的实验、投入、结果与真实收入。": "Explore AI-assisted technical services, digital products and content production. Browse 24 projects and record your experiments, costs, results and actual income.",
  "AI for Money · 用 AI，做出可交付的成果。": "AI for Money · Use AI. Make something useful.",
  "项目库": "Project library",
  "我的实验": "My experiments",
  "收支测算": "Income & costs",
  "用 AI，": "Use AI.",
  "做出可交付的成果。": "Make something useful.",
  "从工作流开始，记录投入、结果与真实收入。": "Start with a workflow. Track your effort, results and actual income.",
  "找到适合的项目": "Find your first project",
  "查看项目库": "Browse projects",
  "选择一个方向开始": "Choose where to start",
  "把真实需求变成可使用的工具与服务。": "Turn real needs into useful tools and services.",
  "制作有明确用途、可以试用的数字产品。": "Build digital products with a clear purpose and a working sample.",
  "从原创脚本、图文到完整作品。": "From original scripts and illustrations to finished work.",
  "保留原有项目方向，逐项记录与验证。不预设收益，也不代替你执行任务。": "Explore the original project ideas and verify each one through your own work. Record results as they happen.",
  "选一个具体交付物，开始一次有记录的实验。": "Choose a deliverable. Start an experiment you can track.",
  "搜索项目、技能或交付物": "Search projects, skills or deliverables",
  "项目分类": "Project categories",
  "正在加载资料…": "Loading projects…",
  "启用 JavaScript 可筛选项目、管理实验与计算收支。": "Enable JavaScript to filter projects, manage experiments and calculate income and costs.",
  "也可读取完整项目资料。": "Read the full project data.",
  "填入自己的数据": "Enter your own figures",
  "记录本次实验的实际收支，核对投入与产出。": "Record actual income and costs for this experiment.",
  "记账单位": "Currency",
  "人民币 CNY": "Chinese yuan · CNY",
  "美元 USD": "US dollar · USD",
  "已收款": "Received",
  "工具与算力成本": "Tools & compute",
  "渠道费用": "Platform fees",
  "退款": "Refunds",
  "投入工时": "Hours worked",
  "实际收到的金额": "Amount received",
  "没有费用请填 0": "Enter 0 if none",
  "没有退款请填 0": "Enter 0 if none",
  "选填，小时": "Optional, in hours",
  "净贡献": "Net contribution",
  "每小时净贡献": "Net per hour",
  "填写已收款和三项费用后计算。": "Enter the amount received and all three costs to calculate.",
  "净贡献＝已收款－工具成本－渠道费用－退款。未计入税费与其他未填成本，不是未来收入预测。": "Net contribution = received − tools − fees − refunds. Excludes taxes and any unrecorded costs. This is not a forecast.",
  "下载收支记录 ↓": "Download cost record ↓",
  "AI for Money · 把方法变成可核对的实践。": "AI for Money · Put methods into measurable practice.",
  "合作与反馈": "Contact & feedback",
  "阅读愿景与方法边界": "Our vision and how this works",
  "我们关注 AI 如何帮助个人提高交付能力，并通过真实需求获得回报。项目库是研究与实验起点；资料状态、自己勾选的进度和实际收款是不同的记录。界面不会自动下单、交易、发送消息或启动赚钱任务。": "We explore how AI can help individuals deliver useful work and earn from real demand. This library is a starting point for research and experiments. Reference status, self-reported progress and actual payments are separate records. This interface does not place orders, trade, send messages or run income-generating tasks.",
  "查看原始愿景文稿 ↗": "Read the original vision ↗",
  "关闭项目详情": "Close project details",
  "关闭我的实验": "Close experiments",
  "保存在当前浏览器。勾选表示你自己的记录，不代表平台核验。": "Saved in this browser. Checkmarks record your own progress, not platform verification.",
  "下载实验记录 ↓": "Download experiment records ↓",
  "浏览器无法保存，请下载记录备份。本次操作仍然有效。": "Your browser could not save this record. Download a backup. Your current changes are still available.",
  "交付物": "Deliverable",
  "验证状态": "Evidence status",
  "查看资料 ↗": "View reference ↗",
  "查看实验": "View experiment",
  "开始实验": "Start experiment",
  "没有找到匹配项目": "No matching projects",
  "换一个关键词，或重置筛选。": "Try a different keyword or reset the filters.",
  "重置筛选": "Reset filters",
  "本次交付物": "Your deliverable",
  "验收清单": "Acceptance checklist",
  "从资料与计划开始，完成情况由你记录。交易工具类项目先做只读研究，不会在这里发起交易。": "Start with references and a plan. Record the work you complete yourself. Trading-tool projects begin with read-only research; no trades are placed here.",
  "打开参考资料 ↗": "Open reference ↗",
  "查看我的实验": "View my experiments",
  "加入我的实验": "Add to my experiments",
  "下载项目计划 ↓": "Download project plan ↓",
  "移出列表": "Remove from list",
  "记录产出、遇到的问题、试用反馈与实际收支。": "Record outputs, problems, user feedback and actual income and costs.",
  "从一个交付物开始": "Start with one deliverable",
  "在项目库中选择方向，查看计划并加入实验。": "Choose a direction in the library, review its plan and add it to your experiments.",
  "去项目库 →": "Go to project library →",
  "请输入不小于 0 的有效金额与工时。": "Enter valid amounts and hours of zero or more.",
  "填写已收款和三项费用后计算；没有费用请明确填 0。": "Enter received income and all three costs. Enter 0 explicitly if there is no cost.",
  "按本次实际输入计算，不包含未填写的其他成本。": "Calculated from these inputs only. Other unrecorded costs are excluded.",
  "已计算净贡献；填写正数工时可计算每小时净贡献。": "Net contribution calculated. Enter hours greater than zero to calculate the hourly result.",
  "请先补全有效的收款与费用数据。": "Complete the income and cost fields with valid amounts first.",
  "资料暂时未能加载": "Projects could not load",
  "请刷新重试，或通过页脚 GitHub 链接读取项目资料。": "Please refresh, or read the project data using the GitHub link in the footer.",
  "方向：": "Category:",
  "资料状态：": "Evidence status:",
  "请根据自己的实际投入和结果记录；计划不代表执行或收款已经发生。": "Record your actual effort and results. A plan does not mean work has been completed or payment received.",
  "本人进度记录": "My progress record",
  "AI for Money · 本次收支记录": "AI for Money · Income and cost record",
  "单位：": "Currency:",
  "已收款：": "Received:",
  "工具与算力成本：": "Tools and compute:",
  "渠道费用：": "Platform fees:",
  "退款：": "Refunds:",
  "净贡献：": "Net contribution:",
  "工时：": "Hours worked:",
  "每小时净贡献：": "Net per hour:",
  "未填写": "Not entered",
  "未计算": "Not calculated",
  "仅按本人输入计算，未包含税费和其他未填成本；不是收入预测。": "Calculated only from your inputs. Excludes taxes and other unrecorded costs. This is not an income forecast.",
  "开源问题修复": "Open-source issue fixes",
  "修复真实缺陷，提供可复现的测试与清楚的 Pull Request。": "Fix a real defect with reproducible tests and a clear pull request.",
  "代码补丁、测试与变更说明": "Code patch, tests and change notes",
  "交易工具接口研究": "Trading API research",
  "研究数据与接口，先做只读演示和费用测算。": "Study data and APIs through a read-only demo and a cost analysis.",
  "只读接口演示与风险说明": "Read-only API demo and risk notes",
  "蓝果短剧制作": "BlueFruit short-film production",
  "从脚本、分镜到剪辑，探索原创科幻与幻想叙事。": "Explore original science fiction and fantasy, from script and storyboard to editing.",
  "分镜文稿与短片样稿": "Storyboard script and short-film draft",
  "内容工作流与工具替代": "Content workflows and tool alternatives",
  "比较开源与现有工具，整理可复用的内容制作流程。": "Compare open-source and existing tools to build a reusable production workflow.",
  "工具比较表与制作流程": "Tool comparison and production workflow",
  "长视频研究与摘要": "Long-form video research",
  "从有权使用的长视频里整理观点、时间戳与引用。": "Extract ideas, timestamps and citations from videos you have permission to use.",
  "带时间戳的摘要与资料索引": "Timestamped summary and reference index",
  "数字工具产品分发": "Digital product distribution",
  "准备一份可使用的数字产品，检查介绍、文件与交付。": "Prepare a working digital product and check its description, files and delivery.",
  "产品包、使用说明与试用反馈": "Product package, instructions and trial feedback",
  "数字产品交付流程": "Digital product delivery",
  "梳理订单、付款确认与文件交付之间的真实流程。": "Map the real path from order and payment confirmation to file delivery.",
  "订单流程与交付验收清单": "Order workflow and delivery checklist",
  "原创科普视频制作": "Original science videos",
  "将一个科学问题写成有来源、有叙事的原创短视频。": "Turn a scientific question into an original short video with a narrative and sources.",
  "脚本、来源清单与视频样稿": "Script, source list and video draft",
  "长文编辑与分发": "Long-form writing and publishing",
  "围绕具体问题写一篇有原创价值、适合阅读的文章。": "Write a useful original article around a specific question.",
  "文章成稿与发布清单": "Finished article and publishing checklist",
  "客户需求整理": "Customer requirements research",
  "整理公开需求或已授权的客户反馈，识别可交付任务。": "Organize public requests or authorized feedback into clear, deliverable tasks.",
  "需求清单与响应草稿": "Requirements list and response drafts",
  "小型 SaaS 需求验证": "Micro-SaaS validation",
  "从一个具体痛点出发，制作可以让用户操作的原型。": "Start with one specific problem and build a prototype people can use.",
  "可操作原型与需求验证记录": "Interactive prototype and validation notes",
  "专题研究简报": "Research newsletters",
  "围绕明确读者持续整理有来源、可追溯的专题信息。": "Curate traceable, sourced information for a clearly defined readership.",
  "一期完整简报与资料目录": "One complete newsletter and source directory",
  "电商评价研究": "E-commerce review research",
  "分析有权使用的评价资料，整理需求与产品改进方向。": "Analyze reviews you have permission to use and identify product improvements.",
  "评价分类与需求研究报告": "Review taxonomy and requirements report",
  "链上数据与费用研究": "On-chain data and fee research",
  "记录链上公开数据、网络费用与风险，先验证分析方法。": "Record public blockchain data, network costs and risks to test an analysis method.",
  "公开数据看板与费用研究": "Public-data dashboard and fee study",
  "原创电子书制作": "Original e-book production",
  "把原创内容整理成可阅读、排版完整的电子书。": "Turn original content into a readable, fully typeset e-book.",
  "电子书、目录与来源说明": "E-book, contents and source notes",
  "科普信息图制作": "Science infographics",
  "用准确的文字和图形解释一个有边界的科学问题。": "Explain one well-defined scientific question with accurate words and graphics.",
  "原创信息图与参考资料": "Original infographic and references",
  "开源悬赏需求筛选": "Open-source bounty screening",
  "筛选边界明确、验收条件清楚的公开技术任务。": "Find public technical tasks with a clear scope and acceptance criteria.",
  "任务候选表与可行性评估": "Task shortlist and feasibility assessment",
  "产品发布准备": "Product launch preparation",
  "准备能让目标用户理解和试用产品的发布资料。": "Prepare materials that help target users understand and try a product.",
  "演示、介绍页与反馈问题清单": "Demo, introduction page and feedback questions",
  "播客摘要与字幕": "Podcast summaries and captions",
  "处理原创或获授权的音频，制作摘要、字幕与片段。": "Create summaries, captions and excerpts from original or authorized audio.",
  "音频摘要、字幕与引用时间戳": "Audio summary, captions and citation timestamps",
  "B2B 行业研究": "B2B industry research",
  "围绕客户的一个具体决策，整理证据、比较与结论。": "Gather evidence, comparisons and conclusions for one specific business decision.",
  "带来源的行业研究简报": "Industry research brief with sources",
  "多语言网站本地化": "Multilingual website localization",
  "围绕真实用户改进语言、内容与页面访问体验。": "Improve language, content and access around real user needs.",
  "本地化页面与语言检查记录": "Localized pages and language QA notes",
  "游戏素材制作": "Game asset production",
  "制作风格统一、规格明确的原创或获授权游戏素材。": "Create original or licensed game assets with a consistent style and clear specifications.",
  "素材包、格式规范与使用说明": "Asset pack, format specifications and instructions",
  "社群知识库与问答": "Community knowledge bases",
  "整理获授权资料，帮助成员找到有来源的回答。": "Organize authorized material so members can find answers backed by sources.",
  "知识库原型与问答测试集": "Knowledge-base prototype and Q&A test set",
  "按需印刷项目验证": "Print-on-demand validation",
  "从设计、样品与供应商信息出发核对交付与费用。": "Check delivery and costs using designs, samples and supplier information.",
  "样品验收表与成本记录": "Sample acceptance checklist and cost record",
  "已明确任务和验收标准": "Defined the task and acceptance criteria",
  "已完成交付物并自查": "Completed and checked the deliverable",
  "已记录目标用户反馈": "Recorded target-user feedback",
  "已记录成本与结果": "Recorded costs and results",
  "明确使用者、任务边界与验收方式": "Define the user, task scope and acceptance criteria",
  "完成一个最小可用交付物": "Build a minimum usable deliverable",
  "检查正常输入、失败情况与复现步骤": "Check normal inputs, failure cases and reproduction steps",
  "收集试用反馈，记录实际投入与结果": "Collect trial feedback and record actual effort and results",
  "写明研究问题与待验证假设": "State the research question and testable hypotheses",
  "整理带日期与来源的资料": "Organize dated information with sources",
  "制作演示、样品或可核对的分析": "Create a demo, sample or verifiable analysis",
  "记录边界、成本与下一步验证": "Record limitations, costs and the next validation step",
  "明确受众、用途与叙事目标": "Define the audience, purpose and narrative goal",
  "完成脚本、来源与可阅读分镜": "Prepare the script, sources and readable storyboards",
  "制作一份可播放或阅读的样稿": "Produce a draft that can be played or read",
  "检查内容、字幕与声音，记录反馈": "Check content, captions and sound, and record feedback",
  "明确买家或读者与使用场景": "Define the buyer or reader and their use case",
  "完成一份可直接使用的产品样稿": "Create a usable product draft",
  "核对来源、使用说明与交付方式": "Check sources, instructions and delivery method",
  "邀请试用并记录反馈，再决定下一步": "Invite a trial, record feedback and decide the next step",
  "测试": "Testing",
  "数据": "Data",
  "交易工具": "Trading tools",
  "剧本": "Scripts",
  "视频": "Video",
  "配音": "Voice-over",
  "开源工具": "Open-source tools",
  "工作流": "Workflows",
  "研究": "Research",
  "摘要": "Summaries",
  "工具": "Tools",
  "交付": "Delivery",
  "订单": "Orders",
  "产品": "Product",
  "科普": "Science",
  "字幕": "Captions",
  "写作": "Writing",
  "搜索": "Search",
  "编辑": "Editing",
  "需求": "Requirements",
  "沟通": "Communication",
  "前端": "Frontend",
  "简报": "Newsletters",
  "电商": "E-commerce",
  "费用": "Costs",
  "排版": "Typesetting",
  "电子书": "E-books",
  "设计": "Design",
  "信息图": "Infographics",
  "发布": "Launch",
  "反馈": "Feedback",
  "音频": "Audio",
  "网站": "Websites",
  "语言": "Languages",
  "游戏": "Games",
  "素材": "Assets",
  "知识库": "Knowledge bases",
  "检索": "Retrieval",
  "社群": "Communities",
  "供应链": "Supply chain",
  "验证": "Validation",
  "请填写项目想法。": "Please enter your project idea.",
  "蓝果短剧": "BlueFruit Studio",
  "组合筛选": "Combine filters",
  "项目类型": "Project type",
  "开发与悬赏": "Development & bounties",
  "数字产品与知识服务": "Digital products & knowledge",
  "内容创作": "Content creation",
  "SaaS 与网站": "SaaS & websites",
  "电商与选品": "E-commerce & products",
  "Web3 与数据": "Web3 & data",
  "获客与社群": "Outreach & communities",
  "企业服务与咨询": "Business services & consulting",
  "入门门槛": "Experience level",
  "零代码入门": "No-code beginner",
  "轻量代码与自动化": "Light coding & automation",
  "需要开发基础": "Development experience",
  "参考币种": "Reference currency",
  "加密资产": "Crypto assets",
  "合作方式": "Engagement model",
  "单次交付": "One-off delivery",
  "产品销售": "Product sales",
  "订阅与维护": "Subscription & maintenance",
  "研究与验证": "Research & validation",
  "币种与合作方式用于选择项目方向，实际安排以双方约定为准。": "Currency and engagement model help you explore project directions. Actual terms depend on the agreement.",
  "已选筛选条件": "Selected filters",
  "排序": "Sort",
  "默认排序": "Default order",
  "入门门槛优先": "Beginner-friendly first",
  "名称排序": "Name",
  "重置全部": "Reset all",
  "交付工作台": "Delivery workspace",
  "新建交付项目": "Start a delivery project",
  "创建交付项目 →": "Create delivery project →"
};
 const key = 'psy-site-language';
 const valid = value => value === 'en' || value === 'zh';
 let lang = 'zh';
 try { const explicit = new URLSearchParams(location.search).get('lang'); const saved = localStorage.getItem(key); lang = valid(explicit) ? explicit : valid(saved) ? saved : 'zh'; if(valid(explicit))localStorage.setItem(key,lang); } catch {}
 const sources = new WeakMap();
 const patterns = [
  [/^第\s*(\d+)集$/, (_, n) => `Ep ${n}`],
  [/^展示 (\d+) \/ (\d+) 个设定$/, (_, a, b) => `Showing ${a} of ${b} concepts`],
  [/^共 (\d+) 个项目$/, (_, n) => `${n} projects`],
  [/^显示更多项目（还有 (\d+) 个）$/, (_, n) => `More projects (${n} remaining)`],
  [/^已记录 (\d+) \/ (\d+) 项$/, (_, a, b) => `${a} of ${b} items recorded`],
  [/^(.*) · (\d+) 秒$/, (_, resolution, seconds) => `${resolution} · ${seconds} sec`],
  [/^我想讨论《(.+)》这个故事方向。\n?$/, (_, name) => `I would like to discuss the story direction for ${translate(name)}.\n`]
 ];
 function translate(value) {
  const text = String(value ?? '');
  if (lang !== 'en') return text;
  if (Object.hasOwn(words, text)) return words[text];
  const trimmed = text.trim();
  if (Object.hasOwn(words, trimmed)) return text.replace(trimmed, words[trimmed]);
  for (const [pattern, render] of patterns) if (pattern.test(text)) return text.replace(pattern, render);
  // Rendering combines genre labels and prompt sections with stable delimiters.
  for (const delimiter of ['\n', ' · ']) if (text.includes(delimiter)) return text.split(delimiter).map(translate).join(delimiter);
  return text;
 }
 function record(node, slot, current) {
  let records = sources.get(node); if (!records) { records = {}; sources.set(node, records); }
  const old = records[slot];
  const source = old && current === old.output ? old.source : current;
  const output = translate(source);
  records[slot] = { source, output };
  return output;
 }
 function localize(root) {
  const excluded = 'script,style,textarea,code,[data-i18n-ignore],[translate="no"]';
  function text(node) {
   if (!node.parentElement || node.parentElement.closest(excluded)) return;
   const next = record(node, 'text', node.nodeValue);
   if (node.nodeValue !== next) node.nodeValue = next;
  }
  if (root.nodeType === Node.TEXT_NODE) { text(root); return; }
  if (![Node.ELEMENT_NODE,Node.DOCUMENT_NODE].includes(root.nodeType)) return;
  if (root.nodeType === Node.ELEMENT_NODE && root.closest(excluded)) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node; while ((node=walker.nextNode())) text(node);
  const elements = root.nodeType === Node.ELEMENT_NODE ? [root,...root.querySelectorAll('*')] : [...root.querySelectorAll('*')];
  elements.forEach(el => {
   if (el.closest(excluded)) return;
   for (const attr of ['placeholder','aria-label','title']) if (el.hasAttribute(attr)) {
    const next=record(el,attr,el.getAttribute(attr)); if(el.getAttribute(attr)!==next)el.setAttribute(attr,next);
   }
   if (el.matches('meta[name="description"],meta[property="og:title"],meta[property="og:description"]')) {
    const next=record(el,'content',el.content);if(el.content!==next)el.content=next;
   }
  });
 }
 function apply() {
  document.documentElement.lang=lang==='en'?'en':'zh-CN';
  document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===lang)));
  localize(document);
  document.querySelectorAll('a[href]').forEach(a=>{const u=new URL(a.href,location.href);if(['bluefruit.psyverse.fun','ai-for-money.psyverse.fun'].includes(u.hostname)&&u.origin!==location.origin){u.searchParams.set('lang',lang);a.href=u.href;}});
 }
 function setLanguage(next) {
  if(!valid(next)||next===lang)return;
  lang=next;try{localStorage.setItem(key,lang);}catch{}
  const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);
  apply();document.dispatchEvent(new CustomEvent('languagechange',{detail:{language:lang}}));
 }
 window.SiteLanguage={t:translate,get language(){return lang;},set:setLanguage,refresh:apply};
 document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.language)));
  apply();
  new MutationObserver(mutations=>{
   for(const m of mutations) {
    if(m.type==='characterData')localize(m.target);
    else if(m.type==='childList')m.addedNodes.forEach(localize);
    else localize(m.target);
   }
  }).observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title','content']});
 });
})();
