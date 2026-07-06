# Electron 客户端

面向 **Electron 桌面应用**（参考 [beaver-desktop](https://github.com/wsrh8888/beaver-desktop) 登录窗）。

## 整体结构

```
渲染进程 <beaver-login>  →  本机 HTTP 127.0.0.1:38794
                              GET /auth/quick_sign
         authCode  →  业务登录接口
```

## 接入步骤

1. 渲染进程嵌入 `<beaver-login>`，监听 `@login` 获取 `authCode`（一般不设 `redirect-url`）
2. main 进程启动本地 HTTP，监听 `127.0.0.1:38794`，提供 `GET /auth/quick_sign?appid={AppID}`
3. 已登录本机海狸客户端时，SDK 展示快捷登录；否则走扫码 / 密码
4. 用 `authCode` 完成应用内登录（如调用 `oauth_code_login`）

本地服务实现参考：`beaver-desktop/src/main/server/handlers/auth/quick-sign.ts`。

组件用法见 [JS-SDK](/open/client/js-sdk)。
