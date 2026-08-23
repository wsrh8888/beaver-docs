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

# 接口约定

开放接口由 **beaver-server** 的 `open_api` 提供。

## 接口地址

#### host：`{host}`（替换为你的 API 网关地址）

路径均以 `/api/open/` 开头，例如：

```
{host}/api/open/oauth_secret/v1/token
{host}/api/open/bot_public/v1/send?token=xxx
```

## 返回格式

| 字段 | 说明 |
|------|------|
| code | `0` 表示成功 |
| msg | 失败时的错误说明 |
| result | 成功时的业务数据 |

接口文档中的「返回值」均指 `result` 字段。
