# 桌面端概述

海狸 IM 桌面客户端基于 **Electron + Vue 3 + TypeScript** 开发，提供与移动端互通的即时通讯能力。

当前仓库 **正式打包配置为 Windows（x64）**；Electron 本身具备跨平台能力，macOS / Linux 尚未提供官方安装包。

## 核心能力

- **账号登录** - 密码登录、扫码登录（对接 OAuth 授权页）
- **即时通讯** - 私聊/群聊，支持文本、语音、Markdown、图片、视频、表情及转发回复
- **群组** - 创建群聊、群助手（Webhook 机器人）
- **好友与朋友圈** - 好友申请与资料管理、朋友圈发布与互动
- **音视频通话** - 基于 LiveKit 的语音/视频通话
- **桌面特性** - 系统托盘、快捷键、区域截图、账号与存储设置
- **本地缓存** - SQLite 持久化会话与消息，WebSocket 与服务端实时同步

## 技术栈

| 技术 | 说明 |
|------|------|
| **Electron** 31 | 桌面应用壳 |
| **Vue 3** + **Vite** + **TypeScript** | 渲染层与工程化 |
| **Pinia** + **Vue Router** | 状态管理与路由 |
| **SQLite** + **Drizzle ORM** | 本地消息与会话存储 |
| **WebSocket** | 实时消息推送 |
| **LiveKit** | 音视频通话 |

## 文档导航

| 文档 | 说明 |
|------|------|
| [界面展示](/desktop/screenshots) | 功能截图一览 |
| [体验下载](/desktop/experience) | Windows 体验包下载与安装 |
| [本地开发](/desktop/development) | 开发环境启动 |
| [配置说明](/desktop/config) | 环境与服务配置 |
| [构建部署](/desktop/deploy) | 打包与发布 |

## 相关仓库

- [beaver-desktop](https://github.com/wsrh8888/beaver-desktop) - 桌面端源码
- [beaver-oauth](https://github.com/wsrh8888/beaver-oauth) - OAuth 授权登录页（桌面扫码/密码登录依赖）
- [beaver-server](https://github.com/wsrh8888/beaver-server) - 后端服务
