# 💻 海狸IM 桌面端开发指南

<div class="hero-banner desktop-hero">
  <div class="hero-content">
    <h2>Electron 跨平台桌面应用</h2>
    <p>基于 Electron + Vue 3 构建现代化桌面端即时通讯应用</p>
    <div class="platform-icons">
      <span class="platform-icon windows">🪟 Windows</span>
      <span class="platform-icon macos">🍎 macOS</span>
      <span class="platform-icon linux">🐧 Linux</span>
    </div>
  </div>
</div>

## 🏗️ 技术架构深度解析

<div class="desktop-architecture">
  <div class="arch-process main-process">
    <div class="process-header">
      <h3>⚡ 主进程 (Main Process)</h3>
      <span class="process-badge">Node.js Runtime</span>
    </div>
    <div class="process-features">
      <div class="feature-item">
        <span class="feature-icon">🖼️</span>
        <div class="feature-content">
          <h4>窗口管理</h4>
          <p>创建、控制和管理应用窗口</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🔧</span>
        <div class="feature-content">
          <h4>系统集成</h4>
          <p>系统托盘、菜单、通知</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🔄</span>
        <div class="feature-content">
          <h4>生命周期</h4>
          <p>应用启动、退出、更新</p>
        </div>
      </div>
    </div>
  </div>

  <div class="arch-bridge">
    <div class="bridge-content">
      <h4>🔗 IPC 通信桥</h4>
      <div class="bridge-features">
        <span class="bridge-item">contextBridge</span>
        <span class="bridge-item">ipcMain</span>
        <span class="bridge-item">ipcRenderer</span>
        <span class="bridge-item">preload</span>
      </div>
      <p>安全的进程间通信机制</p>
    </div>
  </div>

  <div class="arch-process renderer-process">
    <div class="process-header">
      <h3>🎨 渲染进程 (Renderer Process)</h3>
      <span class="process-badge">Chromium Engine</span>
    </div>
    <div class="process-features">
      <div class="feature-item">
        <span class="feature-icon">⚡</span>
        <div class="feature-content">
          <h4>Vue 3 框架</h4>
          <p>组件化、响应式UI开发</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🎯</span>
        <div class="feature-content">
          <h4>TypeScript</h4>
          <p>类型安全的代码开发</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🎪</span>
        <div class="feature-content">
          <h4>Element Plus</h4>
          <p>丰富的UI组件库</p>
        </div>
      </div>
    </div>
  </div>
</div>

## 📂 项目结构全景图

