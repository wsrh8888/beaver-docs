# 打包部署

## 构建命令

### 生产环境构建

```bash
npm run build_prod
```

### 测试环境构建

```bash
npm run build_test
```

## 构建产物

构建完成后会在 `dist` 目录生成以下文件：

- `index.html` - 主页面文件
- `assets/` - 静态资源目录
  - `css/` - 样式文件
  - `js/` - JavaScript 文件
  - `images/` - 图片资源
- `favicon.ico` - 网站图标
