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

# 后端开发概述

海狸IM后端基于Go语言和go-zero微服务框架构建，采用微服务架构设计，具有高性能、高可用、易扩展的特点。

## <img src="/image/backend/target.svg" alt="技术架构" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">技术架构

### 核心技术栈

- **编程语言**: Go 1.23+
- **微服务框架**: go-zero
- **数据库**: MySQL 8.0+
- **缓存**: Redis 6.0+
- **服务发现**: ETCD 3.5+
- **WebSocket**: gorilla/websocket
- **认证**: JWT
- **容器化**: Docker

## <img src="/image/backend/clipboard.svg" alt="服务端口配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">服务端口配置

| 服务名称 | API端口 | RPC端口 | Admin端口 | 职责 |
|---------|---------|---------|-----------|------|
| **user** | 20000 | 30000 | - | 用户管理 |
| **auth** | 20100 | - | - | 认证授权 |
| **friend** | 20200 | 30200 | - | 好友管理 |
| **chat** | 20300 | 30300 | - | 聊天消息 |
| **ws** | 20400 | - | - | WebSocket连接 |
| **group** | 20500 | 30500 | - | 群组管理 |
| **file** | 20600 | 30600 | - | 文件处理 |
| **emoji** | 20700 | 30700 | - | 表情管理 |
| **gateway** | 20800 | - | 40800 | API网关 |
| **moment** | 20900 | - | - | 朋友圈 |
| **dictionary** | 21000 | 31000 | - | 字典数据 |
| **feedback** | 21100 | - | - | 意见反馈 |
| **track** | 21200 | - | - | 行为统计 |
| **update** | 21300 | - | - | 更新服务 |
| **datasync** | 21400 | - | - | 数据同步 |
| **notification** | 21500 | 31500 | - | 消息通知 |
| **backend** | - | - | 40000 | 后端管理 | 