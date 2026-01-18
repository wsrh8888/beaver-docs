# 环境配置

## 环境要求

- **Node.js**: 18.0.0+

## 安装依赖

```bash
npm install
```

## 环境变量配置

项目支持多环境配置，需要创建对应的环境变量文件：

### 开发环境配置 (.env.development)

```env
VITE_APP_ENV=development
VITE_API_BASE=http://localhost:8080
VITE_API_API=http://localhost:8080
```

### 测试环境配置 (.env.test)

```env
VITE_APP_ENV=test
VITE_API_BASE=https://test-api.beaver-im.com
VITE_API_API=https://test-api.beaver-im.com
```

### 生产环境配置 (.env.production)

```env
VITE_APP_ENV=production
VITE_API_BASE=https://api.beaver-im.com
VITE_API_API=https://api.beaver-im.com
```