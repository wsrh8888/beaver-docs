# JS-SDK

`@beaver-im/js-sdk` 提供 Web Component **`<beaver-login>`**（扫码、密码、本机快捷登录）。

源码：[beaver-sdk/packages/beaver-js-sdk](https://github.com/wsrh8888/beaver-sdk/tree/main/packages/beaver-js-sdk)

## 安装

```bash
cd beaver-sdk/packages/beaver-js-sdk
npm install && npm run build
```

## 注册与使用

```javascript
import BeaverSDK from '@beaver-im/js-sdk'
BeaverSDK.register()
```

```html
<beaver-login env="prod" app-id="your_app_id" redirect-url="https://yoursite.com/callback" />
```

| 属性 | 必填 | 说明 |
|------|------|------|
| app-id | 是 | 应用 AppID |
| env | 否 | `dev` / `test` / `prod` |
| redirect-url | 否 | Web 场景登录后跳转 |
| state | 否 | 回跳 Query 参数 |

```javascript
element.addEventListener('login', (e) => {
  const { authCode } = e.detail.result
})
```

## 环境地址

| env | API 网关 | OAuth 页 |
|-----|----------|----------|
| dev | `http://192.168.3.4:20800` | `http://192.168.3.4:8045` |
| test | `https://server-test.wsrh8888.com` | `https://oauth-test.wsrh8888.com` |
| prod | `https://server.wsrh8888.com` | `https://oauth.wsrh8888.com` |

私有化部署请修改 `src/config/index.ts` 中 `ENV_PRESETS` 后重新构建。
