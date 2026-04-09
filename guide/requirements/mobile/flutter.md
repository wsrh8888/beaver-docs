# Flutter 安装（FVM）

海狸 IM Flutter 客户端建议使用 [FVM](https://fvm.app/)（Flutter Version Management）管理 Flutter SDK 版本，与团队及 CI 保持一致。本文只说明 **FVM 与 Flutter SDK** 的安装与选用。

需要 **Android SDK、模拟器、环境变量与命令行工具** 时，请单独阅读 [Android Studio 安装教程](/guide/requirements/common/android-studio)，不要与本文混在同一套步骤里重复配置。

## 安装 FVM

所有版本与发行说明见：**[FVM Releases（GitHub）](https://github.com/leoafarias/fvm/releases)**。

### macOS / Linux（从 Releases 下载预编译包）

1. 打开 [FVM Releases](https://github.com/leoafarias/fvm/releases)，选择需要的版本（通常选 **Latest**）。
2. 在 **Assets** 中下载与本机架构匹配的压缩包，例如：
   - Apple Silicon：`fvm-<版本>-macos-arm64.tar.gz`
   - Intel Mac：`fvm-<版本>-macos-x64.tar.gz`
   - Linux x64：`fvm-<版本>-linux-x64.tar.gz`（或按需选择 `arm64` 等变体）
3. 解压后，将解压目录中的 `fvm` 可执行文件所在路径加入 `PATH`（或移动到已在 PATH 中的目录）。
4. 终端执行 `fvm --version`，确认能正常输出版本号。

也可使用包管理器安装（以官方 Release 说明为准），例如 macOS/Linux 上的 Homebrew：`brew tap leoafarias/fvm` 与 `brew install fvm`。

### Windows

当前 FVM 在 GitHub Releases 上主要为 **Linux / macOS** 预编译包；在 **Windows** 上推荐任选其一：

- **Chocolatey**（需已安装 [Chocolatey](https://chocolatey.org/)）：`choco install fvm`
- **Dart pub**（需已安装 [Dart SDK](https://dart.dev/get-dart)）：`dart pub global activate fvm`，然后把 Pub 全局可执行目录加入 PATH（常见为 `%LOCALAPPDATA%\Pub\Cache\bin`）

安装完成后在 PowerShell 或 CMD 中执行 `fvm --version` 验证。

## 安装并选用 Flutter

本项目 `pubspec.yaml` 中要求 Dart SDK 满足工程约束（例如 `sdk: ^3.11.1`），请选择与之匹配的 Flutter 版本（可在 [Flutter SDK archive](https://docs.flutter.dev/release/archive) 中对照各版本的 Dart 版本）：

1. 安装 SDK（示例为稳定通道）：`fvm install stable`
2. 在 **beaver-flutter** 仓库根目录执行：`fvm use stable`（会生成/更新 `.fvm` 配置，请将 `.fvm/` 纳入版本控制约定以统一团队版本）
3. 使用 FVM 前缀运行 Flutter 命令，例如：`fvm flutter pub get`、`fvm flutter run`

将 `fvm flutter` 对应 SDK 的 `bin` 配置进常用 IDE 后，分析器与运行配置会指向同一套 Flutter。

## 与 Android 文档的配合顺序

1. 若需要 Android 构建与调试环境：先按 [Android Studio 安装教程](/guide/requirements/common/android-studio) 完成安装与验证（该页末尾的 `flutter doctor` 检查；若你只用 FVM，请使用 `fvm flutter doctor`）。
2. 再按本文完成 FVM 与 Flutter 版本绑定。

## 参考链接

- [FVM Releases](https://github.com/leoafarias/fvm/releases)
- [FVM 文档](https://fvm.app/docs)
