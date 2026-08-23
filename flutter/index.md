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

# Flutter 开发概述

海狸IM Flutter 端是海狸IM生态中的核心移动客户端，基于 Flutter 3.x 开发，采用 Dart 语言。它提供了丝滑的即时通讯体验，支持 iOS 和 Android 平台。

## 技术架构

### 核心技术栈

- **框架**: Flutter 3.x
- **状态管理**: Bloc (flutter_bloc)
- **网络请求**: Dio
- **本地数据库**: Drift (SQLite)
- **依赖注入**: GetIt
- **路由管理**: GoRouter
- **实时通信**: WebSocket + LiveKit (提供音视频通话支持)
- **UI 组件**: 适配多种屏幕尺寸的自定义响应式 UI

### 主要特点

- **高性能**: 利用 Flutter 的原生渲染能力，提供极致流畅的交互体验。
- **架构清晰**: 遵循模块化和分层架构设计，易于扩展和维护。
- **功能完备**: 支持私聊、群聊、语音通话、视频通话等核心 IM 功能。
- **多端一致**: 保证了在不同操作系统上的一致性体验。

---

## 开始开发

准备好环境后，您可以按照以下步骤开始进行本地开发：

- [本地开发指南](./development.md)
- [环境配置详情](./setup.md)
- [界面展示](./screenshots.md)
