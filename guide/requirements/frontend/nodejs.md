# Node.js 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

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

## <img src="/image/guide/check.svg" alt="验证安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证安装

打开终端，输入：
```bash
node --version
npm --version
```
应该分别显示：`v20.x.x` 和 `9.x.x`

## <img src="/image/guide/settings.svg" alt="配置镜像" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置镜像

```bash
npm config set registry https://registry.npmmirror.com
```

 