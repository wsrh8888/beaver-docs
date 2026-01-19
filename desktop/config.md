# 环境配置

## 环境要求

- **Node.js**: 18.0.0+
- **npm**: 8.0.0+

## 安装依赖

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