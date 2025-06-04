# 桌面端开发概述

海狸IM桌面客户端基于Electron + Vue 3技术栈开发，提供跨平台的桌面即时通讯体验，支持Windows、macOS和Linux系统。

## 技术架构

### 核心技术栈

- **框架**: Electron 31.2+
- **前端**: Vue 3.4+ + TypeScript
- **构建工具**: Vite 5.3+
- **UI框架**: Element Plus 2.9+
- **状态管理**: Pinia 2.1+
- **路由**: Vue Router 4.2+
- **通信协议**: WebSocket + HTTP API
- **打包工具**: electron-builder

### 架构特点

- **跨平台**: 一套代码运行在Windows、macOS、Linux
- **原生体验**: 系统托盘、通知、快捷键等原生功能
- **高性能**: 基于Chromium内核，流畅的用户体验
- **安全性**: 进程隔离，安全的数据传输
- **可扩展**: 模块化设计，易于功能扩展

## 应用特性

### 🖥️ 桌面体验

- **系统托盘**: 最小化到系统托盘，快速访问
- **桌面通知**: 新消息系统通知提醒
- **全局快捷键**: 快速唤醒应用窗口
- **开机启动**: 支持开机自动启动
- **窗口管理**: 多窗口支持，记忆窗口状态

### 💬 聊天功能

- **实时消息**: WebSocket实时消息收发
- **多媒体**: 支持文本、图片、文件传输
- **表情符号**: 丰富的表情包支持
- **消息状态**: 已送达、已读状态显示
- **历史记录**: 本地消息存储和搜索

### 👥 联系人管理

- **好友列表**: 在线状态显示
- **群组聊天**: 群组创建和管理
- **用户信息**: 个人资料查看和编辑
- **搜索功能**: 联系人和消息搜索

### 🎨 界面设计

- **现代UI**: 简洁美观的界面设计
- **主题切换**: 支持明暗主题切换
- **响应式**: 适配不同屏幕尺寸
- **个性化**: 可自定义界面设置

## 项目结构

```
beaver-desktop/
├── src/
│   ├── main/                  # 主进程
│   │   ├── index.ts          # 主进程入口
│   │   ├── window.ts         # 窗口管理
│   │   ├── menu.ts           # 菜单配置
│   │   ├── tray.ts           # 系统托盘
│   │   └── updater.ts        # 自动更新
│   ├── render/               # 渲染进程
│   │   ├── app/              # 应用主体
│   │   │   ├── components/   # 通用组件
│   │   │   ├── page/         # 页面组件
│   │   │   ├── pinia/        # 状态管理
│   │   │   ├── router/       # 路由配置
│   │   │   ├── utils/        # 工具函数
│   │   │   └── ws-manager/   # WebSocket管理
│   │   ├── login/            # 登录页面
│   │   └── preload.ts        # 预加载脚本
│   └── shared/               # 共享模块
│       ├── types/            # 类型定义
│       └── constants/        # 常量定义
├── public/                   # 静态资源
├── build/                    # 构建配置
├── resource/                 # 应用资源
│   ├── app.ico              # 应用图标
│   └── installer/           # 安装程序资源
├── package.json             # 项目配置
├── vite.config.ts           # Vite配置
└── electron-builder.json    # 打包配置
```

## 核心模块

### 1. 主进程 (Main Process)

主进程负责应用的生命周期管理和系统级功能：

```typescript
// src/main/index.ts
import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'
import { createTray } from './tray'
import { setupMenu } from './menu'

class Application {
  private mainWindow: BrowserWindow | null = null

  async init() {
    await app.whenReady()
    this.mainWindow = createWindow()
    createTray(this.mainWindow)
    setupMenu()
  }
}

new Application().init()
```

### 2. 渲染进程 (Renderer Process)

渲染进程负责UI界面和用户交互：

```typescript
// src/render/app/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
```

### 3. WebSocket管理器

负责与服务端的实时通信：

```typescript
// src/render/app/ws-manager/index.ts
export class WsManager {
  private ws: WebSocket | null = null
  private heartbeatTimer: number | null = null
  
  connect(url: string, token: string) {
    this.ws = new WebSocket(url)
    this.setupEventHandlers()
    this.startHeartbeat()
  }
  
  sendMessage(data: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data))
    }
  }
  
  private setupEventHandlers() {
    this.ws!.onopen = this.handleOpen
    this.ws!.onmessage = this.handleMessage
    this.ws!.onclose = this.handleClose
    this.ws!.onerror = this.handleError
  }
}
```

