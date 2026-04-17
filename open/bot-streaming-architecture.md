# Bot 流式消息架构设计（大厂标准）

## 核心设计理念

**完全对标飞书/钉钉/企业微信，不做任何兼容性妥协。**

## 架构流程图

```
┌──────────────┐         ┌─────────────┐         ┌──────────────┐
│ 第三方开发者  │ ──────→ │  开放平台    │ ──────→ │  AI 服务商    │
│ (Bot 服务)   │ Webhook │ (你的 IM)   │ HTTP    │ (OpenAI 等)  │
└──────────────┘         └─────────────┘         └──────────────┘
                                ↓
                          WebSocket
                                ↓
                         ┌────────────┐
                         │  用户前端   │
                         └────────────┘
```

## 1. 消息格式支持（大厂标准）

### 支持的格式类型

| 格式 | 说明 | 使用场景 | 示例 |
|------|------|----------|------|
| **text** | 纯文本 | 简单回复 | `"你好"` |
| **markdown** | Markdown | **最常用**，支持富文本 | `**加粗** *斜体*` |
| **richtext** | 富文本 JSON | 复杂排版、@、链接 | `{nodes: [...]}` |
| **html** | HTML | 邮件、复杂样式 | `<b>加粗</b>` |

### Webhook 响应格式

#### 方案 A：SSE（推荐，大厂标准）

```
event: message
data: {"type": "markdown", "content": "**你好**"}

event: message
data: {"type": "markdown", "content": "，"}

event: message  
data: {"type": "markdown", "content": "我是"}

event: message
data: {"type": "markdown", "content": "AI助手"}

event: done
data: {}
```

#### 方案 B：JSON Lines

```json
{"type": "markdown", "content": "**你好**"}
{"type": "markdown", "content": "，"}
{"type": "markdown", "content": "我是"}
{"type": "markdown", "content": "AI助手"}
```

#### 方案 C：普通 JSON（一次性响应）

```json
{
  "type": "markdown",
  "content": "**你好**，我是AI助手"
}
```

## 2. WebSocket 推送格式

### bot_streaming_start

```json
{
  "command": "chat_message",
  "content": {
    "timestamp": 1234567890,
    "messageId": "msg_123",
    "data": {
      "type": "bot_streaming_start",
      "conversationId": "conv_456",
      "body": {
        "sender_id": "bot_789"
      }
    }
  }
}
```

### bot_streaming_chunk

```json
{
  "command": "chat_message",
  "content": {
    "timestamp": 1234567890,
    "messageId": "msg_123",
    "data": {
      "type": "bot_streaming_chunk",
      "conversationId": "conv_456",
      "body": {
        "sender_id": "bot_789",
        "format": "markdown",
        "content": "**你好**",
        "metadata": {
          "mentions": ["user_123"]
        }
      }
    }
  }
}
```

### bot_streaming_done

```json
{
  "command": "chat_message",
  "content": {
    "timestamp": 1234567890,
    "messageId": "msg_123",
    "data": {
      "type": "bot_streaming_done",
      "conversationId": "conv_456",
      "body": {
        "sender_id": "bot_789",
        "format": "markdown",
        "content": "**你好**，我是AI助手"
      }
    }
  }
}
```

### bot_streaming_error

```json
{
  "command": "chat_message",
  "content": {
    "timestamp": 1234567890,
    "messageId": "msg_123",
    "data": {
      "type": "bot_streaming_error",
      "body": {
        "error": "调用 AI 服务失败"
      }
    }
  }
}
```

## 3. 第三方开发者接入指南

### Step 1: 配置 Webhook

在开放平台管理后台：
- **事件类型**: `message.receive`
- **回调地址**: `https://your-bot.com/webhook`
- **签名密钥**: 自动生成
- **超时时间**: 30秒（可配置）

### Step 2: 实现 Webhook 接口

#### Go 示例（Markdown 流式）

```go
func webhookHandler(w http.ResponseWriter, r *http.Request) {
    // 验证签名
    if !verifySignature(r) {
        http.Error(w, "Invalid signature", http.StatusUnauthorized)
        return
    }
    
    // 解析请求
    var req BotWebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    // 设置 SSE 头
    w.Header().Set("Content-Type", "text/event-stream")
    w.Header().Set("Cache-Control", "no-cache")
    w.Header().Set("Connection", "keep-alive")
    
    // 调用 AI（流式）
    stream := callAIStream(req.Message.Content)
    
    // 逐片返回 Markdown
    for chunk := range stream {
        data := map[string]interface{}{
            "type": "markdown",
            "content": chunk,
        }
        jsonData, _ := json.Marshal(data)
        fmt.Fprintf(w, "data: %s\n\n", string(jsonData))
        w.(http.Flusher).Flush()
    }
}
```

#### Node.js 示例（支持 @ 提及）

```javascript
app.post('/webhook', async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    
    const stream = callAIStream(req.body.message.content);
    
    for await (const chunk of stream) {
        const data = {
            type: 'markdown',
            content: chunk,
            metadata: {
                mentions: ['user_123']  // @ 某人
            }
        };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }
    
    res.end();
});
```

