# AI for Money · 项目工作台

从工作流开始，记录投入、结果与真实收入。

## 已实现

- 保留原有 24 个项目方向，按技术交付、数字产品、内容制作与其他探索重新整理。
- 搜索、筛选、项目详情、执行计划下载。
- 本地实验列表、验收勾选、笔记、记录下载。兼容旧版收藏中的项目 ID；不迁移旧版预估收入。
- 按本人输入计算净贡献与每小时净贡献，可导出记录。缺失值不当作 0；不提供收入预测或汇率换算。
- 浏览器记录不是服务端核验，项目资料状态不代表已收款。

## 本地预览

```sh
python3 node_runner.py
# http://127.0.0.1:8888
```

或运行 `./run_node.sh`。本地服务提供网页与 `/api/status`，不启动赚钱、获客、交易或支付核验任务。
Docker 镜像在容器内监听 0.0.0.0:8888；本地 Python 默认仅监听 127.0.0.1。

## 发布

Vercel 静态部署 `index.html`、`workbench.css`、`workbench.js` 与 `recipes.json`；线上站点不运行 Python `/api/status`。

原始愿景保存在 MANIFESTO_8_BILLION.md，网站以当前已实现的能力为准。

## 验证

交互检查覆盖项目搜索／筛选／空结果、详情与原生对话框、实验保存与刷新、损坏的本地记录、下载、金额为 0／缺失／负数／含小数及工时为 0 的情况。页面无收益保证，不收集私钥。

## AI Bounties Süreci

Bu projede AI bounties süreci şu adımları takip eder:

1. **İssue Keşfetme:** GitHub'da belirli kriterlere uygun issues keşfedilir.
2. **Minimum Yama Oluşturma:** Bulunan hatalar için minimum değişiklikler oluşturulur.
3. **Test Yazma:** Her yamanın davranış seviyesindeki testleri yazılır ve çalıştırılır.
4. **PR Açma:** Testler başarılı olduğunda, düzgün formatta bir PR açılır.
5. **Anti-Spam Güvenlik:** Daha önce bahsedilen anti-spam kuralları uygulanır.

Live: https://ai-for-money.psyverse.fun/
GitHub: https://github.com/gewenbo888/ai-for-money

## 中英文界面

顶部的中文 / EN 按钮切换界面与项目资料，选择保存在当前浏览器。可用 `?lang=en` 或 `?lang=zh` 分享指定语言。`i18n.js` 包含翻译词典与切换逻辑。用户输入与实验笔记保持原文；下载记录按当前语言生成。蓝果样片保留原中文音轨，并提供英文文稿。
