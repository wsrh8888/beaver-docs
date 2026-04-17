# Bot 流式消息前端实现指南

## 概述

本文档说明如何在前端接收并展示 Bot 的流式回复（类似 ChatGPT 的逐字显示效果）。

## WebSocket 消息格式

### 1. Bot 流式开始

```json
{
  "command": "chat_message",
  "data": {
    "type": "bot_streaming_start",
    "message_id": "msg_123",
    "conversation_id": "conv_456",
    "sender_id": "bot_789"
  }
}
```

### 2. Bot 流式片段

```json
{
  "command": "chat_message",
  "data": {
    "type": "bot_streaming_chunk",
    "message_id": "msg_123",
    "conversation_id": "conv_456",
    "sender_id": "bot_789",
    "content": "你好"
  }
}
```

### 3. Bot 流式完成

```json
{
  "command": "chat_message",
  "data": {
    "type": "bot_streaming_done",
    "message_id": "msg_123",
    "conversation_id": "conv_456",
    "sender_id": "bot_789",
    "content": "你好，我是AI助手"
  }
}
```

### 4. Bot 流式错误

```json
{
  "command": "chat_message",
  "data": {
    "type": "bot_streaming_error",
    "message_id": "msg_123",
    "error": "调用 AI 服务失败"
  }
}
```

## 前端实现

### Vue 3 示例

```vue
<template>
  <div class="chat-container">
    <div v-for="msg in messages" :key="msg.messageId" class="message">
      <!-- 普通消息 -->
      <div v-if="!msg.isStreaming" class="message-content">
        {{ msg.content }}
      </div>
      
      <!-- Bot 流式消息 -->
      <div v-else class="message-content streaming">
        {{ msg.streamingContent }}
        <span v-if="!msg.isComplete" class="cursor">|</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const messages = ref([])
const ws = ref(null)

// 连接 WebSocket
function connectWebSocket() {
  ws.value = new WebSocket('ws://localhost:8080/ws')
  
  ws.value.onmessage = (event) => {
    const data = JSON.parse(event.data)
    
    // 处理 Bot 流式消息
    if (data.command === 'chat_message' && data.data) {
      handleBotMessage(data.data)
    }
  }
}

// 处理 Bot 消息
function handleBotMessage(msgData) {
  switch (msgData.type) {
    case 'bot_streaming_start':
      // 创建新的流式消息
      messages.value.push({
        messageId: msgData.message_id,
        conversationId: msgData.conversation_id,
        senderId: msgData.sender_id,
        isStreaming: true,
        isComplete: false,
        streamingContent: ''
      })
      break
      
    case 'bot_streaming_chunk':
      // 追加片段
      const msg = messages.value.find(m => m.messageId === msgData.message_id)
      if (msg) {
        msg.streamingContent += msgData.content
      }
      break
      
    case 'bot_streaming_done':
      // 标记完成
      const completedMsg = messages.value.find(m => m.messageId === msgData.message_id)
      if (completedMsg) {
        completedMsg.isComplete = true
        completedMsg.isStreaming = false
        completedMsg.content = msgData.content
      }
      break
      
    case 'bot_streaming_error':
      // 显示错误
      const errorMsg = messages.value.find(m => m.messageId === msgData.message_id)
      if (errorMsg) {
        errorMsg.isStreaming = false
        errorMsg.streamingContent = `[错误] ${msgData.error}`
      }
      break
  }
}

onMounted(() => {
  connectWebSocket()
})

onUnmounted(() => {
  if (ws.value) {
    ws.value.close()
  }
})
</script>

<style scoped>
.streaming {
  white-space: pre-wrap;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>
```

### React 示例

