# <img src="/image/mobile/mobile.svg" alt="海狸IM uniapp开发指南" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">海狸IM uniapp开发指南

<div class="hero-banner mobile-hero">
  <div class="hero-content">
    <h2>uni-app 跨平台开发</h2>
    <p>一套代码，多端运行 - 支持 Android、iOS、H5、小程序的即时通讯应用</p>
    <div class="platform-badges">
      <span class="platform-badge android"><img src="/image/mobile/android.svg" alt="Android" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px; display: inline-block;">Android</span>
      <span class="platform-badge ios"><img src="/image/mobile/apple.svg" alt="iOS" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px; display: inline-block;">iOS</span>
      <span class="platform-badge h5"><img src="/image/mobile/web.svg" alt="H5" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px; display: inline-block;">H5</span>
      <span class="platform-badge wechat"><img src="/image/mobile/chat.svg" alt="微信小程序" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px; display: inline-block;">微信小程序</span>
    </div>
  </div>
</div>

## 🏗️ 技术架构全景

<div class="mobile-architecture">
  <div class="arch-layer frontend">
    <h3><img src="/image/mobile/palette.svg" alt="前端层" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">前端层</h3>
    <div class="layer-items">
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/lightning.svg" alt="Vue 3 + TypeScript" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>Vue 3 + TypeScript</h4>
          <p>现代化前端框架，类型安全</p>
        </div>
      </div>
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/target.svg" alt="Pinia 状态管理" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>Pinia 状态管理</h4>
          <p>响应式状态管理方案</p>
        </div>
      </div>
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/circus.svg" alt="自定义组件库" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>自定义组件库</h4>
          <p>统一的UI组件设计系统</p>
        </div>
      </div>
    </div>
  </div>

  <div class="arch-layer framework">
    <h3><img src="/image/mobile/rocket.svg" alt="框架层" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">框架层</h3>
    <div class="layer-items">
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/mobile.svg" alt="uni-app" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>uni-app 3.0+</h4>
          <p>跨平台应用开发框架</p>
        </div>
      </div>
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/lightning.svg" alt="Vue 3 + TypeScript" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>Vite 构建工具</h4>
          <p>极速的开发体验</p>
        </div>
      </div>
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/plug.svg" alt="WebSocket 通信" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>WebSocket 通信</h4>
          <p>实时消息推送</p>
        </div>
      </div>
    </div>
  </div>

  <div class="arch-layer platform">
    <h3><img src="/image/mobile/package.svg" alt="平台层" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">平台层</h3>
    <div class="layer-items">
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/android.svg" alt="Android" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>Android</h4>
          <p>原生 Android 应用</p>
        </div>
      </div>
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/apple.svg" alt="iOS" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>iOS</h4>
          <p>原生 iOS 应用</p>
        </div>
      </div>
      <div class="layer-item">
        <span class="item-icon"><img src="/image/mobile/chat.svg" alt="小程序" style="width: 20px; height: 20px; display: inline-block;"></span>
        <div class="item-info">
          <h4>小程序</h4>
          <p>微信小程序支持</p>
        </div>
      </div>
    </div>
  </div>
</div>

## <img src="/image/mobile/folder.svg" alt="项目结构深度解析" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">项目结构深度解析

