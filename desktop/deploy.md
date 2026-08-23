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

# 打包部署

## 构建命令

### 第一阶段：生成产物包

```bash
npm run package
```

此命令会执行以下操作：
1. 构建渲染进程代码 (`build-renderer`)
2. 构建主进程代码 (`build-electron`)
3. 生成可执行的桌面应用程序包

### 第二阶段：制作安装包

```bash
npm run package-install
```

此命令会将产物包制作成exe格式的安装程序。

## 构建产物

### 产物包目录结构

执行 `npm run package` 后会在 `release` 目录生成以下文件：

- `win-unpacked/` - 未打包的应用程序目录
  - `beaver.exe` - 主程序文件
  - `resources/` - 资源文件目录
  - 其他依赖文件

### 安装包

执行 `npm run package-install` 后会在 `output` 目录生成：
- `beaver_x.x.x.exe` - Windows安装程序

## 部署说明

1. 首先执行 `npm run package` 生成产物包
2. 然后执行 `npm run package-install` 生成安装包
3. 安装包可分发给最终用户进行安装