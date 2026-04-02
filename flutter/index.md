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

## 快速开始

如果您想参与 Flutter 端的开发或在本地运行项目，请参考以下指南：

1. **环境准备**: 安装 Flutter SDK 並配置开发环境。
2. **克隆代码**: `git clone https://github.com/wsrh8888/beaver-flutter`
3. **安装依赖**: `flutter pub get`
4. **代码生成**: `dart run build_runner build` (如果使用了 Drift 或其他需要生成的库)
5. **运行项目**: `flutter run`
