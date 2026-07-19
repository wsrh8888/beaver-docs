# 环境配置

## 环境要求

- Node.js >= 18.0.0

## 安装依赖

```bash
git clone https://github.com/wsrh8888/beaver-oauth.git
cd beaver-oauth
npm install
```

## 环境变量

按运行模式编辑对应文件：

| 文件 | 用途 |
|------|------|
| `.env.dev` | 本地开发（`npm run dev`） |
| `.env.test` | 测试构建 |
| `.env.prod` | 生产构建 |

必填项：

| 变量 | 说明 |
|------|------|
| `VITE_API_BASE` | 开放 API 网关地址（缺失会直接报错） |

示例（本地对接本机网关）：

```bash
VITE_API_BASE='http://127.0.0.1:20800'
```