<div class="project-overview">
  <div class="overview-tree">
    <h3>📁 核心目录架构</h3>
    <div class="file-tree">
      <div class="tree-root">
        <span class="tree-icon">📦</span>
        <span class="tree-label">beaver-desktop/</span>
        <div class="tree-branch">
          <div class="branch-item main">
            <span class="tree-icon">⚡</span>
            <span class="tree-label">src/main/</span>
            <span class="tree-desc">主进程源码</span>
            <div class="tree-subbranch">
              <div class="subbranch-item">
                <span class="file-icon">📄</span>
                <span class="file-name">index.ts</span>
                <span class="file-desc">应用入口</span>
              </div>
              <div class="subbranch-item">
                <span class="file-icon">🪟</span>
                <span class="file-name">window.ts</span>
                <span class="file-desc">窗口管理</span>
              </div>
              <div class="subbranch-item">
                <span class="file-icon">🔗</span>
                <span class="file-name">ipc.ts</span>
                <span class="file-desc">进程通信</span>
              </div>
              <div class="subbranch-item">
                <span class="file-icon">🔔</span>
                <span class="file-name">tray.ts</span>
                <span class="file-desc">系统托盘</span>
              </div>
            </div>
          </div>
          <div class="branch-item render">
            <span class="tree-icon">🎨</span>
            <span class="tree-label">src/render/</span>
            <span class="tree-desc">渲染进程源码</span>
            <div class="tree-subbranch">
              <div class="subbranch-item">
                <span class="folder-icon">🧩</span>
                <span class="file-name">components/</span>
                <span class="file-desc">Vue组件</span>
              </div>
              <div class="subbranch-item">
                <span class="folder-icon">📄</span>
                <span class="file-name">pages/</span>
                <span class="file-desc">页面组件</span>
              </div>
              <div class="subbranch-item">
                <span class="folder-icon">🗃️</span>
                <span class="file-name">store/</span>
                <span class="file-desc">状态管理</span>
              </div>
              <div class="subbranch-item">
                <span class="folder-icon">🌐</span>
                <span class="file-name">router/</span>
                <span class="file-desc">路由配置</span>
              </div>
            </div>
          </div>
          <div class="branch-item shared">
            <span class="tree-icon">🤝</span>
            <span class="tree-label">src/shared/</span>
            <span class="tree-desc">共享模块</span>
          </div>
          <div class="branch-item build">
            <span class="tree-icon">🔨</span>
            <span class="tree-label">build/</span>
            <span class="tree-desc">构建配置</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="overview-highlights">
    <div class="highlight-section">
      <h3>🏗️ 架构特点</h3>
      <div class="highlight-grid">
        <div class="highlight-item security">
          <div class="highlight-icon">🔒</div>
          <h4>安全隔离</h4>
          <p>主进程与渲染进程完全隔离，通过IPC安全通信</p>
        </div>
        <div class="highlight-item performance">
          <div class="highlight-icon">⚡</div>
          <h4>高性能</h4>
          <p>基于Chromium引擎，支持硬件加速和多进程</p>
        </div>
        <div class="highlight-item crossplatform">
          <div class="highlight-icon">🌍</div>
          <h4>跨平台</h4>
          <p>一套代码支持Windows、macOS、Linux</p>
        </div>
        <div class="highlight-item modern">
          <div class="highlight-icon">🚀</div>
          <h4>现代化</h4>
          <p>Vue 3 + TypeScript + Vite 现代开发工具链</p>
        </div>
      </div>
    </div>
  </div>
</div>

## 🔧 核心技术栈

<div class="tech-stack-section">
  <div class="stack-category frontend">
    <div class="category-header">
      <h3>🎨 前端技术</h3>
      <span class="category-badge">渲染进程</span>
    </div>
    <div class="tech-grid">
      <div class="tech-item">
        <div class="tech-logo">⚡</div>
        <div class="tech-info">
          <h4>Vite</h4>
          <span class="tech-version">v5.3+</span>
          <p>构建工具</p>
        </div>
      </div>
      <div class="tech-item">
        <div class="tech-logo">🎪</div>
        <div class="tech-info">
          <h4>Element Plus</h4>
          <span class="tech-version">v2.9+</span>
          <p>Vue 3版本的组件库</p>
        </div>
      </div>
      <div class="tech-item">
        <div class="tech-logo">🎯</div>
        <div class="tech-info">
          <h4>Pinia</h4>
          <span class="tech-version">v2.1+</span>
          <p>Vue 3官方状态管理</p>
        </div>
      </div>
    </div>
  </div>
  <div class="stack-category backend">
    <div class="category-header">
      <h3>⚡ 主进程技术</h3>
      <span class="category-badge">Node.js环境</span>
    </div>
    <div class="tech-grid">
      <div class="tech-item">
        <div class="tech-logo">⚙️</div>
        <div class="tech-info">
          <h4>Electron</h4>
          <span class="tech-version">v31.2+</span>
          <p>跨平台桌面应用框架</p>
        </div>
      </div>
      <div class="tech-item">
        <div class="tech-logo">🔗</div>
        <div class="tech-info">
          <h4>IPC通信</h4>
          <span class="tech-version">Built-in</span>
          <p>安全的进程间通信</p>
        </div>
      </div>
      <div class="tech-item">
        <div class="tech-logo">🔒</div>
        <div class="tech-info">
          <h4>Context Isolation</h4>
          <span class="tech-version">Security</span>
          <p>上下文隔离安全机制</p>
        </div>
      </div>
      <div class="tech-item">
        <div class="tech-logo">📦</div>
        <div class="tech-info">
          <h4>electron-builder</h4>
          <span class="tech-version">v24.0+</span>
          <p>应用打包和分发</p>
        </div>
      </div>
    </div>
  </div>

  <div class="stack-category tools">
    <div class="category-header">
      <h3>🛠️ 开发工具</h3>
      <span class="category-badge">工具链</span>
    </div>
    <div class="tech-grid">
      <div class="tech-item">
        <div class="tech-logo">🔧</div>
        <div class="tech-info">
          <h4>ESLint</h4>
          <span class="tech-version">v8.0+</span>
          <p>代码质量检查</p>
        </div>
      </div>
      <div class="tech-item">
        <div class="tech-logo">🎨</div>
        <div class="tech-info">
          <h4>Prettier</h4>
          <span class="tech-version">v3.0+</span>
          <p>代码格式化工具</p>
        </div>
      </div>
    </div>
  </div>
