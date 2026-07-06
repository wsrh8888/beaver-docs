# 打包部署

beaver-open 构建产物为静态文件，可部署到 Nginx、OSS 或任意静态托管。

## 构建命令

```bash
# 测试环境构建
npm run build_test

# 生产环境构建
npm run build_prod
```

构建完成后，产物输出到 **`dist/`** 目录。
