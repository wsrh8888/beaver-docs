# JS-SDK

`@beaver-im/js-sdk` 提供 Web Component **`<beaver-login>`**（扫码、密码、本机快捷登录）。

**通过 npm 安装使用，不提供源码。** 主要用于 **Electron 桌面应用**内嵌登录；[beaver-oauth](/sdk/oauth/) 授权页内部也使用本组件。

## 安装

```bash
npm install @beaver-im/js-sdk
```

## 快速开始

```html
<beaver-login
  app-id="your_app_id"
  api-base="https://server.wsrh8888.com"
  oauth-base="https://oauth.wsrh8888.com"
></beaver-login>

<script type="module">
  import BeaverSDK from '@beaver-im/js-sdk'

  BeaverSDK.register()

  document.querySelector('beaver-login').addEventListener('login', (e) => {
    const { authCode } = e.detail.result
    // Electron：用 authCode 调业务登录接口
  })
</script>
```

Web 场景若需要回跳，可传 `redirect-url`；登录成功会跳转并在 Query 带上 `code`。

## 组件属性

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| app-id | string | 是 | 开放平台应用 AppID |
| api-base | string | 否 | 开放 API 网关，默认 `https://server.wsrh8888.com` |
| oauth-base | string | 否 | 扫码页域名（拼 `/scan?sceneId=`），默认 `https://oauth.wsrh8888.com` |
| redirect-url | string | 否 | 登录成功后的回跳地址（Web 常用；Electron 一般不设） |

私有化部署时把 `api-base`、`oauth-base` 改成你的地址。

## 登录事件

```javascript
element.addEventListener('login', (e) => {
  // e.detail: { code: 0, msg: '', result: { authCode: '...' } }
})
```

## 登录能力

| 方式 | 说明 |
|------|------|
| 扫码登录 | 展示二维码，手机海狸 App 扫码确认 |
| 密码登录 | 手机号 / 邮箱 + 密码 |
| 本机快捷登录 | 本机已登录海狸 PC 时，请求 `127.0.0.1:38794` 一键授权 |

## Electron 接入要点

```
渲染进程 <beaver-login>
    │ authCode（@login）
    ▼
业务登录接口（如 oauth_code_login）

本机快捷登录依赖：
main 进程 HTTP → 127.0.0.1:38794
GET /auth/quick_sign?appid={AppID}
```

1. 渲染进程嵌入组件，监听 `@login` 拿 `authCode`（一般不设 `redirect-url`）
2. main 进程提供本地 `quick_sign`（参考 beaver-desktop）
3. 未登录本机客户端时，走扫码 / 密码

## Vue 示例

```vue
<template>
  <beaver-login
    :app-id="appId"
    :api-base="apiBase"
    :oauth-base="oauthBase"
    @login="onLogin"
  />
</template>

<script setup>
import BeaverSDK from '@beaver-im/js-sdk'
import { onMounted } from 'vue'

onMounted(() => {
  BeaverSDK.register()
})

function onLogin(e) {
  const authCode = e.detail?.result?.authCode
}
</script>
```

