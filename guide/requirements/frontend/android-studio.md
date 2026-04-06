# Android Studio 安装教程

Android Studio 提供了完善的 Android SDK 工具链、模拟器以及 Flutter 开发所需的环境支持。

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

1.  访问：[developer.android.com/studio](https://developer.android.com/studio)
2.  下载并启动安装包
3.  在安装向导中，确保选择 **Android Virtual Device**（如果你需要模拟器）
4.  安装完成后，打开 **Settings > Plugins**，搜索并安装 **Flutter** 和 **Dart** 插件。

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
确保 **Android toolchain** 显示打钩状态。
