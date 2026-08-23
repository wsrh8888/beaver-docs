<!--
  Copyright (c) 2024-2026 Beaver IM Team
  SPDX-License-Identifier: MIT
  Project: beaver-docs
  https://github.com/wsrh8888/beaver-docs

  中文：
  本文件为海狸 IM（Beaver IM）开源项目源代码。
  版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
  禁止删除、篡改或替换本文件头部版权与许可声明。
  使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html

  English:
  This file is part of the Beaver IM open-source project.
  Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
  Do not remove, alter, or replace this copyright and license header.
  Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html

  beaver-docs-header-v1
-->

# 🦫 海狸IM 官方文档

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Go](https://img.shields.io/badge/go-1.21+-blue.svg)](https://golang.org/)
[![Go-Zero](https://img.shields.io/badge/Go--Zero-v1.6.0+-green.svg)](https://github.com/zeromicro/go-zero)

> 🚀 **企业级即时通讯平台官方文档** - 海狸IM的完整使用指南和技术文档

[English](README_EN.md) | [中文](README.md)

---

## 🌟 项目简介

海狸IM是一款轻量级、高性能、重安全专注于私有化部署的开源即时通讯系统，为企业和开发者提供完整的即时通讯解决方案。

### 🎯 核心特性

- 🆓 **开源免费** - Apache-2.0协议， 可商用
- 🔏 **私有化部署** - 数据完全自主控制
- 🆚 **消息必达** - TCP + ACK机制保证消息送达
- 🔐 **内容安全** - 端到端加密传输
- 💽 **永久存储** - 消息永久保存不丢失
- 📱 **多端同步** - 支持全平台实时同步
- 📟 **全平台支持** - iOS、Android、Windows、macOS、Linux、Web

### 🏗️ 技术架构

- **后端**: Go + go-zero微服务框架
- **移动端**: uni-app + Vue 3 + TypeScript
- **桌面端**: Electron + Vue 3 + TypeScript
- **管理后台**: Vue 3 + Element Plus + TypeScript
- **文档**: VitePress + Vue 3

## 🌐 官方地址

- 📖 **详细文档**: [https://wsrh8888.github.io/beaver-docs/](https://wsrh8888.github.io/beaver-docs/)
- 🎥 **视频教程**: [B站频道](https://space.bilibili.com/269553626/lists)
- 📱 **体验包下载**: [海狸IM Android体验包](https://github.com/wsrh8888/beaver-docs/releases/download/lastest/latest.apk)
- 💬 **QQ群**: [1013328597](https://qm.qq.com/q/82rbf7QBzO)

## 🔗 相关项目

| 项目 | 仓库地址 | 说明 |
|------|----------|------|
| **beaver-server** | [GitHub](https://github.com/wsrh8888/beaver-server) \| [Gitee](https://gitee.com/dawwdadfrf/beaver-server) | 后端微服务 |
| **beaver-flutter** | [GitHub](https://github.com/wsrh8888/beaver-flutter) \| [Gitee](https://gitee.com/dawwdadfrf/beaver-flutter) | 移动端（Flutter，推荐） |
| **beaver-desktop** | [GitHub](https://github.com/wsrh8888/beaver-desktop) \| [Gitee](https://gitee.com/dawwdadfrf/beaver-desktop) | 桌面端（Electron） |
| **beaver-manager** | [GitHub](https://github.com/wsrh8888/beaver-manager) \| [Gitee](https://gitee.com/dawwdadfrf/beaver-manager) | 后台管理系统 |
| **beaver-open** | [GitHub](https://github.com/wsrh8888/beaver-open) \| [Gitee](https://gitee.com/dawwdadfrf/beaver-open) | 开放平台 |
| **beaver-oauth** | [GitHub](https://github.com/wsrh8888/beaver-oauth) \| [Gitee](https://gitee.com/dawwdadfrf/beaver-oauth) | OAuth 授权登录 |
## 📚 文档与帮助

- 📖 **详细文档**: [Beaver IM 文档](https://wsrh8888.github.io/beaver-docs/)
- 🎥 **视频教程**: [B站教程](https://www.bilibili.com/video/BV1HrrKYeEB4/)
- 📱 **体验包下载**: [海狸IM Android体验包](https://github.com/wsrh8888/beaver-docs/releases/download/lastest/latest.apk)
- 💬 **QQ群**:
  - [1013328597](https://qm.qq.com/q/82rbf7QBzO) - 群一
  - [1044762885](https://qm.qq.com/q/82rbf7QBzO) - 群二
  - [1003121259](https://qm.qq.com/q/82rbf7QBzO) - 群三

## 🤝 贡献指南

我们欢迎社区为海狸IM文档做出贡献！

### 如何贡献

1. **Fork** 本仓库
2. **创建** 特性分支 (`git checkout -b docs/improvement`)
3. **提交** 更改 (`git commit -m 'Improve documentation'`)
4. **推送** 到分支 (`git push origin docs/improvement`)
5. **开启** Pull Request

### 贡献领域

- 📝 **内容改进** - 完善和修正文档内容
- 🎨 **结构优化** - 改进文档组织结构
- 🌍 **翻译工作** - 添加多语言支持
- 🐛 **问题修复** - 修复文档错误和链接问题

## 📄 开源协议与免责声明

本项目基于 [MIT](LICENSE) 协议开源，详见 [LICENSE](LICENSE)。

**使用要点（摘要）：**

- 闭源自用商用、二次开源均可免费，但须保留根目录 `LICENSE`，上线前端须有「关于」署名（基于海狸 IM + 仓库地址）
- 闭源交付第三方、去掉署名、对外 SaaS 收费等，请采购商业授权（书面合同）
- 无论是否付费，**不得删除或篡改 `LICENSE`**

完整免责与署名要求：[LEGAL.md](LEGAL.md)  
商业授权产品线与报价：[版权与商业授权](https://wsrh8888.github.io/beaver-docs/community/license.html)  
联系：[751135385@qq.com](mailto:751135385@qq.com)

--- 