<div class="project-structure">
  <div class="structure-overview">
    <h3>📂 核心目录结构</h3>
    <div class="structure-tree">
      <div class="tree-item root">
        <span class="tree-icon"><img src="/image/mobile/folder.svg" alt="src" style="width: 16px; height: 16px; display: inline-block;"></span>
        <span class="tree-name">beaver-mobile/</span>
        <div class="tree-children">
          <div class="tree-item">
            <span class="tree-icon"><img src="/image/mobile/palette.svg" alt="src" style="width: 16px; height: 16px; display: inline-block;"></span>
            <span class="tree-name">src/</span>
            <span class="tree-desc">源代码目录</span>
            <div class="tree-children">
              <div class="tree-item">
                <span class="tree-icon"><img src="/image/mobile/plug.svg" alt="api" style="width: 16px; height: 16px; display: inline-block;"></span>
                <span class="tree-name">api/</span>
                <span class="tree-desc">接口封装</span>
              </div>
              <div class="tree-item">
                <span class="tree-icon"><img src="/image/mobile/components.svg" alt="components" style="width: 16px; height: 16px; display: inline-block;"></span>
                <span class="tree-name">components/</span>
                <span class="tree-desc">可复用组件</span>
              </div>
              <div class="tree-item">
                <span class="tree-icon"><img src="/image/mobile/page.svg" alt="pages" style="width: 16px; height: 16px; display: inline-block;"></span>
                <span class="tree-name">pages/</span>
                <span class="tree-desc">页面组件</span>
              </div>
              <div class="tree-item">
                <span class="tree-icon"><img src="/image/mobile/storage.svg" alt="store" style="width: 16px; height: 16px; display: inline-block;"></span>
                <span class="tree-name">store/</span>
                <span class="tree-desc">状态管理</span>
              </div>
              <div class="tree-item">
                <span class="tree-icon"><img src="/image/mobile/tools.svg" alt="utils" style="width: 16px; height: 16px; display: inline-block;"></span>
                <span class="tree-name">utils/</span>
                <span class="tree-desc">工具函数</span>
              </div>
            </div>
          </div>
          <div class="tree-item">
            <span class="tree-icon"><img src="/image/mobile/mask.svg" alt="static" style="width: 16px; height: 16px; display: inline-block;"></span>
            <span class="tree-name">static/</span>
            <span class="tree-desc">静态资源</span>
          </div>
          <div class="tree-item">
            <span class="tree-icon"><img src="/image/mobile/gear.svg" alt="pages.json" style="width: 16px; height: 16px; display: inline-block;"></span>
            <span class="tree-name">pages.json</span>
            <span class="tree-desc">页面配置</span>
          </div>
          <div class="tree-item">
            <span class="tree-icon"><img src="/image/mobile/mobile.svg" alt="manifest.json" style="width: 16px; height: 16px; display: inline-block;"></span>
            <span class="tree-name">manifest.json</span>
            <span class="tree-desc">应用配置</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="structure-features">
    <div class="feature-card api">
      <div class="feature-icon"><img src="/image/mobile/plug.svg" alt="API 层设计" style="width: 24px; height: 24px; display: inline-block;"></div>
      <h4>API 层设计</h4>
      <ul>
        <li>统一的请求封装</li>
        <li>自动错误处理</li>
        <li>请求/响应拦截器</li>
        <li>Token 自动刷新</li>
      </ul>
    </div>
    <div class="feature-card components">
      <div class="feature-icon"><img src="/image/mobile/components.svg" alt="组件化开发" style="width: 24px; height: 24px; display: inline-block;"></div>
      <h4>组件化开发</h4>
      <ul>
        <li>可复用的UI组件</li>
        <li>聊天气泡组件</li>
        <li>多媒体消息组件</li>
        <li>通用工具组件</li>
      </ul>
    </div>
    <div class="feature-card state">
      <div class="feature-icon"><img src="/image/mobile/storage.svg" alt="状态管理" style="width: 24px; height: 24px; display: inline-block;"></div>
      <h4>状态管理</h4>
      <ul>
        <li>用户信息管理</li>
        <li>聊天会话状态</li>
        <li>消息列表缓存</li>
        <li>应用配置存储</li>
      </ul>
    </div>
  </div>
</div>

## <img src="/image/mobile/rocket.svg" alt="环境搭建" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">环境搭建

### 1. 克隆项目

```bash
git clone https://github.com/wsrh8888/beaver-mobile.git
cd beaver-mobile
```

### 2. 安装Node.js

