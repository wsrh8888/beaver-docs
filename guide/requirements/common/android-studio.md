# Android Studio 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

### 1. 从归档页面下载
访问官方归档页面：https://developer.android.google.cn/studio/archive

> [!TIP]
> **网页语言说明**：在访问归档页面时，如果看不到历史版本列表，请确保将网页页面右下角或底部的语言切换为 **English**。

![归档页面截图](/image/guide/common/android-studio-archive.png)

### 2. 安装步骤
1. 下载适合您操作系统（Windows/macOS/Linux）的版本。
2. 运行安装程序，按照向导完成安装。

![安装过程截图1](/image/guide/common/android-studio-install-1.png)
![安装过程截图2](/image/guide/common/android-studio-install-2.png)

3. 安装完成后启动 Android Studio。

![安装完成截图](/image/guide/common/android-studio-installed.png)

## <img src="/image/guide/check.svg" alt="SDK 配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">SDK 配置

即使您不使用 Android Studio 进行代码开发，仅用于**项目打包**，也需要配置好 SDK 环境：

1. 启动 Android Studio，进入 **Settings > Languages & Frameworks > Android SDK**。
2. 在 **SDK Platforms** 选项卡中，安装所需的 API 版本（推荐 API 34）。

![SDK Platforms 配置截图](/image/guide/common/android-studio-sdk-platforms.png)

3. 在 **SDK Tools** 选项卡中，确保安装以下关键组件：
   - Android SDK Build-Tools (打包核心组件)
   - Android SDK Platform-Tools (用于调试与连接设备)
   - Android Emulator (用于在电脑上运行模拟器)

![SDK Tools 配置截图](/image/guide/common/android-studio-sdk-tools.png) -->

## <img src="/image/guide/check.svg" alt="创建模拟器" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">创建模拟器 (Virtual Device)

配置好 SDK 后，您需要创建一个模拟器来运行项目：

1. 在 Android Studio 主页或设置中找到 **Device Manager** (设备管理器)。
![设备管理器入口截图](/image/guide/common/android-studio-emu-1.png)

2. 点击 **Create Device** (或 **+** 号) 开始创建。
![创建设备按钮截图](/image/guide/common/android-studio-emu-2.png)

3. **选择硬件**：推荐选择带 Google Play 图标的设备（如 Pixel 7）。
![选择硬件截图](/image/guide/common/android-studio-emu-3.png)

4. **选择系统镜像**：选择一个 API 版本（推荐与 SDK Platforms 一致，如 API 34），如果未下载则需先点击下载。
![选择系统镜像截图](/image/guide/common/android-studio-emu-4.png)

5. **完成创建**：点击 Finish。
![创建完成后的设备列表截图](/image/guide/common/android-studio-emu-5.png)

## 验证环境

在项目目录下运行：
```bash
fvm flutter doctor
```
确保 **Android toolchain** 状态正常。如果看到 `Android license status unknown`，请根据提示运行 `fvm flutter doctor --android-licenses` 并一路按 `y` 同意即可。
