# Android Studio 安装教程

Android Studio 提供了完善的 Android SDK 工具链、模拟器以及 Flutter 开发所需的环境支持。

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

### 获取安装包

1. **推荐（国内访问）**：打开 [获取 Android Studio（中文站）](https://developer.android.google.cn/studio)，下载当前稳定版安装包并运行安装向导。
2. **需要指定历史版本**：打开 [Android Studio 下载文件归档](https://developer.android.google.cn/studio/archive)，在列表中选择所需版本，下载对应平台的安装包。归档页会说明模拟器等内容请另见「模拟器下载内容归档」等说明。
3. **国际站**：也可使用 [developer.android.com/studio](https://developer.android.com/studio) 获取最新稳定版。

### 安装步骤

1.  启动安装包，按向导完成安装；若需 Android 模拟器，请勾选 **Android Virtual Device**。
2.  安装完成后，打开 **Settings > Plugins**，搜索并安装 **Flutter** 和 **Dart** 插件。

## <img src="/image/guide/check.svg" alt="SDK 配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">SDK 配置

### 配置 Android SDK
在 **Settings > Languages & Frameworks > Android SDK**：
1. 请下载最新的 **Android API**（推荐 API 34+）。
2. 在 **SDK Tools** 选项卡中，确保勾选并安装了：
   - **Android SDK Build-Tools**
   - **Android SDK Command-line Tools (latest)**
   - **Android Emulator**

## <img src="/image/guide/settings.svg" alt="环境变量" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">环境变量

为了在命令行中使用命令，你需要配置 `ANDROID_HOME` 和 `platform-tools`。

### Windows 设置
添加以下变量到环境变量：
- `ANDROID_HOME`: `%USERPROFILE%\AppData\Local\Android\Sdk`
- Path 中追加: `%ANDROID_HOME%\platform-tools` 和 `%ANDROID_HOME%\cmdline-tools\latest\bin`

## <img src="/image/guide/check.svg" alt="验证环境" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证环境

打开终端，输入：
```bash
flutter doctor
```
若使用 [FVM](/guide/requirements/mobile/flutter) 管理 Flutter，请改为：
```bash
fvm flutter doctor
```
确保 **Android toolchain** 显示打钩状态。
