# 环境配置

## 环境要求

- **Node.js** >= 18.0.0

## 安装依赖

```bash
npm install
```

## 环境变量

项目通过 Vite `--mode` 加载根目录下的 `.env.{mode}` 文件，仓库已提供：

| 文件 | 用途 |
|------|------|
| `.env.dev` | 本地开发 |
| `.env.test` | 测试环境 |
| `.env.prod` | 生产环境 |

主要变量：

```env
VITE_API_ENV=dev
VITE_API_BASE='http://127.0.0.1:40800'
VITE_API_API='http://127.0.0.1:20800'
```

| 变量 | 说明 |
|------|------|
| `VITE_API_ENV` | 环境标识（dev / test / prod） |
| `VITE_API_BASE` | 管理端 API 网关基础地址 |
| `VITE_API_API` | 业务 API 基础地址 |

本地开发时，请将上述地址改为与你部署的 **beaver-server** 一致（默认开发环境网关常见为 `40800` / `20800`，以实际为准）。

## 注意事项

- 修改 `.env.*` 后需重启开发服务器
- 生产、测试环境的示例地址见仓库内 `.env.prod`、`.env.test`，部署时请替换为自己的域名
