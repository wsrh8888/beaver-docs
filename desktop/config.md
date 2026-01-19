# 环境配置

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

## 配置文件

项目使用 `config.ini` 文件进行配置，包含环境变量和TOOLS配置。

### 配置文件位置

配置文件应放置在以下位置之一：
- 项目根目录下的 `config.ini`
- 安装目录下的 `config.ini`

### 配置示例

```ini
# 环境配置 (可选值: dev, test, prod)
env=prod

# TOOLS配置 (可选值: true, false)
tools=false
```

### 配置说明

- **env**: 运行环境配置
  - `dev`: 开发环境
  - `test`: 测试环境
  - `prod`: 生产环境

- **tools**: 开发者工具配置
  - `true`: 启用开发者工具
  - `false`: 禁用开发者工具

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