```bash
# 使用nvm安装Node.js 20
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# 验证安装
node --version  # 应该显示 v20.x.x
npm --version
```

### 3. 安装开发工具

#### HBuilderX (推荐)

1. 下载HBuilderX: [https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)
2. 安装uni-app插件
3. 配置开发环境

#### VS Code (可选)

```bash
# 安装推荐插件
# - uni-app-schemas
# - uni-app-snippets
# - Vetur 或 Vue Language Features (Volar)
```

### 4. 安装项目依赖

```bash
# 环境要求：Node.js 20
npm install

# 或者使用yarn
yarn install
```

## ⚙️ 项目配置

### 1. 页面配置 (pages.json)

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "海狸IM"
      }
    },
    {
      "path": "pages/chat/chat",
      "style": {
        "navigationBarTitleText": "聊天",
        "enablePullDownRefresh": false
      }
    },
    {
      "path": "pages/contacts/contacts",
      "style": {
        "navigationBarTitleText": "联系人"
      }
    }
  ],
  "tabBar": {
    "color": "#8A8A8A",
    "selectedColor": "#FF7D45",
    "backgroundColor": "#FFFFFF",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/icons/chat.png",
        "selectedIconPath": "static/icons/chat-active.png",
        "text": "聊天"
      },
      {
        "pagePath": "pages/contacts/contacts",
        "iconPath": "static/icons/contacts.png",
        "selectedIconPath": "static/icons/contacts-active.png",
        "text": "联系人"
      },
      {
        "pagePath": "pages/profile/profile",
        "iconPath": "static/icons/profile.png",
        "selectedIconPath": "static/icons/profile-active.png",
        "text": "我的"
      }
    ]
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "海狸IM",
    "navigationBarBackgroundColor": "#FFFFFF",
    "backgroundColor": "#F8F8F8"
  }
}
```

### 2. 应用配置 (manifest.json)

```json
{
  "name": "beaver-mobile",
  "appid": "__UNI__BEAVER_IM",
  "description": "海狸IM移动端",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {
      "Camera": {},
      "Gallery": {},
      "Audio": {},
      "VideoPlayer": {}
    },
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
          "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\" />",
          "<uses-permission android:name=\"android.permission.VIBRATE\" />",
          "<uses-permission android:name=\"android.permission.READ_LOGS\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
          "<uses-permission android:name=\"android.permission.CAMERA\" />",
          "<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
          "<uses-permission android:name=\"android.permission.FLASHLIGHT\" />",
          "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
          "<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />"
        ]
      },
      "ios": {
        "privacyDescription": {
          "NSCameraUsageDescription": "用于拍照发送图片消息",
          "NSPhotoLibraryUsageDescription": "用于选择相册图片发送",
          "NSMicrophoneUsageDescription": "用于录制语音消息",
          "NSLocationWhenInUseUsageDescription": "用于发送位置信息"
        }
      }
    }
  },
  "quickapp": {},
  "mp-weixin": {
    "appid": "",
    "setting": {
      "urlCheck": false
    },
    "usingComponents": true
  },
  "h5": {
    "title": "海狸IM",
    "template": "index.html"
  }
}
```

## <img src="/image/mobile/clipboard.svg" alt="开发流程" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">开发流程

### 1. 启动开发环境

```bash
# H5开发
npm run dev:h5

# 微信小程序开发
npm run dev:mp-weixin

# Android开发
npm run dev:app-android

# iOS开发  
npm run dev:app-ios

# 或者根据项目实际配置
npm run build_test
```

### 2. API接口封装

```javascript
// src/api/request.js
import { CONFIG } from '@/config'

class Request {
  constructor() {
    this.baseURL = CONFIG.API_BASE_URL
    this.timeout = 10000
  }