</div>

## 🚀 环境搭建

### 1. 克隆项目

```bash
git clone https://github.com/wsrh8888/beaver-desktop.git
cd beaver-desktop
```

### 2. 安装Node.js

```bash
# 使用nvm安装Node.js 18+
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# 验证安装
node --version  # 应该显示 v18.x.x
npm --version
```

### 3. 安装项目依赖

```bash
# 安装依赖
npm install

# 或者使用yarn
yarn install
```

### 4. 开发工具推荐

#### VS Code (推荐)

推荐插件：
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier
- Electron DevTools

#### WebStorm (可选)

专业的前端IDE，内置对Vue和TypeScript的支持。

## ⚙️ 项目配置

### 1. package.json 配置

```json
{
  "name": "beaver-desktop",
  "version": "1.0.0",
  "description": "海狸IM桌面端",
  "main": "dist/main/index.js",
  "scripts": {
    "dev": "concurrently \"npm run dev:renderer\" \"npm run dev:main\"",
    "dev:renderer": "vite --config build/vite.config.renderer.ts",
    "dev:main": "vite --config build/vite.config.main.ts",
    "build": "npm run build:renderer && npm run build:main",
    "build:renderer": "vite build --config build/vite.config.renderer.ts",
    "build:main": "vite build --config build/vite.config.main.ts",
    "electron": "electron .",
    "dist": "npm run build && electron-builder",
    "dist:win": "npm run build && electron-builder --win",
    "dist:mac": "npm run build && electron-builder --mac",
    "dist:linux": "npm run build && electron-builder --linux"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@vitejs/plugin-vue": "^4.0.0",
    "concurrently": "^8.0.0",
    "electron": "^31.2.0",
    "electron-builder": "^24.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.3.0",
    "vue": "^3.4.0"
  },
  "dependencies": {
    "element-plus": "^2.9.0",
    "pinia": "^2.1.0",
    "vue-router": "^4.2.0"
  }
}
```

### 2. Vite配置

```typescript
// build/vite.config.renderer.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src/render'),
      '@shared': resolve(__dirname, '../src/shared')
    }
  },
  build: {
    outDir: 'dist/renderer',
    emptyOutDir: true
  }
})
```

```typescript
// build/vite.config.main.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../src/main/index.ts'),
      name: 'main',
      fileName: 'index'
    },
    outDir: 'dist/main',
    emptyOutDir: true,
    rollupOptions: {
      external: ['electron']
    }
  }
})
```

## 📋 开发流程

### 1. 主进程开发

#### 应用入口

```typescript
// src/main/index.ts
import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'
import { createTray } from './tray'
import { setupMenu } from './menu'
import { setupIPC } from './ipc'

class Application {
  private mainWindow: BrowserWindow | null = null

  async init() {
    // 等待应用就绪
    await app.whenReady()

    // 创建主窗口
    this.mainWindow = createWindow()

    // 设置系统托盘
    createTray(this.mainWindow)

    // 设置菜单
    setupMenu()

    // 设置IPC通信
    setupIPC()

    // 监听应用事件
    this.setupAppEvents()
  }

  private setupAppEvents() {
    // 所有窗口关闭时
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    // 应用激活时
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        this.mainWindow = createWindow()
      }
    })
  }
}

// 启动应用
new Application().init().catch(console.error)
```

