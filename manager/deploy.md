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

后台管理系统是纯前端 SPA，构建产物为静态文件，可部署到 Nginx、OSS 或任意静态托管。

## 构建命令

```bash
# 生产环境构建（加载 .env.prod）
npm run build_prod

# 测试环境构建（加载 .env.test）
npm run build_test

```

构建完成后，产物输出到 **`dist/`** 目录。
