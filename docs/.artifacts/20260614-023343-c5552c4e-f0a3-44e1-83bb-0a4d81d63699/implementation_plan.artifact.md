# 分离多语言 README 文件

为了保持文档简洁且内容完整，将中英文内容拆分为独立的文件。按照 GitHub 通用惯例，主 `README.md` 使用英文，中文内容移动至 `README.zh.md`。

## Proposed Changes

### README 分离

#### [README.md](file:///C:/Android/oSamuRelease/README.md)
- 仅保留完整的英文内容。
- 在顶部添加明显的中文版链接：`[中文版](README.zh.md)`。

#### [NEW] [README.zh.md](file:///C:/Android/oSamuRelease/README.zh.md)
- 包含完整的中文内容。
- 在顶部添加明显的英文版链接：`[English](README.md)`。

## Verification Plan

### Manual Verification
- 在 GitHub 界面（或本地预览）检查两个文件的链接是否可以正确相互跳转。
- 确认两个文件的内容均完整，没有任何精简。
