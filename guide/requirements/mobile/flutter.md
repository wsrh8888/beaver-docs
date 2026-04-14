# Flutter (FVM) 安装教程

## <img src="/image/guide/settings.svg" alt="准备工作" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第零阶段：准备编辑器

在配置 Flutter 环境之前，请确保您已经安装并配置好 **Visual Studio Code**：

- [点击查看 Visual Studio Code 安装教程](../common/vscode.md)

---

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第一阶段：安装 FVM

### 1. 从 GitHub 下载
访问：https://github.com/leoafarias/fvm/releases 下载 Windows 版本的 ZIP 包。

![GitHub 下载截图](/image/guide/flutter/fvm-github.png)

### 2. 解压并存放
将下载的 ZIP 包解压到你打算存放的目录（如 `D:\fvm`）。

![存放目录截图](/image/guide/flutter/fvm-dir.png)

![环境变量配置截图](/image/guide/flutter/fvm-path.png)

### 4. 国内加速配置 (强烈推荐)
为了确保 SDK 和依赖下载顺畅，建议添加以下环境变量：
- **PUB_HOSTED_URL**: `https://pub.flutter-io.cn`
- **FLUTTER_STORAGE_BASE_URL**: `https://storage.flutter-io.cn`

### 5. 验证 FVM 安装
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

3. **同意安卓授权协议**（首次安装必做）：
   ```bash
   fvm flutter doctor --android-licenses
   ```
   > [!IMPORTANT]
   > 运行后请一路输入 `y` 直到结束。如果报错找不到 `sdkmanager`，请检查 Android Studio 中是否安装了 `Command-line Tools`。

4. **全面环境检查**：
   ```bash
   fvm flutter doctor
   ```
   确保 **Android toolchain** 和 **Android Studio** 部分都显示为绿色对勾。

---