#### 窗口管理

```typescript
// src/main/window.ts
import { BrowserWindow, screen } from 'electron'
import { join } from 'path'

export function createWindow(): BrowserWindow {
  // 获取屏幕尺寸
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: Math.min(1200, width - 100),
    height: Math.min(800, height - 100),
    minWidth: 800,
    minHeight: 600,
    center: true,
    show: false, // 先不显示，等加载完成再显示
    autoHideMenuBar: true,
    icon: join(__dirname, '../../resource/app.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: join(__dirname, '../preload/index.js')
    }
  })

  // 加载页面
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // 窗口准备好时显示
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // 窗口事件处理
  mainWindow.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault()
      mainWindow.hide()
    }
  })

  return mainWindow
}
```

#### 系统托盘

```typescript
// src/main/tray.ts
import { Tray, Menu, BrowserWindow } from 'electron'
import { join } from 'path'

export function createTray(mainWindow: BrowserWindow): Tray {
  const tray = new Tray(join(__dirname, '../../resource/tray.ico'))

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示主窗口',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: '设置',
      click: () => {
        // 打开设置窗口
      }
    },
    { type: 'separator' },
    {
      label: '退出',
      click: () => {
        app.isQuiting = true
        app.quit()
      }
    }
  ])

  tray.setToolTip('海狸IM')
  tray.setContextMenu(contextMenu)

  // 双击托盘图标显示窗口
  tray.on('double-click', () => {
    mainWindow.show()
  })

  return tray
}
```

#### IPC通信

```typescript
// src/main/ipc.ts
import { ipcMain, dialog, app } from 'electron'

export function setupIPC() {
  // 获取应用版本
  ipcMain.handle('get-app-version', () => {
    return app.getVersion()
  })

  // 显示消息框
  ipcMain.handle('show-message-box', async (_, options) => {
    const result = await dialog.showMessageBox(options)
    return result
  })

  // 选择文件
  ipcMain.handle('show-open-dialog', async (_, options) => {
    const result = await dialog.showOpenDialog(options)
    return result
  })

  // 窗口控制
  ipcMain.handle('window-minimize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    window?.minimize()
  })

  ipcMain.handle('window-maximize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window?.isMaximized()) {
      window.unmaximize()
    } else {
      window?.maximize()
    }
  })

  ipcMain.handle('window-close', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    window?.close()
  })
}
```

### 2. 预加载脚本

```typescript
// src/render/preload.ts
import { contextBridge, ipcRenderer } from 'electron'

// 暴露安全的API到渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 应用信息
  getVersion: () => ipcRenderer.invoke('get-app-version'),

  // 对话框
  showMessageBox: (options: any) => ipcRenderer.invoke('show-message-box', options),
  showOpenDialog: (options: any) => ipcRenderer.invoke('show-open-dialog', options),

  // 窗口控制
  windowMinimize: () => ipcRenderer.invoke('window-minimize'),
  windowMaximize: () => ipcRenderer.invoke('window-maximize'),
  windowClose: () => ipcRenderer.invoke('window-close'),

  // 监听事件
  onUpdateAvailable: (callback: Function) => {
    ipcRenderer.on('update-available', callback)
  },

  // 移除监听
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel)
  }
})

// 类型声明
declare global {
  interface Window {
    electronAPI: {
      getVersion: () => Promise<string>
      showMessageBox: (options: any) => Promise<any>
      showOpenDialog: (options: any) => Promise<any>
      windowMinimize: () => Promise<void>
      windowMaximize: () => Promise<void>
      windowClose: () => Promise<void>
      onUpdateAvailable: (callback: Function) => void
      removeAllListeners: (channel: string) => void
    }
  }
}
```

### 3. 渲染进程开发

#### 主应用入口

```typescript
// src/render/app/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 状态管理
app.use(createPinia())

// 路由
app.use(router)

// UI组件库
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
```

#### 路由配置

