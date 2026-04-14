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

## <img src="/image/guide/check.svg" alt="首次启动配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">首次启动引导 (Setup Wizard)

第一次启动时，Android Studio 会引导您完成基础配置：

### 1. 导入设置
如果是第一次安装，选择 **Do not import settings** 然后点击 OK。

### 1. Welcome 界面
点击 **Next** 进入配置。
![Welcome 界面截图](/image/guide/common/android-studio-wizard-1.png)

### 2. 选择安装类型 (Install Type)
*   **Standard (推荐)**：自动配置环境。
*   **Custom (自定义)**：可修改 SDK 安装路径（如果 C 盘空间紧张，请选此项）。
![Install Type 选择截图](/image/guide/common/android-studio-wizard-2.png)

### 3. 确认设置 (Verify Settings)
确认即将下载的组件列表，点击 **Next**。
![Verify Settings 截图](/image/guide/common/android-studio-wizard-verify.png)

### 4. 许可协议 (License Agreement)
这是正式下载前的确认环节：
1.  点击左侧的协议类别（如 `android-sdk-license`）。
2.  在右侧选中 **Accept**。
3.  点击 **Next** (或 Finish) 即可开始。
![License Agreement 截图](/image/guide/common/android-studio-wizard-license.png)

### 5. 下载组件
系统将自动开始下载所选组件。下载过程中请保持网络连接，进度条走完后，点击右下角的 **Finish** 即可进入 Android Studio 欢迎主界面。
![下载组件截图](/image/guide/common/android-studio-wizard-3.png)

> [!NOTE]
> 下载过程中请保持网络连接。下载完成后点击 **Finish** 进入欢迎主界面。

## <img src="/image/guide/check.svg" alt="SDK 配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">SDK 配置

即使您不使用 Android Studio 进行代码开发，仅用于**项目打包**，也需要配置好 SDK 环境：

1. 启动 Android Studio，进入 **Settings > Languages & Frameworks > Android SDK**。
2. 在 **SDK Platforms** 选项卡中，安装所需的 API 版本（推荐 API 34）。

![SDK Platforms 配置截图](/image/guide/common/android-studio-sdk-platforms.png)

3. 在 **SDK Tools** 选项卡中，确保安装以下关键组件：
   - Android SDK Build-Tools (打包核心组件)
   - Android SDK Platform-Tools (用于调试与连接设备)
   - Android Emulator (用于在电脑上运行模拟器)
   - Android SDK Command-line Tools (latest) (**必选**，用于同意授权协议)

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

## <img src="/image/guide/check.svg" alt="启动模拟器" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">启动模拟器

创建完成后，您可以随时启动它：

1. 在 **Device Manager** 中找到刚才创建的设备。
2. 点击右侧的 **Run** (三角形按钮) 即可启动。
![启动模拟器截图](/image/guide/common/android-studio-emu-run.png)

> [!NOTE]
> 第一次启动模拟器可能较慢，请耐心等待直到看到 Android 系统桌面。
