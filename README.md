# 海狸IM 官方文档

![海狸IM](https://img.shields.io/badge/海狸IM-v1.0.0-orange)
![VitePress](https://img.shields.io/badge/VitePress-v1.0.0-green)
![License](https://img.shields.io/badge/License-Apache%202.0-blue)

海狸IM官方文档网站，基于VitePress构建的企业级即时通讯系统文档。

## 📖 关于海狸IM

海狸IM是一款轻量级、高性能、重安全专注于私有化部署的开源即时通讯系统，具备以下特性：

- 🆓 **开源免费** - Apache-2.0协议， 可商用
- 🔏 **私有化部署** - 数据完全自主控制  
- 🆚 **消息必达** - TCP + ACK机制保证消息送达
- 🔐 **内容安全** - 端到端加密传输
- 💽 **永久存储** - 消息永久保存不丢失
- 📱 **多端同步** - 支持全平台实时同步
- 📟 **全平台支持** - iOS、Android、Windows、macOS、Linux、Web

## 🏗️ 技术架构

- **后端**: Go + go-zero微服务框架
- **移动端**: uni-app + Vue 3 + TypeScript  
- **桌面端**: Electron + Vue 3 + TypeScript
- **管理后台**: Vue 3 + Element Plus + TypeScript
- **文档**: VitePress + Vue 3

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
# 启动开发服务器
npm run dev

# 或者
npm run docs:dev
```

访问 http://localhost:5173 查看文档

### 构建生产版本

```bash
# 构建静态文件
npm run build

# 或者  
npm run docs:build
```

构建后的文件在 `.vitepress/dist` 目录

### 预览构建结果

```bash
# 预览构建后的网站
npm run preview

# 或者
npm run docs:preview
```

## 📁 项目结构

```
beaver-docs/
├── .vitepress/
│   ├── config.mts          # VitePress配置
│   └── dist/               # 构建输出目录
├── guide/                  # 指南文档
│   ├── index.md           # 什么是海狸IM
│   ├── deployment.md      # 部署指南
│   ├── architecture.md    # 系统架构
│   └── features.md        # 功能特性
├── backend/                # 后端文档
│   ├── index.md           # 后端概述
│   ├── tech-stack.md      # 技术栈
│   └── structure.md       # 项目结构
├── mobile/                 # 移动端文档
│   ├── index.md           # 移动端概述
│   ├── tech-stack.md      # uni-app技术栈
│   └── development.md     # 开发指南
├── desktop/                # 桌面端文档
│   ├── index.md           # 桌面端概述
│   ├── tech-stack.md      # Electron技术栈
│   └── development.md     # 开发指南
├── admin/                  # 管理后台文档
├── api/                    # API文档
├── public/                 # 静态资源
├── index.md               # 首页
├── demo.md                # 演示页面
├── package.json           # 项目配置
└── README.md              # 本文件
```

## 🎨 自定义主题

文档使用VitePress默认主题，并进行了以下定制：

- 品牌色彩：橙色主题 (#FF7D45)
- 中文字体优化
- 响应式设计
- 自定义组件和样式

## 📝 内容编写

### Markdown扩展

支持VitePress的所有Markdown扩展功能：

- 代码高亮
- 自定义容器
- 表格
- 数学公式
- 图表等

### 文档规范

1. 所有文档使用中文编写
2. 代码示例需要完整可运行
3. 图片统一放在 `public/` 目录
4. 链接使用相对路径

## 🚀 部署

### GitHub Pages

```yaml
# .github/workflows/docs.yml
name: Deploy docs

on:
  push:
    branches: [main]

jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vitepress/dist
```

### Netlify

1. 连接GitHub仓库
2. 构建命令：`npm run docs:build`
3. 发布目录：`.vitepress/dist`

### Vercel

1. 导入GitHub仓库
2. 框架预设：VitePress
3. 自动部署

## 🤝 贡献指南

欢迎为海狸IM文档做出贡献！

### 如何贡献

1. Fork本仓库
2. 创建功能分支：`git checkout -b feature/new-docs`
3. 提交更改：`git commit -am 'Add new documentation'`
4. 推送分支：`git push origin feature/new-docs`
5. 提交Pull Request

### 贡献内容

- 修复文档错误
- 改进文档内容
- 添加新的教程
- 翻译文档
- 改进文档结构

## 📧 联系我们

如果您有任何问题或建议，欢迎联系我们：

- 📧 邮箱：docs@beaver-im.com
- 💬 QQ群：123456789
- 🐙 GitHub Issues：[提交问题](https://github.com/your-repo/beaver-im/issues)
- 🌐 官网：https://beaver-im.com

## 📄 许可证

本文档采用 [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) 许可协议。

海狸IM系统本身采用 [Apache-2.0](https://opensource.org/licenses/Apache-2.0) 许可协议。

---

<div align="center">
  <p>Made with ❤️ by 海狸IM团队</p>
  <p>
    <a href="https://beaver-im.com">官网</a> •
    <a href="/guide/">文档</a> •
    <a href="/demo">演示</a> •
    <a href="https://github.com/your-repo/beaver-im">GitHub</a>
  </p>
</div> 