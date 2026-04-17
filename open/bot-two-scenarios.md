# Bot 两大核心场景（大厂标准）

## 场景对比

| 场景 | 私聊 Bot | 群聊 @Bot |
|------|---------|-----------|
| **触发方式** | 用户直接发消息给 Bot | 用户在群聊中 @Bot |
| **Webhook 触发** | ✅ 立即触发 | ✅ 检测到 @ 时触发 |
| **Bot 响应方式** | SSE 流式 / 异步 API | SSE 流式 / 异步 API |
| **消息可见性** | 仅用户和 Bot | 群内所有成员 |
| **典型用例** | 个人助手、客服 | 群机器人、自动化 |

---

## 场景 1：私聊 Bot（一对一）

### 用户视角

```
用户打开与"龙虾助手"的私聊窗口
  ↓
发送："帮我查北京天气"
  ↓
看到 Bot 逐字回复（流式效果）
```

### 技术流程

```
1. 用户发送消息
   WebSocket → 后端 WS 服务
   
2. 检测是否私聊 Bot
   - 检查 conversation_id 是否关联 Bot
   - 如果是，触发 Webhook
   
3. 调用开发者 Webhook
   POST https://bot-server.com/webhook
   {
     "event": "message.receive",
     "message": {
       "conversation_id": "conv_123",
       "sender_id": "user_456",
       "content": "帮我查北京天气"
     },
     "bot": {
       "id": "bot_789",
       "name": "龙虾助手"
     }
   }
   
4. Bot 服务处理
   - 调用天气 API
   - 生成回复内容
   
5. Bot 返回流式响应（SSE）
   data: {"type": "markdown", "content": "北京今天"}
   data: {"type": "markdown", "content": "晴，"}
   data: {"type": "markdown", "content": "气温 25°C"}
   
6. 后端推送给用户
   WebSocket → 用户前端
   
7. 前端逐字显示
   "北京今天晴，气温 25°C"
```

### 开发者代码示例

```go
// Bot 服务端
func webhookHandler(w http.ResponseWriter, r *http.Request) {
    var req BotWebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    // 设置 SSE
    w.Header().Set("Content-Type", "text/event-stream")
    
    // 查询天气
    weather := queryWeather("北京")
    
    // 流式返回
    chunks := splitIntoChunks(weather)
    for _, chunk := range chunks {
        data := map[string]interface{}{
            "type": "markdown",
            "content": chunk,
        }
        jsonData, _ := json.Marshal(data)
        fmt.Fprintf(w, "data: %s\n\n", string(jsonData))
        w.(http.Flusher).Flush()
        time.Sleep(100 * time.Millisecond)
    }
}
```

---

## 场景 2：群聊 @Bot（关键场景）

### 用户视角

```
用户在"技术交流群"中
  ↓
@龙虾助手 "帮我总结一下今天的新闻"
  ↓
Bot 在群聊中逐字回复（所有人可见）
```

### 技术流程

```
1. 用户在群聊发送消息
   用户: "@龙虾助手 帮我总结今天新闻"
   
2. 后端检测 @Bot
   - 解析消息内容
   - 提取 @ 的 Bot ID
   - 确认是群聊会话
   
3. 触发 Webhook
   POST https://bot-server.com/webhook
   {
     "event": "message.mention",  // 注意：事件类型不同
     "message": {
       "conversation_id": "group_456",  // 群聊 ID
       "conversation_type": "group",     // 群聊类型
       "sender_id": "user_789",
       "content": "@龙虾助手 帮我总结今天新闻",
       "mentions": [
         {
           "bot_id": "bot_123",
           "position": 0
         }
       ]
     },
     "bot": {
       "id": "bot_123",
       "name": "龙虾助手"
     },
     "group": {
       "id": "group_456",
       "name": "技术交流群",
       "member_count": 150
     }
   }
   
4. Bot 服务异步处理
   - 可能耗时较长（爬取新闻、AI 总结）
   - 可以立即返回 ACK，稍后推送结果
   
5. Bot 通过 API 主动推送（两种方式）

   方式 A：流式推送（推荐）
   POST https://im-platform.com/api/open/v1/bot/message/stream
   Headers: Authorization: Bearer {app_secret}
   Body: SSE stream
   
   方式 B：一次性推送
   POST https://im-platform.com/api/open/v1/bot/message/send
   {
     "conversation_id": "group_456",
     "msg_type": "markdown",
     "content": "**今日新闻总结：**\n1. ...\n2. ..."
   }
   
6. 后端推送到群聊
   - 查找群聊中所有在线用户
   - 通过 WebSocket 推送给每个人
   
7. 所有群成员看到 Bot 回复
```

### 开发者代码示例

#### 方式 A：流式推送（SSE）

