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

# Redis管理工具 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

### Another Redis Desktop Manager（推荐）
1. 访问：https://github.com/qishibo/AnotherRedisDesktopManager/releases
2. 下载最新版本
3. 运行安装包完成安装

### 其他选择
- **RedisInsight**: Redis官方工具
- **Medis**: macOS专用
- **Redis Commander**: 网页版工具

## <img src="/image/guide/check.svg" alt="验证安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证安装

1. 启动 Another Redis Desktop Manager
2. 点击"新建连接"
3. 填写连接信息：
   - 主机：localhost
   - 端口：6379
   - 密码：（留空，Docker默认无密码）
4. 点击"测试连接"

## <img src="/image/guide/settings.svg" alt="基本使用" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">基本使用

1. **查看数据库**：左侧显示所有数据库
2. **查看键值**：点击数据库查看所有key
3. **编辑数据**：双击key编辑value
4. **执行命令**：使用控制台执行Redis命令

 