# 接口约定

开放接口由 **beaver-server** 的 `open_api` 提供。

## 接口地址

#### host：`{host}`（替换为你的 API 网关地址）

路径均以 `/api/open/` 开头，例如：

```
{host}/api/open/oauth_secret/v1/token
{host}/api/open/bot_public/v1/send?token=xxx
```

## 返回格式

| 字段 | 说明 |
|------|------|
| code | `0` 表示成功 |
| msg | 失败时的错误说明 |
| result | 成功时的业务数据 |

接口文档中的「返回值」均指 `result` 字段。
