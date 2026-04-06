# 本地开发

本指南引导你如何在本地启动和运行 **beaver-flutter** 项目。

## 项目初始化

### 1. 克隆源码

```bash
git clone https://github.com/wsrh8888/beaver-flutter.git
cd beaver-flutter
```

### 2. 安装依赖 (Pub Get)

在 VS Code 侧栏的 `pubspec.yaml` 中点击 **Get Packages**。
或者执行：

```bash
flutter pub get
```

## 代码生成

本项目使用数据库和模型生成工具，启动前必须执行：

```bash
flutter pub run build_runner build --delete-conflicting-outputs
```

> ![执行代码生成](./dev_codegen.jpg)

## 运行项目

### 1. 选择运行环境
本项目支持全平台，但推荐使用 **Android Emulator (或真机)** 或 **Windows桌面版**。
- 按 `Ctrl + Shift + P` 选择 `Flutter: Select Device`。
> ![选择平台](./dev_platform.jpg)

### 2. 启动调试
按下 **F5** 键或者在 VS Code 左下角状态栏点击 **Run** 启动。

### 3. 多端演示
海狸 IM 支持与 [桌面端](../desktop/development.md) 扫码同步。

## 常用命令

| 命令 | 说明 |
|------|------|
| `flutter doctor` | 检查环境 |
| `flutter run` | 运行项目 |
| `flutter pub get` | 安装依赖表 |
| `flutter clean` | 清除缓存 |

## 调试建议

- **热重载 (Hot Reload)**: `Ctrl + S` 实现毫秒级界面更新。
- **日志查看**: 所有 WS 跳动和业务日志均在 VS Code **Debug Console** 打印。
- **开发者菜单**: 在终端输入 `R` (热重启) 或 `d` (断点调试)。

## 相关文档

- [Flutter 开发者中心](https://docs.flutter.cn/)
- [Drift 数据库文档](https://drift.simonbinder.eu/)
- [BLoC 状态管理文档](https://bloclibrary.dev/)