```typescript
// src/render/app/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../pinia/user'

const routes = [
  {
    path: '/',
    redirect: '/chat'
  },
  {
    path: '/chat',
    component: () => import('../page/Chat/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/contacts',
    component: () => import('../page/Contacts/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    component: () => import('../page/Profile/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('../page/Login/index.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  
  if (to.meta.requiresAuth && !userStore.isLogin) {
    next('/login')
  } else {
    next()
  }
})
```

#### WebSocket管理

```typescript
// src/render/app/ws-manager/index.ts
export class WsManager {
  private ws: WebSocket | null = null
  private heartbeatTimer: number | null = null
  private reconnectTimer: number | null = null
  private isConnected = false
  private reconnectCount = 0
  private maxReconnectCount = 5
  private messageHandlers = new Map<string, Function>()

  connect(url: string, token: string) {
    if (this.ws) {
      this.close()
    }

    this.ws = new WebSocket(`${url}?token=${token}`)
    this.setupEventHandlers()
  }

  private setupEventHandlers() {
    if (!this.ws) return

    this.ws.onopen = () => {
      console.log('WebSocket连接成功')
      this.isConnected = true
      this.reconnectCount = 0
      this.startHeartbeat()
    }

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        this.handleMessage(data)
      } catch (error) {
        console.error('消息解析失败:', error)
      }
    }

    this.ws.onclose = () => {
      console.log('WebSocket连接关闭')
      this.isConnected = false
      this.stopHeartbeat()
      this.reconnect()
    }

    this.ws.onerror = (error) => {
      console.error('WebSocket错误:', error)
      this.isConnected = false
    }
  }

  send(data: any) {
    if (this.isConnected && this.ws) {
      this.ws.send(JSON.stringify(data))
    }
  }

  onMessage(type: string, handler: Function) {
    this.messageHandlers.set(type, handler)
  }

  private handleMessage(data: any) {
    const { type } = data
    const handler = this.messageHandlers.get(type)
    
    if (handler) {
      handler(data)
    }
  }

  private startHeartbeat() {
    this.heartbeatTimer = window.setInterval(() => {
      this.send({ type: 'ping' })
    }, 30000)
  }

  private stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  private reconnect() {
    if (this.reconnectCount >= this.maxReconnectCount) {
      console.log('达到最大重连次数')
      return
    }

    this.reconnectTimer = window.setTimeout(() => {
      console.log(`第${this.reconnectCount + 1}次重连...`)
      this.reconnectCount++
      // 重新连接逻辑
    }, 3000 * Math.pow(2, this.reconnectCount))
  }

  close() {
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
    
    this.stopHeartbeat()
    
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
    
    this.isConnected = false
  }
}

export default new WsManager()
```

#### 状态管理

```typescript
// src/render/app/pinia/user/user.ts
import { defineStore } from 'pinia'
import { userApi } from '../../api/user'

interface UserInfo {
  id: number
  username: string
  nickname: string
  avatar: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as UserInfo | null,
    token: '',
    isLogin: false
  }),

  getters: {
    avatar: (state) => state.userInfo?.avatar || '/images/default-avatar.png',
    nickname: (state) => state.userInfo?.nickname || '用户'
  },

  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        const response = await userApi.login(credentials)
        this.userInfo = response.data.userInfo
        this.token = response.data.token
        this.isLogin = true
        
        // 保存到本地存储
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        localStorage.setItem('token', this.token)
        
        return response
      } catch (error) {
        throw error
      }
    },

    logout() {
      this.userInfo = null
      this.token = ''
      this.isLogin = false
      
      // 清除本地存储
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
    },

    loadUserFromStorage() {
      const userInfo = localStorage.getItem('userInfo')
      const token = localStorage.getItem('token')
      
      if (userInfo && token) {
        this.userInfo = JSON.parse(userInfo)
        this.token = token
        this.isLogin = true
      }
    }
  }
})
```

### 4. 页面组件开发

