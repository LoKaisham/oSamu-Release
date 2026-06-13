# oSamu GitHub Pages 网站

## 📁 文件结构

```
docs/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件（支持深色模式）
├── js/
│   └── script.js       # JavaScript交互脚本
└── images/             # 图片文件夹（可选）
```

## 🚀 使用说明

### 1. 文件配置

网页中使用相对路径引用图片和截图：
- Icon: `../src/icon/ic_launcher_round.webp`
- 截图: `../src/Screenshots/Screenshot_*.png`

**两种方案：**

#### 方案A：保持原目录结构（推荐）
```
repository/
├── src/
│   ├── icon/
│   │   └── ic_launcher_round.webp
│   └── Screenshots/
│       └── *.png
└── docs/
    ├── index.html
    ├── css/style.css
    └── js/script.js
```

#### 方案B：复制到docs目录
将icon和截图复制到 `docs/images/` 文件夹，然后修改HTML中的路径：
```html
<!-- 修改前 -->
<img src="../src/icon/ic_launcher_round.webp" alt="oSamu Icon">

<!-- 修改后 -->
<img src="images/ic_launcher_round.webp" alt="oSamu Icon">
```

### 2. 启用GitHub Pages

1. 进入仓库的 **Settings**
2. 找到 **Pages** 选项
3. 选择 **Source**: `main branch /docs folder`
4. 保存后，网站会自动发布到: `https://LoKaisham.github.io/oSamu-Release/`

### 3. 本地测试

使用Python简单服务器测试：
```bash
cd docs
python -m http.server 8000
# 或 Python 3
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`

## ✨ 功能特性

- ✅ 响应式设计（支持移动设备）
- ✅ 深色/浅色主题自动切换
- ✅ Material Design 3风格
- ✅ 平滑滚动和过渡动画
- ✅ 截图灯箱效果
- ✅ SEO优化

## 🎨 自定义

### 修改主题色

编辑 `css/style.css` 中的CSS变量：

```css
:root {
    --primary: #6750a4;        /* 主要色 */
    --secondary: #625b71;      /* 次要色 */
    --tertiary: #7d5260;       /* 第三色 */
    /* 其他配置... */
}
```

### 修改内容

直接编辑 `index.html` 中的内容：
- 修改应用描述
- 添加/移除功能特性
- 更新下载链接
- 修改社交媒体链接

### 添加新的截图

在 `index.html` 中的 `.screenshots-gallery` 部分添加：
```html
<img src="../src/Screenshots/new-screenshot.png" alt="描述" class="screenshot">
```

## 📱 浏览器兼容性

- ✅ Chrome/Edge (最新)
- ✅ Firefox (最新)
- ✅ Safari (最新)
- ✅ 移动浏览器

## 🔧 高级配置

### 添加自定义域名

1. 在 `docs` 文件夹中创建 `CNAME` 文件
2. 输入你的域名，如: `osamu.example.com`
3. 在域名服务商配置DNS解析

### 添加Google Analytics

在 `index.html` 的 `</head>` 前添加：
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 📝 更新网站

每次发布新版本时：

1. 更新HTML中的版本号/发布日期
2. 添加新的截图
3. 更新功能描述
4. 推送更改到GitHub
5. Pages会自动重新生成

```bash
git add docs/
git commit -m "Update website for v1.0.1"
git push origin main
```

## 🐛 常见问题

**Q: GitHub Pages 没有更新？**
- 等待5-10分钟，清除浏览器缓存后重试

**Q: 图片无法加载？**
- 检查相对路径是否正确
- 确保文件确实存在

**Q: 深色模式不工作？**
- 检查浏览器是否禁用了JavaScript
- 查看浏览器控制台是否有错误

## 📄 许可证

网站代码为 MIT 许可证。

## 🤝 贡献

如有改进建议，欢迎提交Issue或PR。

---

**祝你的oSamu应用宣传顺利！** 🎉