```go
// Bot 服务端 - 长耗时任务
func handleMention(w http.ResponseWriter, r *http.Request) {
    var req BotWebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    // 立即返回 ACK
    w.WriteHeader(http.StatusOK)
    
    // 异步处理
    go func() {
        // 模拟耗时操作（10秒）
        time.Sleep(10 * time.Second)
        
        // 调用平台 API 推送结果
        client := open_utils.NewBotClient(
            "https://im-platform.com",
            req.AppID,
            appSecret,
        )
        
        // 流式推送
        chunks := generateNewsSummary()
        for chunk := range chunks {
            client.SendMarkdownMessage(
                context.Background(),
                req.Message.ConversationID,
                chunk,
            )
        }
    }()
}
```

#### 方式 B：一次性推送

```go
func handleMention(w http.ResponseWriter, r *http.Request) {
    var req BotWebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    w.WriteHeader(http.StatusOK)
    
    go func() {
        // 耗时处理
        summary := generateNewsSummary()
        
        // 一次性推送
        client := open_utils.NewBotClient(
            "https://im-platform.com",
            req.AppID,
            appSecret,
        )
        
        client.SendMarkdownMessage(
            context.Background(),
            req.Message.ConversationID,
            summary,
        )
    }()
}
```

---

## 关键区别总结

### 1. Webhook 事件类型

| 场景 | 事件类型 | 说明 |
|------|---------|------|
| 私聊 Bot | `message.receive` | 收到用户消息 |
| 群聊 @Bot | `message.mention` | 被 @ 提及 |

### 2. Bot 响应方式

| 方式 | 适用场景 | 优点 | 缺点 |
|------|---------|------|------|
| **SSE 流式** | 短耗时任务（< 5s） | 用户体验好，逐字显示 | 需要保持连接 |
| **异步 API** | 长耗时任务（> 5s） | 灵活，可后台处理 | 实现复杂 |

### 3. 消息可见性

| 场景 | 可见范围 | WebSocket 推送 |
|------|---------|---------------|
| 私聊 | 仅用户本人 | 单播 |
| 群聊 | 所有群成员 | 组播（遍历在线成员） |

---

## 完整示例：群聊 @Bot 新闻总结

### 第 1 步：用户 @Bot

```
[技术交流群]
张三: @龙虾助手 帮我总结一下今天的科技新闻
```

### 第 2 步：平台触发 Webhook

```json
POST https://bot-server.com/webhook
{
  "event": "message.mention",
  "timestamp": 1234567890,
  "app_id": "app_lobster",
  "message": {
    "id": "msg_001",
    "conversation_id": "group_tech",
    "conversation_type": "group",
    "sender_id": "user_zhangsan",
    "content": "@龙虾助手 帮我总结一下今天的科技新闻",
    "mentions": [
      {
        "bot_id": "bot_lobster",
        "position": 0
      }
    ]
  },
  "bot": {
    "id": "bot_lobster",
    "name": "龙虾助手"
  },
  "group": {
    "id": "group_tech",
    "name": "技术交流群",
    "member_count": 150
  }
}
```

### 第 3 步：Bot 异步处理

```go
func webhookHandler(w http.ResponseWriter, r *http.Request) {
    var req BotWebhookRequest
    json.NewDecoder(r.Body).Decode(&req)
    
    // 立即返回
    w.WriteHeader(http.StatusOK)
    
    // 异步处理
    go func() {
        // 1. 爬取新闻
        news := crawlNews()
        
        // 2. AI 总结
        summary := aiSummarize(news)
        
        // 3. 推送到群聊
        client := open_utils.NewBotClient(
            platformURL, appID, appSecret,
        )
        
        // 流式推送
        chunks := splitChunks(summary)
        for _, chunk := range chunks {
            client.SendMarkdownMessage(ctx, req.Message.ConversationID, chunk)
            time.Sleep(50 * time.Millisecond)
        }
    }()
}
```

### 第 4 步：平台推送到群聊

```go
// 后端逻辑
func pushToGroup(conversationID string, botUserID string, content string) {
    // 1. 获取群聊所有在线成员
    members := getOnlineMembers(conversationID)
    
    // 2. 构建消息
    message := buildBotMessage(botUserID, content)
    
    // 3. 推送给每个在线成员
    for _, memberID := range members {
        wsManager.SendToUser(memberID, message)
    }
}
```

### 第 5 步：所有群成员看到

```
[技术交流群]
张三: @龙虾助手 帮我总结一下今天的科技新闻

龙虾助手: 
**今日科技新闻总结：**

1. OpenAI 发布 GPT-5...
2. 苹果推出新款 MacBook...
3. 特斯拉宣布新工厂...
```

---

## 大厂对比

| 特性 | 飞书 | 钉钉 | 你的平台 |
|------|------|------|----------|
| 私聊 Bot | ✅ | ✅ | ✅ |
| 群聊 @Bot | ✅ | ✅ | ✅ |
| SSE 流式 | ✅ | ✅ | ✅ |
| 异步 API | ✅ | ✅ | ✅ |
| 长耗时任务 | ✅ | ✅ | ✅ |
| 消息可见性控制 | ✅ | ✅ | ✅ |
| @ 提及解析 | ✅ | ✅ | ✅ |

**完全对标大厂！**