  request(options) {
    return new Promise((resolve, reject) => {
      // 获取token
      const token = uni.getStorageSync('token')
      
      uni.request({
        url: this.baseURL + options.url,
        method: options.method || 'GET',
        data: options.data || {},
        header: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '',
          ...options.header
        },
        timeout: this.timeout,
        success: (res) => {
          if (res.statusCode === 200) {
            if (res.data.code === 200) {
              resolve(res.data)
            } else {
              uni.showToast({
                title: res.data.message || '请求失败',
                icon: 'none'
              })
              reject(res.data)
            }
          } else {
            reject(res)
          }
        },
        fail: (err) => {
          uni.showToast({
            title: '网络异常',
            icon: 'none'
          })
          reject(err)
        }
      })
    })
  }

  get(url, data = {}) {
    return this.request({ method: 'GET', url, data })
  }

  post(url, data = {}) {
    return this.request({ method: 'POST', url, data })
  }

  put(url, data = {}) {
    return this.request({ method: 'PUT', url, data })
  }

  delete(url, data = {}) {
    return this.request({ method: 'DELETE', url, data })
  }
}

export default new Request()
```

```javascript
// src/api/user.js
import request from './request'

export const userApi = {
  // 用户登录
  login(data) {
    return request.post('/api/user/login', data)
  },

  // 用户注册
  register(data) {
    return request.post('/api/user/register', data)
  },

  // 获取用户信息
  getUserInfo() {
    return request.get('/api/user/info')
  },

  // 更新用户信息
  updateUserInfo(data) {
    return request.put('/api/user/info', data)
  },

  // 上传头像
  uploadAvatar(filePath) {
    return new Promise((resolve, reject) => {
      const token = uni.getStorageSync('token')
      
      uni.uploadFile({
        url: CONFIG.API_BASE_URL + '/api/upload/avatar',
        filePath: filePath,
        name: 'file',
        header: {
          'Authorization': `Bearer ${token}`
        },
        success: (res) => {
          const data = JSON.parse(res.data)
          if (data.code === 200) {
            resolve(data)
          } else {
            reject(data)
          }
        },
        fail: reject
      })
    })
  }
}
```

### 3. WebSocket连接管理

```javascript
// src/utils/websocket.js
class WebSocketManager {
  constructor() {
    this.ws = null
    this.reconnectTimer = null
    this.heartbeatTimer = null
    this.isConnected = false
    this.reconnectCount = 0
    this.maxReconnectCount = 5
    this.messageHandlers = new Map()
  }

  connect(url, token) {
    if (this.ws) {
      this.close()
    }

    this.ws = uni.connectSocket({
      url: `${url}?token=${token}`,
      success: () => {
        console.log('WebSocket连接成功')
      },
      fail: (err) => {
        console.error('WebSocket连接失败:', err)
      }
    })

    this.ws.onOpen(() => {
      console.log('WebSocket已连接')
      this.isConnected = true
      this.reconnectCount = 0
      this.startHeartbeat()
    })

    this.ws.onMessage((message) => {
      try {
        const data = JSON.parse(message.data)
        this.handleMessage(data)
      } catch (error) {
        console.error('消息解析失败:', error)
      }
    })

    this.ws.onClose(() => {
      console.log('WebSocket连接关闭')
      this.isConnected = false
      this.stopHeartbeat()
      this.reconnect()
    })

    this.ws.onError((error) => {
      console.error('WebSocket错误:', error)
      this.isConnected = false
    })
  }

  send(data) {
    if (this.isConnected && this.ws) {
      this.ws.send({
        data: JSON.stringify(data),
        success: () => {
          console.log('消息发送成功')
        },
        fail: (err) => {
          console.error('消息发送失败:', err)
        }
      })
    }
  }

  handleMessage(data) {
    const { type } = data
    const handler = this.messageHandlers.get(type)
    
    if (handler) {
      handler(data)
    } else {
      console.log('未处理的消息类型:', type)
    }
  }

  onMessage(type, handler) {
    this.messageHandlers.set(type, handler)
  }

