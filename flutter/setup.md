# 环境配置

本项目展示了如何通过 VS Code 官方插件快速搭建 Flutter 开发环境。

## 系统要求

- **操作系统**: Windows 10+ / macOS 11+ / Linux
- **磁盘空间**: 至少 5GB (仅 SDK)
- **内存**: 推荐 16GB+

## 开发工具

- **Visual Studio Code**: 推荐安装 Flutter 和 Dart 官方插件
- **Git**: 用于代码管理和 SDK 下载
- **Android Studio**: 用于管理 Android SDK 和 模拟器

## 快速开始 (VS Code 自动化安装)

这是目前 Flutter 官方最推荐的安装方式，简单且稳健。

### 1. 安装 Flutter 插件
在 VS Code 扩展市场搜索并安装 `Flutter` 插件。
> ![安装插件](./setup_插件.jpg)

### 2. 下载 SDK
1. 按下 `Ctrl + Shift + P` (macOS 使用 `Cmd + Shift + P`)。
2. 输入 **`Flutter: New Project`**。
3. 点击弹出提示中的 **"Download SDK"**。
> ![下载SDK](./setup_下载.jpg)

### 3. 选择安装路径
选择一个非系统盘（如 D 盘）且不含空格的目录存放 SDK。

## 环境检查

安装完成后，在终端运行以下命令验证：

```bash
flutter doctor
```

### 常见操作
- **接受协议**: `flutter doctor --android-licenses`
- **配置 SDK**: 在 VS Code 设置中确保 `flutterSdkPath` 指向安装目录。

## 相关链接

- [Flutter 官网](https://docs.flutter.cn/)
- [VS Code 下载](https://code.visualstudio.com/)
- [Android Studio 下载](https://developer.android.com/studio)
