# Flutter (FVM) 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第一阶段：安装 FVM

### 1. 从 GitHub 下载
访问：https://github.com/leoafarias/fvm/releases 下载 Windows 版本的 ZIP 包。

![GitHub 下载截图](/image/guide/flutter/fvm-github.png)

### 2. 解压并存放
将下载的 ZIP 包解压到你打算存放的目录（如 `D:\fvm`）。

![存放目录截图](/image/guide/flutter/fvm-dir.png)

### 3. 配置环境变量
将上述存放 `fvm.exe` 的文件夹路径添加到系统变量的 `Path` 中。

![环境变量配置截图](/image/guide/flutter/fvm-path.png)

### 4. 验证 FVM 安装
打开新的终端执行：
```bash
fvm --version
```

---

## <img src="/image/guide/settings.svg" alt="配置与使用" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第二阶段：通过 FVM 安装 Flutter

安装并管理多个 Flutter 版本。

1. **安装 Flutter SDK**（例如安装稳定版）：
   ```bash
   fvm install stable
   ```

2. **设置项目使用的版本**（在你的 Flutter 项目根目录执行）：
   ```bash
   fvm use stable
   ```

3. **检查 Flutter 环境**：
   ```bash
   fvm flutter doctor
   ```