  startHeartbeat() {
    this.heartbeatTimer = setInterval(() => {
      this.send({ type: 'ping' })
    }, 30000) // 30秒心跳
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  reconnect() {
    if (this.reconnectCount >= this.maxReconnectCount) {
      console.log('达到最大重连次数，停止重连')
      return
    }

    this.reconnectTimer = setTimeout(() => {
      console.log(`第${this.reconnectCount + 1}次重连...`)
      this.reconnectCount++
      
      const token = uni.getStorageSync('token')
      if (token) {
        this.connect(CONFIG.WS_URL, token)
      }
    }, 3000 * Math.pow(2, this.reconnectCount)) // 指数退避
  }

  close() {
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
    
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
    
    this.stopHeartbeat()
    this.isConnected = false
  }
}

export default new WebSocketManager()
```

### 4. 状态管理

```javascript
// src/store/index.js
import { createPinia, defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: '',
    isLogin: false
  }),

  getters: {
    avatar: (state) => state.userInfo?.avatar || '/static/images/default-avatar.png',
    nickname: (state) => state.userInfo?.nickname || '用户'
  },

  actions: {
    async login(loginData) {
      try {
        const res = await userApi.login(loginData)
        this.userInfo = res.data.userInfo
        this.token = res.data.token
        this.isLogin = true
        
        // 保存到本地存储
        uni.setStorageSync('userInfo', this.userInfo)
        uni.setStorageSync('token', this.token)
        uni.setStorageSync('isLogin', true)
        
        return res
      } catch (error) {
        throw error
      }
    },

    logout() {
      this.userInfo = null
      this.token = ''
      this.isLogin = false
      
      // 清除本地存储
      uni.removeStorageSync('userInfo')
      uni.removeStorageSync('token')
      uni.removeStorageSync('isLogin')
      
      // 关闭WebSocket连接
      WebSocketManager.close()
      
      // 跳转到登录页
      uni.reLaunch({
        url: '/pages/login/login'
      })
    },

    loadUserFromStorage() {
      const userInfo = uni.getStorageSync('userInfo')
      const token = uni.getStorageSync('token')
      const isLogin = uni.getStorageSync('isLogin')
      
      if (userInfo && token && isLogin) {
        this.userInfo = userInfo
        this.token = token
        this.isLogin = isLogin
      }
    }
  }
})

export const useChatStore = defineStore('chat', {
  state: () => ({
    conversationList: [],
    currentConversation: null,
    messageList: []
  }),

  actions: {
    addMessage(message) {
      this.messageList.push(message)
    },

    updateMessageStatus(messageId, status) {
      const message = this.messageList.find(m => m.id === messageId)
      if (message) {
        message.status = status
      }
    }
  }
})
```

### 5. 页面开发示例

```vue
<!-- src/pages/chat/chat.vue -->
<template>
  <view class="chat-container">
    <!-- 消息列表 -->
    <scroll-view 
      class="message-list" 
      :scroll-top="scrollTop"
      scroll-y
      @scrolltoupper="loadMoreMessages"
    >
      <view 
        v-for="message in messageList" 
        :key="message.id" 
        class="message-item"
        :class="{ 'own-message': message.senderId === userInfo.id }"
      >
        <image 
          class="avatar" 
          :src="message.senderAvatar || '/static/images/default-avatar.png'"
        />
        <view class="message-content">
          <text class="message-text">{{ message.content }}</text>
          <text class="message-time">{{ formatTime(message.timestamp) }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- 输入区域 -->
    <view class="input-area">
      <input 
        v-model="inputText"
        class="message-input"
        placeholder="输入消息..."
        @confirm="sendMessage"
        confirm-type="send"
      />
      <view class="input-actions">
        <button @click="chooseImage" class="action-btn"><img src="/image/mobile/camera.svg" alt="选择图片" style="width: 16px; height: 16px; display: inline-block;"></button>
        <button @click="sendMessage" class="send-btn" :disabled="!inputText.trim()">
          发送
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUserStore, useChatStore } from '@/store'
import WebSocketManager from '@/utils/websocket'

