# Bot API 使用指南（go-zero 生成）

## API 定义文件

位置：`app/open/open_api/api/bot.api`

```go
syntax = "v1"

type (
	// Bot 发送消息请求（对标飞书/钉钉）
	BotSendMessageReq {
		AppID          string                 `json:"app_id" header:"X-App-ID"`
		ConversationID string                 `json:"conversation_id"`
		MsgType        string                 `json:"msg_type"`          // text/markdown/richtext/html
		Content        string                 `json:"content"`
		Metadata       map[string]interface{} `json:"metadata,omitempty"`
		IdempotentKey  string                 `json:"idempotent_key,omitempty"`
	}

	BotSendMessageRes {
		MessageID string `json:"message_id"`
	}
)

service open {
	@doc "Bot 主动发送消息"
	@handler BotSendMessage
	post /api/open/v1/bot/message/send (BotSendMessageReq) returns (BotSendMessageRes)
}
```

## 生成命令

```bash
cd app/open/open_api
goctl api go -api open_api.api -dir . --home ../../../template
```

## 生成的文件结构

```
app/open/open_api/
├── api/
│   └── bot.api                          # API 定义
├── internal/
│   ├── handler/
│   │   └── bot/
│   │       ├── botsendmessagehandler.go      # Handler（已修正 logic 引用）
│   │       └── botstreammessagehandler.go    # Handler
│   ├── logic/
│   │   └── bot/
│   │       ├── botsendmessagelogic.go        # Logic（已实现）
│   │       └── botstreammessagelogic.go      # Logic
│   └── types/
│       └── types.go                       # 类型定义（自动生成）
└── open_api.api                           # 主 API 文件（已引入 bot.api）
```

## API 端点

### 1. Bot 主动发送消息

**接口：** `POST /api/open/v1/bot/message/send`

**请求头：**
```
X-App-ID: your_app_id
Authorization: Bearer your_app_secret
```

**请求体：**
```json
{
  "conversation_id": "conv_123",
  "msg_type": "markdown",
  "content": "**你好**，这是 Markdown 消息",
  "metadata": {
    "mentions": ["user_456"]
  }
}
```

**响应：**
```json
{
  "message_id": "msg_789"
}
```

**使用场景：**
- 私聊 Bot 异步返回结果
- 群聊 @Bot 后推送结果
- 定时任务推送通知

### 2. Bot 流式发送消息（SSE）

**接口：** `POST /api/open/v1/bot/message/stream`

**请求头：**
```
X-App-ID: your_app_id
Authorization: Bearer your_app_secret
Accept: text/event-stream
```

**请求体：**
```json
{
  "conversation_id": "conv_123",
  "msg_type": "markdown"
}
```

**响应（SSE 流）：**
```
data: {"type":"markdown","content":"**你好**"}

data: {"type":"markdown","content":"，"}

data: {"type":"markdown","content":"这是流式消息"}
```

## 第三方开发者使用示例

### Go SDK

```go
package main

import (
    "context"
    "beaver/app/open/open_utils"
)

func main() {
    client := open_utils.NewBotClient(
        "https://im-platform.com",
        "app_lobster",
        "secret_xxx",
    )
    
    // 发送 Markdown 消息到群聊
    resp, err := client.SendMarkdownMessage(
        context.Background(),
        "group_tech",  // 群聊 ID
        "**今日新闻总结：**\n1. ...\n2. ...",
    )
    
    if err != nil {
        panic(err)
    }
    
    println("消息 ID:", resp.MessageID)
}
```

### cURL 测试

```bash
curl -X POST https://im-platform.com/api/open/v1/bot/message/send \
  -H "X-App-ID: app_lobster" \
  -H "Authorization: Bearer secret_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "conversation_id": "group_tech",
    "msg_type": "markdown",
    "content": "**Hello** from Bot!"
  }'
```

### Node.js

```javascript
const axios = require('axios');

async function sendBotMessage() {
  const response = await axios.post(
    'https://im-platform.com/api/open/v1/bot/message/send',
    {
      conversation_id: 'group_tech',
      msg_type: 'markdown',
      content: '**Hello** from Bot!',
    },
    {
      headers: {
        'X-App-ID': 'app_lobster',
        'Authorization': 'Bearer secret_xxx',
      },
    }
  );
  
  console.log('Message ID:', response.data.message_id);
}
```

## 消息格式支持

| msg_type | 说明 | 示例 |
|----------|------|------|
| `text` | 纯文本 | `"你好"` |
| `markdown` | Markdown | `"**加粗** *斜体*"` |
| `richtext` | 富文本 JSON | `{"nodes": [...]}` |
| `html` | HTML | `"<b>加粗</b>"` |

## 元数据支持

### @ 提及

```json
{
  "conversation_id": "group_123",
  "msg_type": "markdown",
  "content": "@张三 你好",
  "metadata": {
    "mentions": [
      {
        "user_id": "user_456",
        "name": "张三",
        "position": 0
      }
    ]
  }
}
```

### 附件

```json
{
  "metadata": {
    "attachments": [
      {
        "type": "file",
        "url": "https://example.com/file.pdf",
        "name": "文档.pdf"
      }
    ]
  }
}
```

## 完整流程示例

### 场景：群聊 @Bot 查询天气

#### 1. 用户 @Bot

```
[技术群]
张三: @龙虾助手 北京天气怎么样？
```

#### 2. 平台触发 Webhook

```json
POST https://bot-server.com/webhook
{
  "event": "message.mention",
  "message": {
    "conversation_id": "group_tech",
    "content": "@龙虾助手 北京天气怎么样？"
  }
}
```

#### 3. Bot 异步处理并调用 API

```go
func webhookHandler(w http.ResponseWriter, r *http.Request) {
    var req WebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    w.WriteHeader(http.StatusOK)
    
    go func() {
        // 查询天气
        weather := queryWeather("北京")
        
        // 调用平台 API 推送
        client := NewBotClient(platformURL, appID, secret)
        client.SendMarkdownMessage(ctx, req.Message.ConversationID, weather)
    }()
}
```

#### 4. 所有群成员看到回复

```
[技术群]
张三: @龙虾助手 北京天气怎么样？

龙虾助手: 
**北京天气：**
- 温度：25°C
- 天气：晴
- 风力：微风
```

## 错误处理

### 应用不存在

```json
{
  "code": 400,
  "message": "应用不存在或已禁用"
}
```

### Bot 未配置

```json
{
  "code": 400,
  "message": "Bot 未配置"
}
```

### 发送失败

```json
{
  "code": 500,
  "message": "发送消息失败: ..."
}
```

## 幂等性

通过 `idempotent_key` 防止重复发送：

```json
{
  "conversation_id": "group_123",
  "msg_type": "text",
  "content": "通知内容",
  "idempotent_key": "unique_key_12345"
}
```

相同 `idempotent_key` 的请求只会发送一次。

## 监控与日志

每次调用都会记录：
- App ID
- API 路径
- 请求方法
- 状态码
- 时间戳

可在开放平台管理后台查看调用日志。
