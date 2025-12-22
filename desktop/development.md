# 开发指南

## 项目结构

```
src/
├── main/          # 主进程 (窗口、数据库、WebSocket)
├── render/        # 渲染进程 (Vue应用界面)
├── preload/       # 预加载脚本 (进程间通信)
└── common/        # 公共模块 (类型定义、工具)
```

## 开发规范

### 文件命名

- 文件名使用驼峰命名法
- 文件夹名称如果已包含模块名，子文件不重复命名

### 代码风格

- 使用TypeScript进行类型检查
- Vue组件使用组合式API
- 样式使用Less预处理器

## 核心功能

### 数据库操作

项目使用SQLite存储本地数据，通过Drizzle ORM进行操作。

### 实时通信

使用WebSocket实现实时消息收发，支持自动重连。

### 状态管理

使用Pinia进行Vue应用的状态管理。

## 构建打包

### 开发构建

```bash
npm run build-renderer  # 构建Vue应用
npm run package        # 完整打包
```

### 生产构建

```bash
npm run package-install  # 生成安装包
```

## 调试技巧

- 主进程：使用VS Code调试器
- 渲染进程：使用Chrome DevTools
- 数据库：使用SQLite Browser查看

## 注意事项

- 不要过度开发，保持代码简洁
- 使用项目配置的TypeScript别名
- 遵循现有的代码规范和架构模式