### 4. 状态管理

使用Pinia进行状态管理：

```typescript
// src/render/app/pinia/user/user.ts
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as UserInfo | null,
    isLogin: false
  }),
  
  actions: {
    async login(credentials: LoginData) {
      const response = await api.login(credentials)
      this.userInfo = response.data
      this.isLogin = true
    },
    
    logout() {
      this.userInfo = null
      this.isLogin = false
    }
  }
})
```

## 进程通信

### IPC通信机制

主进程和渲染进程通过IPC进行通信：

```typescript
// 主进程监听
ipcMain.handle('get-app-version', () => {
  return app.getVersion()
})

// 渲染进程调用
const version = await ipcRenderer.invoke('get-app-version')
```

### 预加载脚本

通过预加载脚本安全地暴露API：

```typescript
// src/render/preload.ts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  getVersion: () => ipcRenderer.invoke('get-app-version'),
  minimize: () => ipcRenderer.invoke('window-minimize'),
  close: () => ipcRenderer.invoke('window-close')
})
```

## 功能模块

### 1. 用户认证

- 用户登录/注册
- Token管理
- 自动登录
- 账号切换

### 2. 消息收发

- 文本消息
- 图片消息
- 文件传输
- 表情符号

### 3. 联系人管理

- 好友列表
- 群组管理
- 用户搜索
- 在线状态

### 4. 系统集成

- 系统托盘
- 桌面通知
- 全局快捷键
- 开机启动

## 开发环境搭建

### 1. 环境要求

- Node.js 18+
- npm 或 yarn
- Git

### 2. 克隆项目

```bash
git clone https://github.com/your-repo/beaver-im.git
cd beaver-im/beaver-desktop
```

### 3. 安装依赖

```bash
npm install
```

### 4. 启动开发环境

```bash
# 启动开发服务器
npm run dev
```

### 5. 构建生产版本

```bash
# 构建渲染进程
npm run build-renderer

# 构建Electron应用
npm run build-electron

# 完整构建流程
npm run package
```

## 打包分发

### Windows平台

```bash
# 生成Windows安装包
npm run package-install
```

生成文件：
- `release/海狸-{version}.exe` - NSIS安装程序

### macOS平台

```bash
# 生成macOS应用
electron-builder --mac
```

生成文件：
- `release/海狸-{version}.dmg` - DMG安装包
- `release/海狸-{version}.app` - 应用程序

### Linux平台

```bash
# 生成Linux应用
electron-builder --linux
```

生成文件：
- `release/海狸-{version}.AppImage` - AppImage格式
- `release/海狸-{version}.deb` - Debian包
- `release/海狸-{version}.rpm` - RPM包

## 自动更新

支持应用自动更新机制：

```typescript
// src/main/updater.ts
import { autoUpdater } from 'electron-updater'

export function setupAutoUpdater() {
  autoUpdater.checkForUpdatesAndNotify()
  
  autoUpdater.on('update-available', () => {
    // 发现更新
  })
  
  autoUpdater.on('update-downloaded', () => {
    // 更新已下载，提示重启
  })
}
```

## 性能优化

### 1. 启动优化

- 预加载关键模块
- 延迟加载非关键功能
- 窗口显示优化

### 2. 内存优化

- 图片懒加载
- 虚拟滚动
- 内存泄漏监控

### 3. 渲染优化

- Vue组件懒加载
- CSS优化
- 动画性能优化

## 调试指南

### 开发者工具

```bash
# 启动时打开开发者工具
npm run dev -- --debug
```

### 日志系统

```typescript
import log from 'electron-log'

log.info('应用启动')
log.error('发生错误', error)
```

日志文件位置：
- Windows: `%USERPROFILE%\AppData\Roaming\海狸\logs\`
- macOS: `~/Library/Logs/海狸/`
- Linux: `~/.config/海狸/logs/`

## 下一步

- [技术栈详解](./tech-stack.md) - 深入了解技术选型
- [项目结构](./structure.md) - 详细的项目结构说明
- [WebSocket连接](./websocket.md) - WebSocket通信机制
- [开发指南](./development.md) - 本地开发环境搭建 