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

# uniapp 开发概述

海狸IM移动端基于uni-app框架开发，采用Vue 3 + TypeScript技术栈，支持iOS、Android、小程序等多平台一码多端。

## 技术架构

### 核心技术栈

- **框架**: uni-app 3.0+
- **前端**: Vue 3.5+ + TypeScript 4.9+
- **构建工具**: Vite 5.2+
- **状态管理**: Pinia 2.2+
- **UI框架**: 自定义组件库
- **通信协议**: WebSocket + HTTP API
- **数据存储**: uni.setStorage

### 架构特点

- **一码多端**: 一套代码编译到Android和H5
- **跨平台兼容**: 统一的API，平台差异最小化
- **uni-app生态**: 基于uni-app框架开发