```vue
<!-- src/render/app/page/Chat/index.vue -->
<template>
  <div class="chat-container">
    <!-- 标题栏 -->
    <div class="title-bar">
      <div class="title">海狸IM</div>
      <div class="window-controls">
        <el-button @click="minimizeWindow" size="small" text>
          <el-icon><Minus /></el-icon>
        </el-button>
        <el-button @click="maximizeWindow" size="small" text>
          <el-icon><FullScreen /></el-icon>
        </el-button>
        <el-button @click="closeWindow" size="small" text>
          <el-icon><Close /></el-icon>
        </el-button>
      </div>
    </div>

    <!-- 主体内容 -->
    <div class="main-content">
      <!-- 侧边栏 -->
      <div class="sidebar">
        <div class="user-info">
          <el-avatar :src="userStore.avatar" :size="50" />
          <div class="user-name">{{ userStore.nickname }}</div>
        </div>
        
        <!-- 会话列表 -->
        <div class="conversation-list">
          <div 
            v-for="conversation in conversationList" 
            :key="conversation.id"
            class="conversation-item"
            :class="{ active: currentConversation?.id === conversation.id }"
            @click="selectConversation(conversation)"
          >
            <el-avatar :src="conversation.avatar" :size="40" />
            <div class="conversation-info">
              <div class="name">{{ conversation.name }}</div>
              <div class="last-message">{{ conversation.lastMessage }}</div>
            </div>
            <div v-if="conversation.unreadCount > 0" class="unread-count">
              {{ conversation.unreadCount }}
            </div>
          </div>
        </div>
      </div>

      <!-- 聊天区域 -->
      <div class="chat-area">
        <div v-if="currentConversation" class="chat-content">
          <!-- 聊天头部 -->
          <div class="chat-header">
            <div class="chat-title">{{ currentConversation.name }}</div>
          </div>

          <!-- 消息列表 -->
          <div class="message-list" ref="messageListRef">
            <div 
              v-for="message in messageList" 
              :key="message.id"
              class="message-item"
              :class="{ 'own-message': message.senderId === userStore.userInfo?.id }"
            >
              <el-avatar :src="message.senderAvatar" :size="36" />
              <div class="message-content">
                <div class="message-text">{{ message.content }}</div>
                <div class="message-time">{{ formatTime(message.timestamp) }}</div>
              </div>
            </div>
          </div>

          <!-- 输入区域 -->
          <div class="message-input-area">
            <el-input
              v-model="inputMessage"
              type="textarea"
              :rows="3"
              placeholder="输入消息..."
              @keydown.enter.exact="sendMessage"
              @keydown.enter.shift.exact.prevent="inputMessage += '\n'"
            />
            <div class="input-actions">
              <el-button @click="selectFile" text>
                <el-icon><Paperclip /></el-icon>
              </el-button>
              <el-button type="primary" @click="sendMessage" :disabled="!inputMessage.trim()">
                发送
              </el-button>
            </div>
          </div>
        </div>
        
        <div v-else class="no-conversation">
          <div class="no-conversation-text">选择一个会话开始聊天</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useUserStore, useChatStore } from '../../pinia'
import WsManager from '../../ws-manager'
import { ElMessage } from 'element-plus'

const userStore = useUserStore()
const chatStore = useChatStore()

const inputMessage = ref('')
const messageListRef = ref<HTMLElement>()

const conversationList = computed(() => chatStore.conversationList)
const currentConversation = computed(() => chatStore.currentConversation)
const messageList = computed(() => chatStore.messageList)

// 窗口控制
const minimizeWindow = () => {
  window.electronAPI.windowMinimize()
}

const maximizeWindow = () => {
  window.electronAPI.windowMaximize()
}

const closeWindow = () => {
  window.electronAPI.windowClose()
}

// 选择会话
const selectConversation = (conversation: any) => {
  chatStore.setCurrentConversation(conversation)
  chatStore.loadMessages(conversation.id)
}

// 发送消息
const sendMessage = () => {
  if (!inputMessage.value.trim() || !currentConversation.value) return

  const message = {
    id: Date.now(),
    content: inputMessage.value,
    senderId: userStore.userInfo?.id,
    senderAvatar: userStore.avatar,
    timestamp: Date.now(),
    conversationId: currentConversation.value.id
  }

  chatStore.addMessage(message)
  
  // 发送WebSocket消息
  WsManager.send({
    type: 'message',
    data: message
  })

  inputMessage.value = ''
  scrollToBottom()
}

// 选择文件
const selectFile = async () => {
  try {
    const result = await window.electronAPI.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    })

    if (!result.canceled && result.filePaths.length > 0) {
      const filePath = result.filePaths[0]
      // 处理文件上传
      uploadFile(filePath)
    }
  } catch (error) {
    console.error('选择文件失败:', error)
  }
}

// 上传文件
const uploadFile = (filePath: string) => {
  // 文件上传逻辑
  console.log('上传文件:', filePath)
}

// 格式化时间
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
}

// 滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (messageListRef.value) {
      messageListRef.value.scrollTop = messageListRef.value.scrollHeight
    }
  })
}

onMounted(() => {
  // 加载用户信息
  userStore.loadUserFromStorage()
  
  // 连接WebSocket
  if (userStore.token) {
    WsManager.connect('ws://localhost:21040/ws', userStore.token)
  }
  
  // 监听WebSocket消息
  WsManager.onMessage('message', (data: any) => {
    chatStore.addMessage(data.data)
    scrollToBottom()
  })
  
  // 加载会话列表
  chatStore.loadConversations()
})
</script>

<style lang="scss" scoped>
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}

.title-bar {
  height: 40px;
  background: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  color: white;
  -webkit-app-region: drag;
}

.window-controls {
  display: flex;
  gap: 5px;
  -webkit-app-region: no-drag;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.user-info {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
}

.user-name {
  margin-top: 10px;
  font-weight: 500;
}

.conversation-list {
  flex: 1;
  overflow-y: auto;
}

.conversation-item {
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &.active {
    background: #e3f2fd;
  }
}

.conversation-info {
  flex: 1;
  margin-left: 12px;
  overflow: hidden;
}

.conversation-info .name {
  font-weight: 500;
  margin-bottom: 4px;
}

.conversation-info .last-message {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.unread-count {
  background: #ff4757;
  color: white;
  border-radius: 10px;
  padding: 2px 8px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-header {
  height: 60px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.chat-title {
  font-size: 16px;
  font-weight: 500;
}

.message-list {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8f9fa;
}

.message-item {
  display: flex;
  margin-bottom: 20px;
  
  &.own-message {
    flex-direction: row-reverse;
  }
}

.message-content {
  max-width: 60%;
  margin: 0 12px;
}

.message-text {
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.own-message .message-text {
  background: #FF7D45;
  color: white;
}

.message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  text-align: center;
}

.message-input-area {
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 20px;
}

.input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.no-conversation {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.no-conversation-text {
  color: #999;
  font-size: 16px;
}
</style>
```

