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

# Web 授权页概述

面向**第三方网站 / H5** 的开源授权页（[beaver-oauth](https://github.com/wsrh8888/beaver-oauth)）。用户从你的站点跳转到本页完成扫码或密码登录，再带着 `code` 回跳。

页面内嵌 [JS-SDK](/sdk/js-sdk) 的 `<beaver-login>` 组件，部署本仓库即可，无需再单独装 SDK。

## 适用场景

| 场景 | 是否用本页 |
|------|------------|
| 第三方网站 / H5 跳转登录 | 是 |
| Electron 应用内嵌登录 | 否，直接用 [JS-SDK](/sdk/js-sdk) |

## 文档导航

| 文档 | 说明 |
|------|------|
| [环境配置](/sdk/oauth/config) | Node 要求、安装依赖、环境变量 |
| [本地开发](/sdk/oauth/setup) | 启动开发服务 |
| [打包部署](/sdk/oauth/deploy) | 生产构建与静态托管 |
| [接入说明](/sdk/oauth/integrate) | 跳转参数、路由、回调与换 Token |

登录成功拿到 `code` 后，由服务端换 Token → [身份验证](/open/api/oauth/authorize)。
