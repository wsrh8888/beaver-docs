# 打包部署

beaver-oauth 构建产物为静态文件，可部署到 Nginx、OSS 或任意静态托管。

## 构建命令

```bash
# 测试环境构建
npm run build_test

# 生产环境构建
npm run build_prod
```

构建完成后，产物输出到 **`dist/`** 目录。

部署后请确认：

1. 站点可通过公网 HTTPS 访问（扫码、第三方回调通常需要）
2. beaver-open 应用详情中的 OAuth **回调地址** 与业务侧 `redirectUri` 一致
