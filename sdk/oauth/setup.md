# 本地开发

## 启动命令

```bash
# 本地开发（加载 .env.dev，默认 http://localhost:8045）
npm run dev
```

浏览器访问 `http://localhost:8045`，授权入口一般为 `/auth`。

也可按模式预览：

```bash
npm run serve_test   # 加载 .env.test
npm run serve_prod   # 加载 .env.prod
```
