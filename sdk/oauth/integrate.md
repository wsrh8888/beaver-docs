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

# 接入说明

## 跳转授权

将用户引导到：

```
https://你的oauth域名/auth?appId={AppID}&redirectUri={回调地址}
```

| 参数 | 说明 |
|------|------|
| appId | 开放平台应用 ID |
| redirectUri | 登录成功后跳回的第三方地址 |

登录成功回跳：

```
{redirectUri}?code={授权码}
```

## 页面路由

| 路径 | 说明 |
|------|------|
| `/auth` | 授权登录页（内嵌 `<beaver-login>`） |
| `/scan` | 扫码说明页（手机扫电脑二维码后打开） |

## 门户配置

在 beaver-open 应用详情中配置 OAuth **回调地址**，需与 `redirectUri` 一致。

## 换 Token

拿到 `code` 后，服务端调用开放接口换取 Token → [身份验证](/open/api/oauth/authorize)。

若要做 Electron 内嵌登录（不跳转独立授权站），见 [JS-SDK](/sdk/js-sdk)。
