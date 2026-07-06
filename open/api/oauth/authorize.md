# 授权登录第三方应用

使用海狸账号授权登录你的系统，在你的系统内获得当前用户的海狸身份，用户无需在你的系统中单独注册账号密码。

**注意：** 此能力用于第三方应用接入海狸身份。需先在开放平台门户创建应用。只能获取用户身份信息（昵称、头像等），不含企业组织信息。

## 获取 AppID 及 AppSecret

1. 登录开放平台门户，创建应用
2. 在应用凭证页查看 **AppID**、**AppSecret**

请妥善保管 AppSecret，仅放在服务端，不要写入前端公开代码。

---

## 获取授权码 code

换取 Token 前，需先让用户完成授权，拿到一次性 **授权码 `code`**。可通过 **扫码登录** 或 **账号密码登录** 获得。

**注意：** `code` 只能使用一次，请尽快换取 Token。

### 扫码登录

#### 生成二维码

##### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/oauth_public/v1/qrcode` |
| 请求方式 | POST |
| 参数 | 见【参数】 |
| 返回值 | 见【返回值】 |

##### 参数

| 参数 | 参数类型 | 必须 | 说明 |
|------|----------|------|------|
| appId | String | 是 | 第三方应用 ID |

##### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "sceneId": "扫码场景 ID",
    "expireIn": 120
  }
}
```

将 `sceneId` 编码进二维码，由海狸 App 扫码确认。

#### 轮询扫码状态

##### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/oauth_public/v1/qrcode_status` |
| 请求方式 | GET |
| 参数 | 见【参数】 |
| 返回值 | 见【返回值】 |

##### 参数

| 参数 | 参数类型 | 必须 | 说明 |
|------|----------|------|------|
| sceneId | String | 是 | 扫码场景 ID（Query） |

##### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "status": "waiting",
    "code": ""
  }
}
```

| status | 说明 |
|--------|------|
| waiting | 等待扫码 |
| scanned | 已扫码，待确认 |
| confirmed | 已确认，此时 `code` 有值 |
| cancelled | 用户取消 |
| expired | 已过期 |

`status` 为 `confirmed` 时，用返回的 `code` 换取 Token。

### 账号密码登录

##### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/oauth_public/v1/password_login` |
| 请求方式 | POST |
| 参数 | 见【参数】 |
| 返回值 | 见【返回值】 |

##### 参数

| 参数 | 参数类型 | 必须 | 说明 |
|------|----------|------|------|
| appId | String | 是 | 第三方应用 ID |
| account | String | 是 | 手机号或邮箱 |
| password | String | 是 | 登录密码 |

##### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "code": "授权码",
    "expireIn": 300
  }
}
```

---

## 获取用户的 access_token

#### host：`{host}`（替换为你的网关地址，路径以 `/api/open/` 开头）

### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/oauth_secret/v1/token` |
| 请求方式 | POST |
| 参数 | 见【参数】 |
| 返回值 | 见【返回值】 |

### 参数

| 参数 | 参数类型 | 必须 | 说明 |
|------|----------|------|------|
| appId | String | 是 | 应用 ID |
| appSecret | String | 是 | 应用密钥 |
| code | String | 是 | 上一步获得的授权码 |
| redirectUri | String | 否 | 回调地址，需与授权配置一致时使用 |
| codeVerifier | String | 否 | PKCE code_verifier |

也可在请求头传递：`App-Id`、`App-Secret`。

### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "accessToken": "******",
    "refreshToken": "******",
    "expiresIn": 7200,
    "tokenType": "Bearer",
    "scope": "user.profile.read"
  }
}
```

| 字段 | 说明 |
|------|------|
| accessToken | 访问令牌 |
| refreshToken | 刷新令牌 |
| expiresIn | accessToken 有效期（秒） |

**注意：** accessToken 过期后请用 refreshToken 刷新；refreshToken 失效后需重新授权。

---

## 刷新用户的 refresh_token

#### host：`{host}`

### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/auth_public/v1/refresh` |
| 请求方式 | POST |
| 参数 | 见【参数】 |
| 返回值 | 见【返回值】 |

### 参数

| 参数 | 参数类型 | 必须 | 说明 |
|------|----------|------|------|
| refreshToken | String | 是 | 换取 Token 时返回的 refreshToken |

### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "accessToken": "新的 accessToken",
    "refreshToken": "新的 refreshToken",
    "expiresIn": 7200
  }
}
```

---

## 获取授权用户的个人信息

#### host：`{host}`

### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/user/v1/get_info` |
| 请求方式 | GET |
| 参数 | 见【参数】 |
| 返回值 | 见【返回值】 |

### 参数

| 参数 | 参数类型 | 必须 | 说明 |
|------|----------|------|------|
| userId | String | 是 | 要查询的 IM 用户 ID（Query） |
| Authorization | String | 是 | Header：`Bearer {accessToken}` |

### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "user": {
      "userId": "IM 用户 ID",
      "nickname": "用户昵称",
      "avatar": "头像 URL",
      "phone": "",
      "email": "邮箱"
    }
  }
}
```
