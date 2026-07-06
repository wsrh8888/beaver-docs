# 开放平台概述

海狸 IM 开放平台面向第三方开发者，提供应用管理、身份验证、群机器人推送等能力。

## 文档怎么读

| 你想做什么 | 看哪里 |
|------------|--------|
| 部署开发者门户、创建应用 | [开发者门户](/open/portal/config) |
| 了解整体接入顺序 | [接入流程](/open/guide/flow) |
| 海狸账号登录我的系统 | [身份验证](/open/api/oauth/authorize) + [客户端接入](/open/client/web) |
| **Jenkins 构建结果推到群里** | [群机器人](/open/api/bot) |

## 能力一览

| 能力 | 说明 |
|------|------|
| **开发者门户** | 创建应用、管理 AppID / AppSecret、OAuth 与机器人配置 |
| **身份验证** | OAuth 第三方登录（扫码 / 密码） |
| **群机器人** | Incoming Webhook，Jenkins / GitLab 等推送群消息 |
| **事件订阅** | 应用事件回调（文档完善中） |
| **客户端接入** | Web 授权页（beaver-oauth）、Electron 内嵌 JS-SDK |

## 技术栈

| 技术 | 说明 |
|------|------|
| **Vue 3** + **Vite** + **TypeScript** | beaver-open 门户、beaver-oauth 授权页 |
| **Element Plus** | UI 组件库 |
| **@beaver-im/js-sdk** | 登录 Web Component |
