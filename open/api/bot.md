# 群机器人

第三方系统（如 **Jenkins**、GitLab、监控告警）通过 Webhook 向 IM **群聊**推送消息，典型用途是构建部署通知。

## 使用流程

1. 在开放平台门户 → 应用详情 → **机器人**，启用机器人能力
2. 创建 **Incoming Webhook**，选择目标群，获得 **Webhook URL**
3. 在 Jenkins 等系统中配置构建后请求该 URL

也可在 PC 客户端群聊中添加「群助手」并选择 Jenkins 类型，与开放平台 Webhook 配合使用。

## 推送消息

#### host：`{host}`

### 概述

| 名称 | 值 |
|------|-----|
| 地址 | `/api/open/bot_public/v1/send` |
| 请求方式 | POST |
| 鉴权 | Query 参数 `token`（创建 Webhook 时获得） |

完整 URL 示例（门户创建 Webhook 后返回）：

```
{host}/api/open/bot_public/v1/send?token=你的token
```

### 文本消息

##### 参数（JSON Body）

| 参数 | 类型 | 必须 | 说明 |
|------|------|------|------|
| msgtype | String | 是 | 固定 `text` |
| text.content | String | 是 | 消息正文 |
| text.at.isAtAll | Boolean | 否 | 是否 @ 全体成员 |

##### 请求示例

```json
{
  "msgtype": "text",
  "text": {
    "content": "🚀 Jenkins 部署成功\n项目：beaver-server\n环境：production",
    "at": { "isAtAll": false }
  }
}
```

### Markdown 消息

| 参数 | 类型 | 必须 | 说明 |
|------|------|------|------|
| msgtype | String | 是 | 固定 `markdown` |
| markdown.title | String | 是 | 标题 |
| markdown.text | String | 是 | Markdown 正文 |

##### 请求示例

```json
{
  "msgtype": "markdown",
  "markdown": {
    "title": "Jenkins 部署通知",
    "text": "## 🚀 部署成功\n- 项目：beaver-server\n- 分支：main"
  }
}
```

### 返回值

```json
{
  "code": 0,
  "msg": "",
  "result": {
    "messageId": "消息 ID",
    "sendTime": 1700000000000
  }
}
```

## Jenkins 配置示意

在 Jenkins 构建后执行 HTTP 请求（Post build task、Pipeline `httpRequest` 等），POST 到上述 Webhook URL，Body 使用上文 JSON。

若门户开启了签名校验，需在 Query 中附带 `timestamp`、`sign`（HMAC），具体以门户 Webhook 配置为准。
