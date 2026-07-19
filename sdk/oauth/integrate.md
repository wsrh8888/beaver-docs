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
