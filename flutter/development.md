# 本地开发指南

本指南将引导您如何在本地环境配置并运行 **beaver-flutter** 移动端项目。由于本项目使用 **FVM (Flutter Version Management)** 管理版本，请确保遵循以下步骤进行开发。

---

## <img src="/image/guide/settings.svg" alt="环境准备" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第零步：环境就绪

在开始之前，请确保您已按照以下文档完成基础环境搭建：

1. [安装 Android Studio (及 SDK/模拟器)](../guide/requirements/common/android-studio.md)
2. [安装 FVM 及 Flutter SDK](../guide/requirements/mobile/flutter.md)
3. [安装 Visual Studio Code](../guide/requirements/common/vscode.md)

---

## <img src="/image/guide/settings.svg" alt="安装插件" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第一步：安装 VS Code 插件

在开始开发前，请确保您的 VS Code 已安装 Flutter 插件以获得完整的语法支持和调试能力。

### 1. 从 Open VSX 下载
由于网络环境限制，建议手动下载安装：
1. 访问：[Open VSX Search - Flutter](https://open-vsx.org/?search=flutter&sortBy=relevance&sortOrder=desc)
2. 在搜索结果中找到由 **Dart Code** 发布的 **Flutter** 插件。
3. 点击右侧的 **Download** 按钮下载。

![Open VSX 搜索截图](/image/guide/flutter/vscode-open-vsx.png)

### 2. 手动安装
1. 下载完成后，如果是压缩包请先**解压**。
2. 将解压后的内容直接**拖拽**到 VS Code 窗口中即可完成安装。

![安装插件截图](/image/guide/flutter/vscode-install-plugin.png)

### 3. 验证
安装完成后，您可以在 VS Code 扩展面板中看到已启用的 Flutter 插件。

---

## <img src="/image/guide/download.svg" alt="项目初始化" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第二步：项目初始化

1. **进入项目目录**：
   打开终端并进入 `beaver-flutter` 根目录。

2. **安装项目指定的 Flutter 版本**：
   项目根目录下已包含 `.fvmrc` 文件，执行以下命令即可自动安装：
   ```bash
   fvm install
   ```

3. **项目配置与修复** (可选)：
   如果您是首次检出代码，或者为了确保平台相关配置与当前 SDK 版本一致，可以运行：
   ```bash
   fvm flutter create .
   ```

4. **获取依赖包**：
   ```bash
   fvm flutter pub get
   ```

---

## <img src="/image/guide/settings.svg" alt="代码生成" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第三步：代码生成 (Build Runner)

本项目使用 `Drift` 进行数据库持久化，部分代码需要自动生成。在修改数据库模型或路由后，请运行：

```bash
fvm flutter pub run build_runner build --delete-conflicting-outputs
```

> [!TIP]
> 如果您在开发过程中需要实时监听文件更新并生成代码，可以使用 `watch` 命令：
> `fvm flutter pub run build_runner watch --delete-conflicting-outputs`

---

## <img src="/image/guide/check.svg" alt="运行项目" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第四步：运行项目

### 1. 启动模拟器
确保您已启动 Android 模拟器或连接了物理设备。

### 2. 通过命令行运行
```bash
fvm flutter run -d emulator-5554
```


---

## <img src="/image/guide/download.svg" alt="打包构建" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">第五步：打包构建

如果您需要构建发布版本，请参考以下命令：

*   **Android APK**: 
    ```bash
    fvm flutter build apk --release
    ```