## 🔧 构建和打包

### 1. 开发环境启动

```bash
# 启动开发环境
npm run dev

# 分别启动渲染进程和主进程
npm run dev:renderer
npm run dev:main
```

### 2. 构建生产版本

```bash
# 构建所有进程
npm run build

# 构建渲染进程
npm run build:renderer

# 构建主进程
npm run build:main
```

### 3. 打包应用

```bash
# 打包所有平台
npm run dist

# 打包Windows
npm run dist:win

# 打包macOS
npm run dist:mac

# 打包Linux
npm run dist:linux
```

### 4. electron-builder配置

```yaml
# build/electron-builder.yml
appId: com.beaver.im
productName: 海狸IM
copyright: Copyright © 2024 海狸IM

directories:
  output: release

files:
  - dist/**/*
  - package.json

mac:
  category: public.app-category.social-networking
  target:
    - target: dmg
      arch: [x64, arm64]

win:
  target:
    - target: nsis
      arch: [x64]

linux:
  target:
    - target: AppImage
      arch: [x64]

nsis:
  oneClick: false
  perMachine: true
  allowToChangeInstallationDirectory: true
  createDesktopShortcut: always
```

## 🐛 调试技巧

### 1. 主进程调试

```bash
# 使用VS Code调试主进程
# .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": ["."],
      "outputCapture": "std"
    }
  ]
}
```

### 2. 渲染进程调试

