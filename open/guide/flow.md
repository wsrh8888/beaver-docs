# 接入流程

## 先选场景

| 场景 | 做什么 | 文档入口 |
|------|--------|----------|
| **第三方登录** | 用户用海狸账号登录你的系统 | [身份验证](/open/api/oauth/authorize) |
| **群通知（Jenkins 等）** | CI 构建结果推到 IM 群 | [群机器人](/open/api/bot) |
| **部署开放平台** | 私有化部署门户、创建应用 | [开发者门户](/open/portal/config) |

## 通用步骤

1. 部署海狸 IM 服务端与 [开发者门户](/open/portal/config)（beaver-open）
2. 登录门户，申请开发者、创建应用 → [获取 AppID](/open/guide/credential)
3. 按场景配置 OAuth / 机器人 / 事件订阅
4. 第三方系统调用开放接口（见 [接口约定](/open/guide/convention)）

## 第三方登录流程

```
用户打开你的应用
    → 完成授权登录，获得 code
    → 你的服务端用 code 换 accessToken
    → 拉取用户信息，建立登录态
```

详见 [身份验证](/open/api/oauth/authorize)。

## 群通知流程（Jenkins）

```
在门户为群创建 Incoming Webhook
    → 拿到 Webhook URL（含 token）
    → Jenkins / GitLab 构建完成后 POST 该 URL
    → 消息出现在对应群聊
```

详见 [群机器人](/open/api/bot)。
