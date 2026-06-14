# 为网页和 README 添加英语支持

为官网实现多语言切换功能（中/英），并将 `README.md` 更新为中英双语版本。

## Proposed Changes

### 网页国际化 (i18n)

#### [index.html](file:///C:/Android/oSamuRelease/docs/index.html)
- 引入 `js/i18n.js`。
- 在导航栏添加语言切换按钮。
- 为需要翻译的元素添加 `data-i18n` 属性。

#### [NEW] [i18n.js](file:///C:/Android/oSamuRelease/docs/js/i18n.js)
- 定义中英文对照表。
- 实现语言切换逻辑，并持久化到 `localStorage`。

#### [style.css](file:///C:/Android/oSamuRelease/docs/css/style.css)
- 添加语言切换按钮的样式。

---

### README 更新

#### [README.md](file:///C:/Android/oSamuRelease/README.md)
- 将内容重构为中英双语版本，方便全球用户阅读。

## Verification Plan

### Manual Verification
- 打开 `index.html`，点击语言切换按钮，验证文字是否正确切换。
- 刷新页面，验证语言选择是否被保留。
- 检查 `README.md` 的双语排版是否整洁。