```typescript
// 在渲染进程中使用开发者工具
if (process.env.NODE_ENV === 'development') {
  // 自动打开开发者工具
  mainWindow.webContents.openDevTools()
}
```

### 3. 日志调试

```typescript
// 使用electron-log
import log from 'electron-log'

log.info('应用启动')
log.error('发生错误', error)
```

## 📚 相关资源

- [Electron官方文档](https://www.electronjs.org/docs)
- [Vue.js官方文档](https://vuejs.org/)
- [Element Plus文档](https://element-plus.org/)
- [electron-builder文档](https://www.electron.build/)

如果在开发过程中遇到问题，欢迎在GitHub Issues中提问或加入QQ群(1013328597)交流！ 

<style>
/* 桌面端开发指南样式 */
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

/* 桌面端主题英雄区 */
.desktop-hero {
  background: linear-gradient(135deg, #2D3436 0%, #636E72 100%);
}

.platform-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.platform-icon {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.platform-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* 桌面端架构图 */
.desktop-architecture {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.arch-process {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.arch-process:hover {
  box-shadow: 0 8px 24px rgba(45, 52, 54, 0.12);
  transform: translateY(-2px);
}

.arch-process.main-process {
  border-left: 4px solid var(--secondary-blue);
}

.arch-process.renderer-process {
  border-left: 4px solid var(--primary-color);
}

.process-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.process-header h3 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.process-badge {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.process-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-content h4 {
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.feature-content p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* IPC通信桥 */
.arch-bridge {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--bg-secondary) 100%);
  border: 2px dashed var(--primary-color);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
}

.bridge-content h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.bridge-features {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.bridge-item {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Monaco', 'Menlo', monospace;
}

.bridge-content p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

/* 项目结构全景 */
.project-overview {
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.overview-tree {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
}

.overview-tree h3 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.file-tree {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
}

.tree-root, .branch-item {
  margin: 0.75rem 0;
  line-height: 1.8;
}

.tree-branch {
  margin-left: 1.5rem;
  border-left: 2px solid var(--border-color);
  padding-left: 1.5rem;
  margin-top: 0.75rem;
}

.tree-subbranch {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  border-left: 1px dashed var(--border-color);
}

.subbranch-item {
  margin: 0.4rem 0;
  line-height: 1.6;
}

.tree-icon, .file-icon, .folder-icon {
  margin-right: 0.5rem;
}

.tree-label, .file-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 0.75rem;
}

.tree-desc, .file-desc {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-style: italic;
}

.branch-item.main {
  color: var(--secondary-blue);
}

.branch-item.render {
  color: var(--primary-color);
}

.branch-item.shared {
  color: var(--success-color);
}

.branch-item.build {
  color: var(--warning-color);
}

/* 架构特点高亮 */
.overview-highlights {
  display: flex;
  flex-direction: column;
}

.highlight-section h3 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.highlight-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.highlight-item {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.highlight-item:hover {
  box-shadow: 0 4px 16px rgba(255, 125, 69, 0.1);
  border-color: var(--primary-light);
  transform: translateY(-2px);
}

.highlight-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.highlight-item h4 {
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.highlight-item p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

/* 技术栈展示 */
.tech-stack-section {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stack-category {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.stack-category:hover {
  box-shadow: 0 6px 20px rgba(255, 125, 69, 0.08);
}

.stack-category.frontend {
  border-left: 4px solid var(--primary-color);
}

.stack-category.backend {
  border-left: 4px solid var(--secondary-blue);
}

.stack-category.tools {
  border-left: 4px solid var(--success-color);
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.category-header h3 {
  color: var(--text-primary);
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.category-badge {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.tech-item:hover {
  background: var(--primary-light);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.tech-logo {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.tech-info h4 {
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-version {
  background: var(--primary-color);
  color: white;
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
}

.tech-info p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .project-overview {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .desktop-architecture {
    gap: 1rem;
  }
  
  .process-features,
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .platform-icons {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .bridge-features {
    flex-direction: column;
    align-items: center;
  }
  
  .highlight-grid {
    gap: 1rem;
  }
}
</style> 