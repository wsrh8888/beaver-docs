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

# CentOS 7 安装 Docker Compose

## 安装步骤

### 1. 本地下载 Docker Compose

由于国内网络环境限制，建议在本地下载 Docker Compose 二进制文件，然后上传到服务器。

#### 1.1 在本地下载 Docker Compose

访问以下链接下载最新版本的 Docker Compose：
- Linux x86_64: https://github.com/docker/compose/releases/download/v2.37.2/docker-compose-linux-x86_64
- 其他架构请访问: https://github.com/docker/compose/releases

#### 1.2 上传到服务器

将下载的 `docker-compose-linux-x86_64` 文件上传到服务器的 `/tmp/` 目录下，并重命名为 `docker-compose`。

### 2. 在服务器上安装

#### 2.1 移动文件到系统目录

```bash
# 登录到服务器后执行
sudo mv /tmp/docker-compose /usr/local/bin/docker-compose
```

#### 2.2 赋予执行权限

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. 验证安装

安装完成后，可以运行以下命令来验证 Docker Compose 是否成功安装：

```bash
docker-compose --version
```
