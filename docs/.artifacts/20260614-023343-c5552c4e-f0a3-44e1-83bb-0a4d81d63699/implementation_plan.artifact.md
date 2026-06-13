# 更新截图路径

用户移动了图片文件，需要将 `index.html` 中的截图路径从 `../src/Screenshots/` 更改为新的位置 `src/Screenshots/`。

## Proposed Changes

### 网页内容修改

#### [index.html](file:///C:/Android/oSamuRelease/docs/index.html)

- 更新 `screenshots-gallery` 中的 `img` 标签 `src` 属性。
- 路径由 `../src/Screenshots/` 改为 `src/Screenshots/`。

## Verification Plan

### Manual Verification
- 打开 `index.html` 验证截图是否能正常显示。
