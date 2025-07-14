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
- **数据存储**: uni.setStorage / SQLite
- **多媒体**: uni-app媒体API

### 架构特点

- **一码多端**: 一套代码编译到iOS、Android、小程序
- **原生性能**: 接近原生应用的性能体验
- **跨平台兼容**: 统一的API，平台差异最小化
- **丰富生态**: uni-app插件市场资源丰富
- **热更新**: 支持热更新机制

## 平台支持

### 📱 移动平台

- **iOS**: 原生iOS应用 (iOS 11+)
- **Android**: 原生Android应用 (Android 7.0+)
- **HarmonyOS**: 鸿蒙系统支持

### 🌐 小程序平台

- **微信小程序**: 支持微信生态
- **支付宝小程序**: 支付宝生态集成
- **抖音小程序**: 字节跳动生态
- **百度小程序**: 百度生态支持
- **QQ小程序**: QQ生态支持

### 💻 其他平台

- **H5**: 手机浏览器访问
- **快应用**: 华为、小米等快应用平台

## 应用特性

### 💬 聊天功能

- **实时消息**: WebSocket实时消息收发
- **多媒体消息**: 文本、图片、语音、视频、位置
- **表情包**: 丰富的表情包和自定义表情
- **消息状态**: 发送中、已送达、已读状态
- **撤回功能**: 2分钟内消息撤回
- **转发功能**: 消息转发和合并转发

### 👥 社交功能

- **好友管理**: 添加、删除、备注好友
- **群组聊天**: 创建、管理群组
- **朋友圈**: 动态发布和互动
- **用户资料**: 个人信息展示和编辑
- **在线状态**: 实时在线状态显示

### 🔔 消息推送

- **离线推送**: 支持厂商推送通道
- **消息免打扰**: 群组和好友免打扰设置
- **推送策略**: 智能推送策略
- **通知设置**: 个性化通知设置

### 🎨 界面体验

- **暗黑模式**: 支持明暗主题切换
- **字体大小**: 可调节字体大小
- **聊天背景**: 个性化聊天背景
- **手势操作**: 滑动操作和长按菜单

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

## 核心模块

### 1. 消息管理

```typescript
// src/utils/message.ts
export class MessageManager {
  private messages: Map<string, Message[]> = new Map()
  
  // 发送消息
  async sendMessage(conversationId: string, content: any) {
    const message = {
      id: generateId(),
      conversationId,
      content,
      timestamp: Date.now(),
      status: 'sending'
    }
    
    this.addMessage(conversationId, message)
    await this.uploadToServer(message)
  }
  
  // 接收消息
  receiveMessage(message: Message) {
    this.addMessage(message.conversationId, message)
    this.updateUnreadCount(message.conversationId)
  }
}
```

### 2. WebSocket连接

```typescript
// src/utils/websocket.ts
export class WebSocketManager {
  private ws: WebSocket | null = null
  private heartbeatTimer: number | null = null
  
  connect(url: string, token: string) {
    this.ws = new WebSocket(url)
    this.setupEventHandlers()
    this.startHeartbeat()
  }
  
  private setupEventHandlers() {
    this.ws!.onopen = this.handleOpen
    this.ws!.onmessage = this.handleMessage
    this.ws!.onclose = this.handleReconnect
  }
}
```

### 3. 状态管理

```typescript
// src/store/modules/user.ts
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as UserInfo | null,
    token: '',
    isLogin: false
  }),
  
  actions: {
    async login(loginData: LoginData) {
      const res = await api.login(loginData)
      this.userInfo = res.data.userInfo
      this.token = res.data.token
      this.isLogin = true
      
      // 保存到本地存储
      uni.setStorageSync('userInfo', this.userInfo)
      uni.setStorageSync('token', this.token)
    }
  }
})
```

### 4. 多媒体处理

```typescript
// src/utils/media.ts
export class MediaManager {
  // 选择图片
  static chooseImage() {
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count: 9,
        sourceType: ['album', 'camera'],
        success: resolve,
        fail: reject
      })
    })
  }
  
  // 录制音频
  static recordAudio() {
    const recorderManager = uni.getRecorderManager()
    recorderManager.start({
      duration: 60000,
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 48000,
      format: 'mp3'
    })
    return recorderManager
  }
}
```

