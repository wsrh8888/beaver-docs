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

# 环境配置

## 环境要求

- Node.js >= 18.0.0

## 安装依赖

```bash
git clone https://github.com/wsrh8888/beaver-oauth.git
cd beaver-oauth
npm install
```

## 环境变量

按运行模式编辑对应文件：

| 文件 | 用途 |
|------|------|
| `.env.dev` | 本地开发（`npm run dev`） |
| `.env.test` | 测试构建 |
| `.env.prod` | 生产构建 |

必填项：

| 变量 | 说明 |
|------|------|
| `VITE_API_BASE` | 开放 API 网关地址（缺失会直接报错） |

示例（本地对接本机网关）：

```bash
VITE_API_BASE='http://127.0.0.1:20800'
```
