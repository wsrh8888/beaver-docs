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

# 开放平台概述

海狸 IM 开放平台面向第三方开发者，提供应用管理、身份验证、群机器人推送等能力。

## 文档怎么读

| 你想做什么 | 看哪里 |
|------------|--------|
| 部署开发者门户、创建应用 | [开发者门户](/open/portal/config) |
| 了解整体接入顺序 | [接入流程](/open/guide/flow) |
| 海狸账号登录我的系统 | [身份验证](/open/api/oauth/authorize) |
| **Jenkins 构建结果推到群里** | [群机器人](/open/api/bot) |

## 能力一览

| 能力 | 说明 |
|------|------|
| **开发者门户** | 创建应用、管理 AppID / AppSecret、OAuth 与机器人配置 |
| **身份验证** | OAuth 第三方登录（扫码 / 密码） |
| **群机器人** | Incoming Webhook，Jenkins / GitLab 等推送群消息 |
| **事件订阅** | 应用事件回调（文档完善中） |

## 技术栈

| 技术 | 说明 |
|------|------|
| **Vue 3** + **Vite** + **TypeScript** | beaver-open 开发者门户 |
| **Element Plus** | UI 组件库 |
