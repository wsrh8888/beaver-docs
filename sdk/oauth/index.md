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
