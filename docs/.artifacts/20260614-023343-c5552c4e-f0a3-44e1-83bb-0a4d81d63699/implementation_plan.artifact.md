# 删除不可用截图

仅删除 `index.html` 中不存在的截图链接，保留现有的 CSS 布局（不进行滑动查看的改动）。

## Proposed Changes

### 网页内容修改

#### [index.html](file:///C:/Android/oSamuRelease/docs/index.html)

- 删掉不可用的截图链接。
- 仅保留以下存在的截图：
  - `Screenshot_2026-06-14-01-36-34-74.png`
  - `Screenshot_2026-06-14-01-39-36-31.png`
  - `Screenshot_2026-06-14-01-40-24-08.png`
  - `Screenshot_2026-06-14-02-10-55-63.png`
  - `Screenshot_2026-06-14-02-11-32-22.png`

## Verification Plan

### Manual Verification
- 打开 `index.html` 验证是否只显示存在的 5 张截图。
