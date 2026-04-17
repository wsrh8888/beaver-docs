# 开放平台流式消息使用指南

## 概述

开放平台支持 Bot 回复用户时的流式消息展示，让 AI 对话体验更流畅（类似 ChatGPT 的逐字显示效果）。

## 工作原理

```
用户发送消息
    ↓
后端接收并触发 Webhook
    ↓
第三方 AI 服务返回流式响应 (SSE)
    ↓
后端逐片通过 WebSocket 推送给用户
    ↓
前端逐字显示
```

## 第三方开发者接入

### 1. 配置 Webhook

在开放平台管理后台配置 Webhook：
- **事件类型**: `message.receive` (收到消息)
- **回调地址**: 你的 AI 服务地址
- **流式模式**: 开启

### 2. 实现流式 Webhook 接口

你的服务需要返回 SSE (Server-Sent Events) 格式：

#### Go 示例

```go
func webhookHandler(w http.ResponseWriter, r *http.Request) {
    // 设置 SSE 响应头
    w.Header().Set("Content-Type", "text/event-stream")
    w.Header().Set("Cache-Control", "no-cache")
    w.Header().Set("Connection", "keep-alive")
    
    // 解析请求
    var req WebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    // 调用你的 AI 服务（流式）
    stream := callAIStream(req.Message.Content)
    
    // 逐片返回
    for chunk := range stream {
        fmt.Fprintf(w, "data: %s\n\n", chunk)
        w.(http.Flusher).Flush()
    }
}
```

#### Node.js 示例

```javascript
app.post('/webhook', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    const stream = callAIStream(req.body.message.content);
    
    stream.on('data', (chunk) => {
        res.write(`data: ${chunk}\n\n`);
    });
    
    stream.on('end', () => {
        res.end();
    });
});
```

#### Python 示例

```python
from flask import Response, request, stream_with_context
import json

@app.route('/webhook', methods=['POST'])
def webhook():
    def generate():
        data = request.json
        stream = call_ai_stream(data['message']['content'])
        
        for chunk in stream:
            yield f"data: {chunk}\n\n"
    
    return Response(
        stream_with_context(generate()),
        mimetype='text/event-stream'
    )
```

### 3. SSE 格式说明

每条消息格式：
```
data: 你好

data: ，

data: 我是

data: AI

data: 助手

```

**注意：**
- 每行以 `data: ` 开头
- 每个片段后跟两个换行符 `\n\n`
- 最后可以发送 `data: [DONE]\n\n` 表示结束（可选）

### 4. 替代方案：JSON Lines 格式

如果不方便实现 SSE，也可以返回 JSON Lines 格式：

```json
{"content": "你好"}
{"content": "，"}
{"content": "我是"}
{"content": "AI"}
{"content": "助手"}
```

每行一个 JSON 对象，包含 `content` 字段。

## 请求参数

Webhook 会收到以下 JSON 数据：

```json
{
  "event": "message.receive",
  "timestamp": 1234567890,
  "app_id": "your_app_id",
  "message": {
    "id": "msg_123",
    "conversation_id": "conv_456",
    "sender_id": "user_789",
    "content": "你好",
    "msg_type": "text"
  },
  "bot": {
    "id": "bot_001",
    "name": "AI助手"
  }
}
```

## 完整示例

### 集成 OpenAI API 的流式 Webhook

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    
    openai "github.com/sashabaranov/go-openai"
)

func webhookHandler(w http.ResponseWriter, r *http.Request) {
    // 设置 SSE 头
    w.Header().Set("Content-Type", "text/event-stream")
    w.Header().Set("Cache-Control", "no-cache")
    w.Header().Set("Connection", "keep-alive")
    
    // 解析请求
    var req WebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    // 创建 OpenAI 客户端
    client := openai.NewClient("your-api-key")
    
    // 流式调用
    stream, err := client.CreateChatCompletionStream(r.Context(), openai.ChatCompletionRequest{
        Model: openai.GPT4,
        Messages: []openai.ChatCompletionMessage{
            {
                Role:    openai.ChatMessageRoleUser,
                Content: req.Message.Content,
            },
        },
        Stream: true,
    })
    
    if err != nil {
        return
    }
    defer stream.Close()
    
    // 逐片返回
    for {
        response, err := stream.Recv()
        if err == io.EOF {
            break
        }
        if err != nil {
            break
        }
        
        content := response.Choices[0].Delta.Content
        if content != "" {
            fmt.Fprintf(w, "data: %s\n\n", content)
            w.(http.Flusher).Flush()
        }
    }
}
```

## 注意事项

1. **超时设置**: 建议设置合理的超时时间（默认 30 秒）
2. **错误处理**: 如果出错，返回 HTTP 500 状态码
3. **重试机制**: 平台会在失败时自动重试（可配置）
4. **签名验证**: 建议验证 `X-Webhook-Signature` 头确保请求来源

## 调试技巧

### 本地测试

使用 ngrok 暴露本地服务：

```bash
ngrok http 8080
```

然后将 ngrok 地址配置为 Webhook URL。

### 查看日志

在开放平台管理后台可以查看：
- Webhook 调用日志
- 响应状态
- 错误信息

## 常见问题

**Q: 为什么我的流式响应没有生效？**

A: 检查以下几点：
1. 确认 Webhook 配置中开启了"流式模式"
2. 确认响应头包含 `Content-Type: text/event-stream`
3. 确认每个片段后有 `\n\n`
4. 查看 Webhook 日志确认调用成功

**Q: 支持哪些 AI 服务？**

A: 理论上支持任何能返回流式响应的服务，包括：
- OpenAI (GPT-3.5/4)
- 通义千问
- 文心一言
- Claude
- 自研 AI 模型

**Q: 性能如何？**

A: 流式传输可以显著提升用户体验：
- 首字延迟降低 80%+
- 用户感知响应速度提升明显
- 服务器资源占用略高于非流式
