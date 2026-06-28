# 后台管理系统概述

海狸 IM 的后台管理 Web 端（**beaver-manager**），基于 **Vue 3 + Element Plus + TypeScript** 开发，对接 **beaver-server** 管理接口使用。


## 功能模块

| 模块 | 说明 |
|------|------|
| **工作台** | 运营概览、待办收件箱、近 7 日趋势；快捷进入用户管理、会话审计、待办处置 |
| **用户管理** | 用户列表检索与状态管理；用户 360 视图（资料、好友、群聊、朋友圈、表情等） |
| **消息审计** | 消息检索、会话审计，支持合规排查与内容回看 |
| **安全处置** | 待办案件、申诉处理 |
| **客服** | 用户反馈受理 |
| **产品与开放** | 开发者管理、开放应用、机器人/Webhook 集成 |
| **版本发布** | 应用管理、平台架构配置、版本包发布与升级策略 |
| **数据** | 事件统计、原始日志查询 |
| **资源** | 文件存储、表情包与表情素材管理 |
| **系统** | 角色权限、管理员账号、连接监控 |

## 技术栈

| 技术 | 说明 |
|------|------|
| **Vue 3** + **Vite** + **TypeScript** | 前端渲染与工程化 |
| **Element Plus** | UI 组件库 |
| **Pinia** + **Vue Router** | 状态管理与路由（Hash 模式） |
| **Axios** | 对接 beaver-server 管理端 API |

## 文档导航

| 文档 | 说明 |
|------|------|
| [界面展示](/manager/screenshots) | 部分功能截图 |
| [环境配置](/manager/config) | 多环境变量与 API 地址 |
| [本地开发](/manager/setup) | 启动开发服务器 |
| [打包部署](/manager/deploy) | 构建静态资源并部署 |

## 相关仓库

- [beaver-manager](https://github.com/wsrh8888/beaver-manager) - 后台管理系统源码
- [beaver-server](https://github.com/wsrh8888/beaver-server) - 后端服务（管理端 API 依赖）
- [beaver-open](https://github.com/wsrh8888/beaver-open) - 开放平台门户（面向开发者）
- [beaver-desktop](https://github.com/wsrh8888/beaver-desktop) - 桌面端（版本发布、OAuth 等与之联动）
