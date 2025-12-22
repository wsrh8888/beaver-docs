# 环境搭建

## 系统要求

- **Node.js**: >= 22.0.0
- **操作系统**: Windows 10+ / macOS 10.15+ / Ubuntu 18.04+

## 开发工具

- **VS Code**: 推荐安装Vue和TypeScript插件
- **Git**: 用于代码管理

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/wsrh8888/beaver-desktop.git
cd beaver-desktop
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发

```bash
npm run dev
```

启动后会自动打开应用窗口，支持热重载开发。

## 常见问题

### 依赖安装失败

```bash
# 清除缓存重新安装
npm cache clean --force
npm install
```

### 启动失败

确保Node.js版本 >= 22.0.0，检查端口3000是否被占用。

## 相关链接

- [Node.js下载](https://nodejs.org/)
- [VS Code下载](https://code.visualstudio.com/)