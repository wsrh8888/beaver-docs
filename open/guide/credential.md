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

# 获取 AppID

## 创建应用

1. 登录 [beaver-open](https://github.com/wsrh8888/beaver-open) 开放平台门户
2. 完成开发者申请（若开启审核）
3. 创建应用，在应用详情查看 **AppID**、**AppSecret**

**AppSecret 只放在服务端**，不要写入前端或 Jenkins 脚本明文仓库。

## 按场景配置

| 场景 | 门户内配置 |
|------|------------|
| 第三方登录 | OAuth 回调地址、安全域名 |
| 群机器人 | 启用机器人能力 → 创建 Incoming Webhook，绑定目标群 |
| 事件订阅 | 应用事件 Webhook（文档待补充） |
