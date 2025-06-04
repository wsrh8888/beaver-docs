# 自动部署配置说明

## 概述
本项目已配置GitHub Actions自动部署，当您推送代码到main或master分支时，会自动构建VitePress文档并部署到GitHub Pages。

## 配置步骤

### 1. 启用GitHub Pages
1. 前往您的GitHub仓库设置页面
2. 找到"Pages"部分
3. 在"Source"下拉菜单中选择"GitHub Actions"
4. 保存设置

### 2. 确保分支名称正确
工作流配置会在以下分支上触发：
- `main`
- `master`

如果您的默认分支名称不同，请修改`.github/workflows/deploy.yml`文件中的分支名称。

### 3. 推送代码
配置完成后，只需要推送代码到对应分支：

```bash
git add .
git commit -m "更新文档"
git push origin main
```

### 4. 查看部署状态
- 在GitHub仓库的"Actions"标签页可以查看部署进度
- 部署完成后，您的文档将在`https://[用户名].github.io/[仓库名]`访问

## 工作流说明

### 触发条件
- 推送到main或master分支
- 手动触发（workflow_dispatch）

### 构建过程
1. 检出代码
2. 设置Node.js环境
3. 安装依赖
4. 构建VitePress文档
5. 部署到GitHub Pages

### 自定义域名（可选）
如果您有自定义域名，可以：
1. 在`public`目录下创建`CNAME`文件
2. 文件内容为您的域名，如：`docs.example.com`
3. 在域名DNS设置中添加CNAME记录指向`[用户名].github.io`

## 故障排除

### 常见问题
1. **部署失败**: 检查Actions日志查看具体错误信息
2. **页面404**: 确认GitHub Pages设置正确，并等待几分钟让更改生效
3. **构建错误**: 确保本地可以正常运行`npm run build`

### 检查清单
- [ ] GitHub Pages设置为"GitHub Actions"
- [ ] 分支名称正确
- [ ] package.json中有正确的构建脚本
- [ ] 本地构建正常

需要帮助？请查看GitHub Actions运行日志或提交Issue。 