export default {
  setup() {
    const userStore = useUserStore()
    const chatStore = useChatStore()
    
    const inputText = ref('')
    const scrollTop = ref(0)
    
    const userInfo = computed(() => userStore.userInfo)
    const messageList = computed(() => chatStore.messageList)

    const sendMessage = () => {
      if (!inputText.value.trim()) return

      const message = {
        id: Date.now(),
        content: inputText.value,
        senderId: userInfo.value.id,
        senderAvatar: userInfo.value.avatar,
        timestamp: Date.now(),
        status: 'sending'
      }

      chatStore.addMessage(message)
      
      // 发送WebSocket消息
      WebSocketManager.send({
        type: 'message',
        data: message
      })

      inputText.value = ''
      scrollToBottom()
    }

    const chooseImage = () => {
      uni.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        success: (res) => {
          const filePath = res.tempFilePaths[0]
          uploadImage(filePath)
        }
      })
    }

    const uploadImage = (filePath) => {
      uni.uploadFile({
        url: CONFIG.API_BASE_URL + '/api/upload/image',
        filePath: filePath,
        name: 'file',
        header: {
          'Authorization': `Bearer ${userStore.token}`
        },
        success: (res) => {
          const data = JSON.parse(res.data)
          if (data.code === 200) {
            const message = {
              id: Date.now(),
              type: 'image',
              content: data.data.url,
              senderId: userInfo.value.id,
              timestamp: Date.now()
            }
            chatStore.addMessage(message)
            WebSocketManager.send({
              type: 'message',
              data: message
            })
          }
        }
      })
    }

    const formatTime = (timestamp) => {
      const date = new Date(timestamp)
      return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
    }

    const scrollToBottom = () => {
      scrollTop.value = 999999
    }

    onMounted(() => {
      // 监听WebSocket消息
      WebSocketManager.onMessage('message', (data) => {
        chatStore.addMessage(data.data)
        scrollToBottom()
      })
    })

    return {
      userInfo,
      messageList,
      inputText,
      scrollTop,
      sendMessage,
      chooseImage,
      formatTime
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.message-list {
  flex: 1;
  padding: 20rpx;
}

.message-item {
  display: flex;
  margin-bottom: 30rpx;
  
  &.own-message {
    flex-direction: row-reverse;
  }
}

.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin: 0 20rpx;
}

.message-content {
  max-width: 60%;
  background: #f0f0f0;
  padding: 20rpx;
  border-radius: 20rpx;
}

.own-message .message-content {
  background: #FF7D45;
  color: white;
}

.input-area {
  display: flex;
  align-items: center;
  padding: 20rpx;
  background: white;
  border-top: 1px solid #eee;
}

.message-input {
  flex: 1;
  padding: 20rpx;
  border: 1px solid #ddd;
  border-radius: 30rpx;
  margin-right: 20rpx;
}

.input-actions {
  display: flex;
  gap: 10rpx;
}

.action-btn, .send-btn {
  padding: 10rpx 20rpx;
  border-radius: 20rpx;
  border: none;
  background: #FF7D45;
  color: white;
}

.send-btn:disabled {
  background: #ccc;
}
</style>
```

## <img src="/image/mobile/mobile.svg" alt="平台适配" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">平台适配

### 1. Android适配

```javascript
// Android平台特殊处理
// #ifdef APP-PLUS-ANDROID
// Android专用代码
// #endif
```

### 2. iOS适配

```javascript
// iOS平台特殊处理
// #ifdef APP-PLUS-IOS
// iOS专用代码
// #endif
```

### 3. 小程序适配

```javascript
// 微信小程序适配
// #ifdef MP-WEIXIN
// 微信小程序专用代码
// #endif
```

## <img src="/image/mobile/wrench.svg" alt="构建和发布" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">构建和发布

### 1. 构建命令

```bash
# 构建H5
npm run build:h5