```jsx
import { useState, useEffect, useRef } from 'react'

function ChatComponent() {
  const [messages, setMessages] = useState([])
  const wsRef = useRef(null)

  useEffect(() => {
    // 连接 WebSocket
    wsRef.current = new WebSocket('ws://localhost:8080/ws')
    
    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      
      if (data.command === 'chat_message' && data.data) {
        handleBotMessage(data.data)
      }
    }
    
    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [])

  const handleBotMessage = (msgData) => {
    switch (msgData.type) {
      case 'bot_streaming_start':
        setMessages(prev => [...prev, {
          messageId: msgData.message_id,
          conversationId: msgData.conversation_id,
          senderId: msgData.sender_id,
          isStreaming: true,
          isComplete: false,
          streamingContent: ''
        }])
        break
        
      case 'bot_streaming_chunk':
        setMessages(prev => prev.map(msg => 
          msg.messageId === msgData.message_id
            ? { ...msg, streamingContent: msg.streamingContent + msgData.content }
            : msg
        ))
        break
        
      case 'bot_streaming_done':
        setMessages(prev => prev.map(msg =>
          msg.messageId === msgData.message_id
            ? { ...msg, isComplete: true, isStreaming: false, content: msgData.content }
            : msg
        ))
        break
        
      case 'bot_streaming_error':
        setMessages(prev => prev.map(msg =>
          msg.messageId === msgData.message_id
            ? { ...msg, isStreaming: false, streamingContent: `[错误] ${msgData.error}` }
            : msg
        ))
        break
    }
  }

  return (
    <div className="chat-container">
      {messages.map(msg => (
        <div key={msg.messageId} className="message">
          {!msg.isStreaming ? (
            <div className="message-content">{msg.content}</div>
          ) : (
            <div className="message-content streaming">
              {msg.streamingContent}
              {!msg.isComplete && <span className="cursor">|</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
```

### Flutter 示例

```dart
import 'package:flutter/material.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'dart:convert';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  late WebSocketChannel channel;
  List<Map<String, dynamic>> messages = [];

  @override
  void initState() {
    super.initState();
    channel = WebSocketChannel.connect(
      Uri.parse('ws://localhost:8080/ws'),
    );
    
    channel.stream.listen((data) {
      final parsed = jsonDecode(data);
      if (parsed['command'] == 'chat_message' && parsed['data'] != null) {
        handleBotMessage(parsed['data']);
      }
    });
  }

  void handleBotMessage(Map<String, dynamic> msgData) {
    setState(() {
      switch (msgData['type']) {
        case 'bot_streaming_start':
          messages.add({
            'messageId': msgData['message_id'],
            'conversationId': msgData['conversation_id'],
            'senderId': msgData['sender_id'],
            'isStreaming': true,
            'isComplete': false,
            'streamingContent': '',
          });
          break;
          
        case 'bot_streaming_chunk':
          final index = messages.indexWhere(
            (m) => m['messageId'] == msgData['message_id']
          );
          if (index != -1) {
            messages[index]['streamingContent'] += msgData['content'];
          }
          break;
          
        case 'bot_streaming_done':
          final index = messages.indexWhere(
            (m) => m['messageId'] == msgData['message_id']
          );
          if (index != -1) {
            messages[index]['isComplete'] = true;
            messages[index]['isStreaming'] = false;
            messages[index]['content'] = msgData['content'];
          }
          break;
          
        case 'bot_streaming_error':
          final index = messages.indexWhere(
            (m) => m['messageId'] == msgData['message_id']
          );
          if (index != -1) {
            messages[index]['isStreaming'] = false;
            messages[index]['streamingContent'] = '[错误] ${msgData['error']}';
          }
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: messages.length,
      itemBuilder: (context, index) {
        final msg = messages[index];
        return ListTile(
          title: Text(
            msg['isStreaming'] 
              ? '${msg['streamingContent']}|'  // 光标效果
              : (msg['content'] ?? ''),
          ),
        );
      },
    );
  }

  @override
  void dispose() {
    channel.sink.close();
    super.dispose();
  }
}
```

## 关键点

1. **性能优化**：
   - 使用 `requestAnimationFrame` 或节流更新 UI
   - 避免频繁重渲染

2. **用户体验**：
   - 显示打字光标动画
   - 支持暂停/继续
   - 错误重试机制

3. **多端同步**：
   - 流式内容只保存在当前设备
   - 完成后通过服务端持久化
   - 其他设备拉取完整消息

## 测试

### 模拟 Bot Webhook 响应

```javascript
// Node.js 测试服务器
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  
  const chunks = ['你好', '，', '我是', 'AI', '助手'];
  let i = 0;
  
  const interval = setInterval(() => {
    if (i < chunks.length) {
      res.write(`data: ${chunks[i]}\n\n`);
      i++;
    } else {
      clearInterval(interval);
      res.end();
    }
  }, 500);
});

server.listen(3000, () => {
  console.log('Bot Webhook 运行在 http://localhost:3000');
});
```

## 常见问题

**Q: 流式消息会保存到数据库吗？**

A: 不会。只有 `bot_streaming_done` 时的完整内容才会由 Bot 服务端保存。

**Q: 如何处理网络中断？**

A: WebSocket 重连后，重新请求完整消息历史。

**Q: 能暂停流式输出吗？**

A: 可以。前端维护一个暂停标志，收到 chunk 时判断是否追加到显示内容。
