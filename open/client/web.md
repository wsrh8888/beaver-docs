# Web 授权页

面向**第三方网站 / H5**：部署 [beaver-oauth](https://github.com/wsrh8888/beaver-oauth)，或在自己页面嵌入 JS-SDK。

用户登录成功后拿到授权码 `code`，服务端换 Token → [身份验证](/open/api/oauth/authorize)。

## 部署 beaver-oauth

```bash
git clone https://github.com/wsrh8888/beaver-oauth.git
cd beaver-oauth && npm install
npm run dev          # 本地默认 8045
npm run build_prod
```

## 跳转授权

```
https://你的oauth域名/auth?appId={AppID}&redirectUri={回调}&state={可选}
```

登录成功回跳：`{redirectUri}?code={授权码}&state={state}`

| 路由 | 说明 |
|------|------|
| `/auth` | 授权页，内嵌 `<beaver-login>` |
| `/scan` | 手机扫电脑二维码后的说明页 |

## 自行嵌入 SDK

不部署 beaver-oauth 时，可在自己的 H5 引入 `@beaver-im/js-sdk`，见 [JS-SDK](/open/client/js-sdk)。需在门户应用详情配置 **JS-SDK 安全域名**。
