# 后端开发概述

海狸IM后端基于Go语言和go-zero微服务框架构建，采用微服务架构设计，具有高性能、高可用、易扩展的特点。

## 技术架构

### 核心技术栈

- **编程语言**: Go 1.23+
- **微服务框架**: go-zero
- **数据库**: MySQL 8.0+
- **缓存**: Redis 6.0+
- **消息存储**: 自研消息数据库
- **WebSocket**: gorilla/websocket
- **认证**: JWT
- **容器化**: Docker
- **API文档**: 自动生成的OpenAPI文档

### 架构特点

- **微服务架构**: 按业务领域拆分为多个独立服务
- **高性能**: 基于Go语言的高并发特性
- **水平扩展**: 支持服务实例的水平扩展
- **服务发现**: 基于etcd的服务注册与发现
- **负载均衡**: 内置负载均衡机制
- **熔断降级**: 内置熔断器保护系统稳定性

## 服务列表

海狸IM后端包含以下微服务：

| 服务名称 | API端口 | RPC端口 | Admin端口 | 职责 |
|---------|---------|---------|-----------|------|
| user | 21000 | 22000 | 23000 | 用户管理 |
| auth | 21010 | 22010 | 23010 | 认证授权 |
| friend | 21020 | 22020 | 23020 | 好友管理 |
| chat | 21030 | 22030 | 23030 | 聊天消息 |
| ws | 21040 | 22040 | 23040 | WebSocket连接 |
| group | 21050 | 22050 | 23050 | 群组管理 |
| file | 21060 | 22060 | 23060 | 文件处理 |
| emoji | 21070 | 22070 | 23070 | 表情管理 |
| gateway | 21080 | - | 23080 | API网关 |
| moment | 21090 | - | 23090 | 朋友圈 |
| system | 21100 | - | 23100 | 系统设置 |
| call | 21110 | - | 23110 | 音视频通话 |
| settings | 21120 | - | 23120 | 用户设置 |
| notification | 21140 | - | 23140 | 消息推送 |
| feedback | 21150 | - | 23150 | 意见反馈 |
| track | 21160 | - | 23160 | 行为统计 |
| upload | 21170 | - | 23170 | 文件上传 |

## 项目结构

```
beaver-server/
├── app/                    # 应用服务
│   ├── user/              # 用户服务
│   │   ├── api/           # HTTP API
│   │   ├── rpc/           # RPC服务
│   │   └── admin/         # 管理接口
│   ├── auth/              # 认证服务
│   ├── friend/            # 好友服务
│   ├── chat/              # 聊天服务
│   ├── ws/                # WebSocket服务
│   └── ...                # 其他服务
├── common/                # 公共模块
│   ├── auth/              # 认证相关
│   ├── config/            # 配置管理
│   ├── middleware/        # 中间件
│   ├── response/          # 响应封装
│   └── utils/             # 工具函数
├── core/                  # 核心模块
│   ├── database/          # 数据库连接
│   ├── redis/             # Redis连接
│   └── websocket/         # WebSocket核心
├── database/              # 数据库相关
│   ├── migrations/        # 数据库迁移
│   └── seeds/             # 初始数据
├── deploy/                # 部署文件
│   ├── docker/            # Docker配置
│   └── k8s/               # Kubernetes配置
├── docs/                  # 接口文档
├── main.go                # 主入口
├── go.mod                 # Go模块定义
└── Dockerfile             # Docker构建文件
```

## 核心模块

### 1. 用户服务 (User Service)

负责用户相关的业务逻辑：

- 用户注册、登录
- 用户信息管理
- 用户状态管理
- 用户权限控制

**主要接口**:
- `POST /api/user/register` - 用户注册
- `POST /api/user/login` - 用户登录
- `GET /api/user/profile` - 获取用户信息
- `PUT /api/user/profile` - 更新用户信息

### 2. 认证服务 (Auth Service)

处理系统的认证和授权：

- JWT Token生成和验证
- 刷新Token
- 权限验证
- 单点登录

**主要接口**:
- `POST /api/auth/token` - 获取访问令牌
- `POST /api/auth/refresh` - 刷新令牌
- `POST /api/auth/verify` - 验证令牌

### 3. 聊天服务 (Chat Service)

处理消息相关的业务：

- 消息发送和接收
- 消息存储和查询
- 消息状态管理
- 消息推送

**主要接口**:
- `POST /api/chat/send` - 发送消息
- `GET /api/chat/messages` - 获取消息列表
- `PUT /api/chat/read` - 标记消息已读

### 4. WebSocket服务 (WebSocket Service)

实时通信的核心服务：

- WebSocket连接管理
- 实时消息推送
- 在线状态管理
- 心跳检测

**连接地址**: `ws://localhost:21040/ws`

### 5. 好友服务 (Friend Service)

好友关系管理：

- 好友申请和确认
- 好友列表管理
- 好友状态查询
- 黑名单管理

### 6. 群组服务 (Group Service)

群组功能管理：

- 群组创建和解散
- 成员管理
- 群组权限
- 群组设置

## 数据库设计

### 用户表 (users)

```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    nickname VARCHAR(50),
    avatar VARCHAR(500),
    status TINYINT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 消息表 (messages)

```sql
CREATE TABLE messages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    conversation_id VARCHAR(64) NOT NULL,
    sender_id BIGINT NOT NULL,
    message_type TINYINT NOT NULL,
    content TEXT,
    extra JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_conversation_id (conversation_id),
    INDEX idx_sender_id (sender_id),
    INDEX idx_created_at (created_at)
);
```

### 会话表 (conversations)

```sql
CREATE TABLE conversations (
    id VARCHAR(64) PRIMARY KEY,
    type TINYINT NOT NULL, -- 1:单聊 2:群聊
    creator_id BIGINT,
    name VARCHAR(100),
    avatar VARCHAR(500),
    member_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## API设计规范

### RESTful API

遵循RESTful设计原则：

- `GET` - 获取资源
- `POST` - 创建资源
- `PUT` - 更新资源
- `DELETE` - 删除资源

### 统一响应格式

```json
{
    "code": 200,
    "message": "success",
    "data": {},
    "timestamp": 1640995200
}
```

### 错误码规范

| 错误码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

## 开发环境搭建

### 1. 环境要求

- Go 1.23+
- MySQL 8.0+
- Redis 6.0+
- Git

### 2. 克隆项目

```bash
git clone https://github.com/your-repo/beaver-im.git
cd beaver-im/beaver-server
```

### 3. 安装依赖

```bash
go mod download
```

### 4. 配置数据库

```bash
# 创建数据库
mysql -u root -p -e "CREATE DATABASE beaver_im CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 导入数据库结构
mysql -u root -p beaver_im < database/init.sql
```

### 5. 配置文件

复制并修改配置文件：

```bash
cp config/config.example.yaml config/config.yaml
# 编辑配置文件，设置数据库连接信息等
```

### 6. 启动服务

```bash
# 启动所有服务
go run main.go
```

## 性能特点

- **高并发**: 单机支持10万+并发连接
- **低延迟**: 消息延迟 < 50ms
- **高吞吐**: 支持每秒百万级消息处理
- **水平扩展**: 支持集群部署和水平扩展

## 下一步

- [技术栈详解](./tech-stack.md) - 深入了解技术选型
- [项目结构](./structure.md) - 详细的项目结构说明  
- [开发指南](./development.md) - 本地开发环境搭建
- [API文档](../api/) - 完整的API接口文档 