# 🤝 Contributing to Beaver Docs

感谢你对海狸 IM 文档的贡献！本文说明如何参与文档编写与改进。

## 📋 目录

- [如何贡献](#如何贡献)
- [本地开发](#本地开发)
- [编写规范](#编写规范)
- [提交规范](#提交规范)
- [Pull Request 流程](#pull-request-流程)

## 🎯 如何贡献

### 🐛 报告文档问题

提交 Issue 前请先搜索是否已有相同问题。

**问题报告模板：**

```markdown
## 问题描述
简要说明文档错误或缺失

## 页面路径
例如：/backend/setup 或 manager/deploy.md

## 当前内容
现有描述的问题点

## 建议修改
期望的正确内容或补充方向

## 环境
- 浏览器：[Chrome / Firefox 等]
- 文档版本 / commit：[可选]
```

### 💡 内容改进

欢迎补充：

- 📝 安装、部署、开发步骤
- 🎨 文档结构与导航优化
- 🌍 中英文翻译
- 🐛 链接失效、错别字、截图说明修正

### 🔧 代码贡献流程

1. **Fork** 本仓库
2. **创建** 特性分支（如 `docs/fix-deploy`）
3. **修改** 文档并本地预览
4. **提交** Pull Request

## 🛠️ 本地开发

### 环境要求

- Node.js >= 18
- npm 或 pnpm

### 启动步骤

```bash
git clone https://github.com/YOUR_USERNAME/beaver-docs.git
cd beaver-docs
npm install
npm run docs:dev
```

浏览器访问终端输出的本地地址（默认 `http://localhost:5173`）。

### 构建预览

```bash
npm run docs:build
npm run docs:preview
```

### 文档目录

```
beaver-docs/
├── .vitepress/          # VitePress 配置
├── backend/             # 后端文档
├── desktop/             # 桌面端文档
├── manager/             # 管理端文档
├── flutter/             # 移动端文档
├── public/              # 静态资源（截图等）
└── index.md             # 首页
```

## 📝 编写规范

- 使用 Markdown，保持标题层级清晰（`#` → `##` → `###`）
- 代码块标注语言（`bash`、`go`、`yaml` 等）
- 截图放在 `public/screenshots/` 对应子目录
- 链接优先使用相对路径或文档站内路径
- 中英文并存时保持术语一致（Beaver IM、go-zero、Flutter 等）

## 📝 提交规范

提交信息建议使用前缀：

```
docs(backend): 更新部署说明
docs(manager): 修正截图路径
fix: 修复文档死链
```

## 🔄 Pull Request 流程

### 提交前检查

- [ ] 本地 `npm run docs:build` 构建通过
- [ ] 新增/修改页面可在 dev 模式下正常访问
- [ ] 链接与图片路径有效
- [ ] 无敏感信息（密钥、内网地址等）

### PR 描述模板

```markdown
## 变更说明
简要描述本次文档改动

## 变更类型
- [ ] 内容补充
- [ ] 错误修正
- [ ] 结构优化
- [ ] 截图更新

## 相关页面
列出受影响的路径或文件
```

## 🆘 获取帮助

- **Issues**: [GitHub Issues](https://github.com/wsrh8888/beaver-docs/issues)
- **Email**: [751135385@qq.com](mailto:751135385@qq.com)
- **QQ 群**: [1013328597](https://qm.qq.com/q/82rbf7QBzO)

---

感谢为 Beaver IM 文档做出贡献！🦫
