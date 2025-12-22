# 桌面端开发概述

海狸IM桌面客户端是一款基于Electron + Vue 3开发的跨平台即时通讯应用。

## 核心特性

- **跨平台支持**: Windows、macOS、Linux全平台覆盖
- **原生体验**: 系统托盘、通知、窗口管理等桌面级功能
- **本地存储**: SQLite数据库，支持离线使用
- **实时通信**: WebSocket长连接，保证消息实时性
- **现代化UI**: Vue 3 + TypeScript构建

## 技术架构

<div align="center">
  <img src="/image/desktop/architecture.svg" alt="架构图" width="400"/>
</div>

### 三层架构设计

1. **主进程**: 负责窗口管理、数据库操作、系统集成
2. **渲染进程**: Vue应用界面，处理用户交互
3. **预加载脚本**: 安全的进程间通信桥梁

## 技术栈

<div align="center">
  <img src="/image/desktop/electron.svg" alt="Electron" width="48"/>
  <img src="/image/desktop/vue.svg" alt="Vue" width="48"/>
  <img src="/image/desktop/database.svg" alt="SQLite" width="48"/>
  <img src="/image/desktop/websocket.svg" alt="WebSocket" width="48"/>
</div>

- **Electron**: 跨平台桌面应用框架
- **Vue 3 + TypeScript**: 前端框架和类型安全
- **SQLite**: 本地数据库存储
- **WebSocket**: 实时通信协议

## 主要功能

- 🔐 用户认证 (登录、注册、密码找回)
- 💬 即时通讯 (私聊、群聊、多种消息类型)
- 👥 社交功能 (好友管理、群组创建)
- 📎 多媒体支持 (图片、视频、文件传输)
- 🔄 数据同步 (与服务端实时同步)
- 🔔 系统集成 (托盘图标、桌面通知)

## 开发流程

1. **环境搭建** → 配置Node.js和开发工具
2. **项目运行** → 启动开发服务器
3. **功能开发** → 基于现有架构开发新功能
4. **构建打包** → 生成可执行程序分发