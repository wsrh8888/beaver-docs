<!--
  Copyright (c) 2024-2026 Beaver IM Team
  SPDX-License-Identifier: MIT
  Project: beaver-docs
  https://github.com/wsrh8888/beaver-docs

  中文：
  本文件为海狸 IM（Beaver IM）开源项目源代码。
  版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
  禁止删除、篡改或替换本文件头部版权与许可声明。
  使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html

  English:
  This file is part of the Beaver IM open-source project.
  Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
  Do not remove, alter, or replace this copyright and license header.
  Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html

  beaver-docs-header-v1
-->

# Node.js 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

### Windows 安装
1. 访问：https://nodejs.org/
2. 下载 LTS 版本（推荐）
3. 双击 `.msi` 文件安装
4. 安装完成后重启命令提示符

### macOS 安装
```bash
# 使用 Homebrew
brew install node
```

### Linux 安装
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm
```

## <img src="/image/guide/check.svg" alt="验证安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证安装

打开终端，输入：
```bash
node --version
npm --version
```
应该分别显示：`v20.x.x` 和 `9.x.x`

## <img src="/image/guide/settings.svg" alt="配置镜像" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置镜像

```bash
npm config set registry https://registry.npmmirror.com
```

 