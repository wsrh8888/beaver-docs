# Node.js 安装教程

## 📥 下载安装

### Windows 安装
1. 访问：https://nodejs.org/
2. 下载 LTS 版本（推荐）
3. 双击 `.msi` 文件安装
4. 安装完成后重启命令提示符

### macOS 安装
```bash
# 使用 Homebrew
brew install node
```

### Linux 安装
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm
```

## ✅ 验证安装

打开终端，输入：
```bash
node --version
npm --version
```
应该分别显示：`v20.x.x` 和 `9.x.x`

## ⚙️ 配置镜像

```bash
npm config set registry https://registry.npmmirror.com
```

 