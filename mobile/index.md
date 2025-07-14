# 移动端开发概述

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

## 平台支持

### 📱 移动平台

- **Android**: 原生Android应用 (Android 7.0+)

### 🌐 Web平台

- **H5**: 手机浏览器访问，支持所有现代浏览器

## 应用特性

### 💬 聊天功能

- **实时消息**: WebSocket实时消息收发
- **文本消息**: 基础文本聊天功能
- **图片消息**: 支持图片发送和显示

### 👥 社交功能

- **好友管理**: 添加、删除、备注好友
- **群组聊天**: 创建、管理群组
- **用户资料**: 个人信息展示和编辑

### 🎨 界面体验

- **基础交互**: 点击、滑动等基础操作

## 项目结构

```
beaver-mobile/
├── src/
│   ├── components/           # 通用组件
│   │   ├── chat/            # 聊天相关组件
│   │   ├── common/          # 公共组件
│   │   └── media/           # 多媒体组件
│   ├── pages/               # 页面
│   │   ├── index/           # 首页
│   │   ├── chat/            # 聊天页面
│   │   ├── contacts/        # 联系人
│   │   ├── discover/        # 发现页
│   │   ├── profile/         # 个人中心
│   │   └── login/           # 登录注册
│   ├── static/              # 静态资源
│   │   ├── images/          # 图片资源
│   │   ├── fonts/           # 字体文件
│   │   └── emoji/           # 表情包
│   ├── store/               # 状态管理
│   │   ├── modules/         # 状态模块
│   │   └── index.ts         # 状态入口
│   ├── utils/               # 工具函数
│   │   ├── request.ts       # 网络请求
│   │   ├── websocket.ts     # WebSocket管理
│   │   ├── storage.ts       # 本地存储
│   │   └── permission.ts    # 权限管理
│   ├── types/               # 类型定义
│   └── uni_modules/         # uni-app插件
├── pages.json               # 页面配置
├── manifest.json            # 应用配置
├── uni.scss                 # 全局样式
├── package.json            # 项目配置
└── vite.config.ts          # 构建配置
```

## 界面展示

> 📸 **[查看完整界面截图 →](/mobile/screenshots)**

## 体验下载

想要亲身体验海狸IM的功能？我们提供了Android体验包供您下载试用：

> 📱 **[立即下载体验包 →](/mobile/experience)**

体验包包含完整的聊天功能，让您在实际使用中感受海狸IM的强大功能和优秀体验。

## 核心特性

### 🔒 安全可靠
- JWT认证保护用户安全
- 本地数据安全存储
- 安全的用户认证机制

### 📱 跨平台
- 一套代码支持Android和H5
- 统一的用户界面

### 🛠️ 易于开发
- 基于uni-app框架开发
- 支持Vue 3 + TypeScript

## 下一步

- [📱 体验下载](./experience) - 下载Android体验包亲身体验
- [📸 界面展示](./screenshots) - 查看完整的应用界面截图
- [🛠️ 本地开发](./development) - 搭建本地开发环境 