# 构建微信小程序
npm run build:mp-weixin

# 构建App
npm run build_test
```

### 2. 发布流程

1. **Android发布**:
   - 在HBuilderX中选择"发行" -> "原生App-云打包"
   - 配置签名证书
   - 生成APK文件

2. **iOS发布**:
   - 配置苹果开发者证书
   - 云打包生成ipa文件
   - 上传到App Store

3. **小程序发布**:
   - 在微信开发者工具中上传代码
   - 提交审核
   - 发布上线

## <img src="/image/mobile/bug.svg" alt="调试技巧" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">调试技巧

### 1. 控制台调试

```javascript
// 使用uni.showModal替代alert
uni.showModal({
  title: '调试信息',
  content: JSON.stringify(data),
  showCancel: false
})

// 使用console.log
console.log('调试信息:', data)
```

### 2. 真机调试

- Android: 使用ADB连接真机调试
- iOS: 使用Safari远程调试
- 小程序: 微信开发者工具真机预览

## <img src="/image/mobile/book.svg" alt="相关资源" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">相关资源

- [uni-app官方文档](https://uniapp.dcloud.net.cn/)
- [Vue.js官方文档](https://vuejs.org/)
- [Pinia官方文档](https://pinia.vuejs.org/)

如果在开发过程中遇到问题，欢迎在GitHub Issues中提问或加入QQ群(1013328597)交流！ 

<style>
/* 移动端开发指南样式 */
:root {
  --primary-color: #FF7D45;
  --primary-dark: #E86835;
  --primary-light: #FFE6D9;
  --secondary-blue: #4A6FA1;
  --text-primary: #2D3436;
  --text-secondary: #636E72;
  --text-muted: #B2BEC3;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;
  --border-color: #EBEEF5;
  --success-color: #4CAF50;
  --warning-color: #FFC107;
  --error-color: #FF5252;
  --info-color: #2196F3;
}

/* 移动端主题英雄区 */
.mobile-hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
}

.platform-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.platform-badge {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.platform-badge:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

/* 移动端架构层 */
.mobile-architecture {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.arch-layer {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
}

.arch-layer:hover {
  box-shadow: 0 8px 24px rgba(255, 125, 69, 0.12);
  transform: translateY(-2px);
}

.arch-layer.frontend::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
  border-radius: 16px 16px 0 0;
}

.arch-layer.framework::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-blue), #3A5A89);
  border-radius: 16px 16px 0 0;
}

.arch-layer.platform::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--success-color), #45A049);
  border-radius: 16px 16px 0 0;
}

.arch-layer h3 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.layer-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.layer-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.layer-item:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
}

.item-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.item-info h4 {
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.item-info p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* 项目结构 */
.project-structure {
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.structure-overview {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
}

.structure-overview h3 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.structure-tree {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
}

.tree-item {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.tree-children {
  margin-left: 1.5rem;
  border-left: 2px solid var(--border-color);
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.tree-icon {
  margin-right: 0.5rem;
}

.tree-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 0.5rem;
}

.tree-desc {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-style: italic;
}

.structure-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 4px 16px rgba(255, 125, 69, 0.1);
  border-color: var(--primary-light);
}

.feature-card .feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-card li {
  padding: 0.3rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  position: relative;
  padding-left: 1.5rem;
}

.feature-card li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 0.7rem;
}

/* 响应式设计 */
@media (max-width: 968px) {
  .project-structure {
    grid-template-columns: 1fr;
  }
  
  .layer-items {
    grid-template-columns: 1fr;
  }
  
  .platform-badges {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .platform-badges {
    flex-direction: column;
    align-items: center;
  }
  
  .mobile-architecture {
    gap: 1.5rem;
  }
  
  .arch-layer {
    padding: 1.5rem;
  }
}
</style> 