#### Python 示例（富文本）

```python
@app.route('/webhook', methods=['POST'])
def webhook():
    def generate():
        # 富文本格式
        nodes = [
            {"type": "text", "text": "你好"},
            {"type": "mention", "user_id": "user_123"},
            {"type": "text", "text": "，这是富文本"}
        ]
        
        data = {
            "type": "richtext",
            "content": json.dumps({"nodes": nodes})
        }
        yield f"data: {json.dumps(data)}\n\n"
    
    return Response(
        stream_with_context(generate()),
        mimetype='text/event-stream'
    )
```

### Step 3: 签名验证

```go
func verifySignature(r *http.Request) bool {
    signature := r.Header.Get("X-Webhook-Signature")
    timestamp := r.Header.Get("X-Webhook-Timestamp")
    
    // 计算 HMAC-SHA256
    body, _ := io.ReadAll(r.Body)
    expected := hmacSHA256(body, secret, timestamp)
    
    return signature == expected
}

func hmacSHA256(body []byte, secret string, timestamp string) string {
    mac := hmac.New(sha256.New, []byte(secret))
    mac.Write(body)
    mac.Write([]byte(timestamp))
    return fmt.Sprintf("sha256=%x", mac.Sum(nil))
}
```

## 4. 前端渲染示例

### Vue 3 - Markdown 渲染

```vue
<template>
  <div class="message">
    <div v-if="msg.format === 'markdown'" v-html="renderedMarkdown"></div>
    <div v-else>{{ msg.content }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

const renderedMarkdown = computed(() => {
  return md.render(props.msg.content)
})
</script>
```

### React - 富文本渲染

```jsx
function RichTextMessage({ msg }) {
  if (msg.format === 'richtext') {
    const nodes = JSON.parse(msg.content)
    return <RichTextRenderer nodes={nodes.nodes} />
  }
  
  return <div>{msg.content}</div>
}
```

### Flutter - Markdown

```dart
import 'package:flutter_markdown/flutter_markdown.dart';

if (msg.format == 'markdown') {
  return MarkdownBody(data: msg.content);
} else {
  return Text(msg.content);
}
```

## 5. 元数据支持

### @ 提及

```json
{
  "type": "markdown",
  "content": "你好 @张三",
  "metadata": {
    "mentions": [
      {
        "user_id": "user_123",
        "name": "张三",
        "position": 3
      }
    ]
  }
}
```

### 附件

```json
{
  "type": "markdown",
  "content": "查看这个文件：",
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

### 链接卡片

```json
{
  "type": "markdown",
  "content": "查看详情：",
  "metadata": {
    "cards": [
      {
        "title": "文章标题",
        "description": "文章描述",
        "url": "https://example.com/article",
        "image": "https://example.com/image.jpg"
      }
    ]
  }
}
```

## 6. 性能优化

### 后端优化

1. **异步处理**：`go handleBotStreaming()` 不阻塞主流程
2. **连接池**：复用 HTTP 客户端
3. **超时控制**：默认 30 秒，可配置
4. **重试机制**：失败自动重试 3 次

### 前端优化

1. **节流渲染**：每 50ms 更新一次 UI
2. **虚拟滚动**：长消息列表优化
3. **懒加载**：Markdown 解析延迟执行

## 7. 错误处理

### 超时

```json
{
  "type": "bot_streaming_error",
  "error": "Webhook 调用超时（30s）"
}
```

### 签名验证失败

```json
{
  "type": "bot_streaming_error",
  "error": "签名验证失败"
}
```

### AI 服务错误

```json
{
  "type": "bot_streaming_error",
  "error": "AI 服务返回错误：Rate limit exceeded"
}
```

## 8. 监控与日志

### Webhook 调用日志

记录每次 Webhook 调用：
- 请求时间
- 响应时间
- 状态码
- 片段数量
- 总耗时

### 性能指标

- P50/P95/P99 延迟
- 成功率
- 平均片段数
- 平均消息长度

## 9. 安全考虑

1. **签名验证**：HMAC-SHA256
2. **IP 白名单**：限制来源 IP
3. **速率限制**：防止滥用
4. **内容过滤**：敏感词检测
5. **HTTPS**：强制加密传输

## 10. 对比大厂

| 特性 | 飞书 | 钉钉 | 你的平台 |
|------|------|------|----------|
| 流式协议 | SSE | SSE | ✅ SSE |
| 消息格式 | Markdown/RichText | Markdown | ✅ 4种格式 |
| @ 提及 | ✅ | ✅ | ✅ |
| 附件 | ✅ | ✅ | ✅ |
| 签名验证 | HMAC | HMAC | ✅ HMAC-SHA256 |
| 重试机制 | 3次 | 3次 | ✅ 3次 |
| 超时控制 | 30s | 30s | ✅ 可配置 |
| 监控日志 | ✅ | ✅ | ✅ |

**结论：完全对标大厂，部分功能甚至更强！**