## 平台适配

### iOS适配

```json
// manifest.json - iOS配置
{
  "app-plus": {
    "iOS": {
      "privacyDescription": {
        "NSCameraUsageDescription": "用于拍照发送图片",
        "NSPhotoLibraryUsageDescription": "用于选择相册图片",
        "NSMicrophoneUsageDescription": "用于录制语音消息"
      },
      "capabilities": {
        "entitlements": {
          "com.apple.developer.associated-domains": [
            "applinks:yourdomain.com"
          ]
        }
      }
    }
  }
}
```

### Android适配

```json
// manifest.json - Android配置
{
  "app-plus": {
    "Android": {
      "permissions": [
        "<uses-permission android:name=\"android.permission.CAMERA\" />",
        "<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
        "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />"
      ],
      "targetSdkVersion": 33,
      "compileSdkVersion": 33
    }
  }
}
```

## 功能实现

### 1. 聊天界面

```vue
<!-- src/pages/chat/chat.vue -->
<template>
  <view class="chat-container">
    <!-- 消息列表 -->
    <scroll-view class="message-list" :scroll-top="scrollTop">
      <message-item
        v-for="message in messages"
        :key="message.id"
        :message="message"
        @resend="resendMessage"
      />
    </scroll-view>
    
    <!-- 输入区域 -->
    <view class="input-area">
      <input
        v-model="inputText"
        placeholder="输入消息..."
        @confirm="sendMessage"
      />
      <button @click="sendMessage">发送</button>
    </view>
  </view>
</template>
```

### 2. 好友列表

```vue
<!-- src/pages/contacts/contacts.vue -->
<template>
  <view class="contacts-container">
    <uni-search-bar
      v-model="searchText"
      placeholder="搜索联系人"
      @input="searchContacts"
    />
    
    <uni-list>
      <uni-list-item
        v-for="friend in friendList"
        :key="friend.id"
        :title="friend.nickname"
        :thumb="friend.avatar"
        @click="openChat(friend)"
      />
    </uni-list>
  </view>
</template>
```

### 3. 消息推送

```typescript
// src/utils/push.ts
export class PushManager {
  // 初始化推送
  static init() {
    // #ifdef APP-PLUS
    const pushManager = plus.push
    pushManager.addEventListener('click', this.handlePushClick)
    pushManager.addEventListener('receive', this.handlePushReceive)
    // #endif
  }
  
  // 处理推送点击
  static handlePushClick(message: any) {
    // 跳转到对应聊天页面
    uni.navigateTo({
      url: `/pages/chat/chat?conversationId=${message.payload.conversationId}`
    })
  }
}
```

## 性能优化

### 1. 列表优化

- 虚拟滚动：长列表使用虚拟滚动
- 懒加载：图片和组件懒加载
- 分页加载：消息历史分页加载

### 2. 内存优化

- 图片压缩：发送前压缩图片
- 缓存管理：合理的缓存策略
- 内存回收：及时清理无用数据

### 3. 网络优化

- 请求合并：批量请求优化
- 缓存策略：接口数据缓存
- 重连机制：网络异常重连

## 发布流程

### 1. 版本管理

```json
// package.json
{
  "version": "1.0.0",
  "versionCode": "100"
}
```

### 2. 打包配置

```bash
# iOS打包
npm run build:app-ios

# Android打包
npm run build:app-android

# 小程序打包
npm run build:mp-weixin
```

### 3. 上架流程

- **App Store**: 通过HBuilderX云打包iOS
- **Google Play**: Android AAB格式上架
- **国内应用市场**: 各大Android应用市场
- **小程序**: 微信开发者工具发布

## 调试工具

### 1. 开发调试

```bash
# H5调试
npm run dev:h5

# 微信小程序调试
npm run dev:mp-weixin

# App调试（需要HBuilderX）
npm run dev:app-android
```

### 2. 真机调试

- HBuilderX真机运行
- 微信开发者工具调试
- Safari远程调试iOS
- Chrome远程调试Android

## 下一步

- [技术栈详解](./tech-stack.md) - 深入了解uni-app技术栈
- [项目结构](./structure.md) - 详细的项目结构说明
- [平台适配](./platform.md) - 各平台特性适配
- [开发指南](./development.md) - 本地开发环境搭建 