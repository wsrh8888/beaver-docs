# 后端开发指南

基于 go-zero 框架构建高性能、可扩展的即时通讯后端服务。

**技术栈**: Go 1.19+ • go-zero • MySQL 8.0+ • Redis 6.0+ • WebSocket

## 🏗️ 技术架构概览

<div class="tech-grid">
  <div class="tech-card">
    <div class="tech-header">
      <span class="tech-icon">⚡</span>
      <h3>核心框架</h3>
    </div>
    <ul class="tech-list">
      <li>go-zero - 微服务框架</li>
      <li>gRPC - 服务间通信</li>
      <li>JWT - 认证授权</li>
      <li>Swagger - API 文档</li>
    </ul>
  </div>

  <div class="tech-card">
    <div class="tech-header">
      <span class="tech-icon">🗄️</span>
      <h3>数据存储</h3>
    </div>
    <ul class="tech-list">
      <li>MySQL 8.0+ - 主数据库</li>
      <li>Redis 6.0+ - 缓存存储</li>
      <li>七牛云 - 文件存储</li>
      <li>Etcd - 服务发现</li>
    </ul>
  </div>

  <div class="tech-card">
    <div class="tech-header">
      <span class="tech-icon">🔌</span>
      <h3>通信协议</h3>
    </div>
    <ul class="tech-list">
      <li>WebSocket - 实时通信</li>
      <li>HTTP API - RESTful 接口</li>
      <li>gRPC - 内部调用</li>
      <li>消息队列 - 异步处理</li>
    </ul>
  </div>
</div>

## 📁 项目结构解析

```
beaver-server/
├── api/                    # API 定义文件
│   ├── user.api           # 用户相关接口
│   └── chat.api           # 聊天相关接口
├── internal/              # 核心业务逻辑
│   ├── handler/           # HTTP 处理器
│   ├── logic/             # 业务逻辑层
│   └── model/             # 数据模型
├── etc/                   # 配置文件
└── rpc/                   # RPC 服务定义
```

**架构特点**:
- **分层架构**: Handler → Logic → Model 的清晰分层，职责分离，易于维护
- **代码生成**: 基于 .api 文件自动生成路由、类型定义和基础代码结构
- **配置管理**: YAML 配置文件，支持多环境配置和热更新

## 🚀 环境搭建

### 1. 克隆项目

```bash
git clone https://github.com/wsrh8888/beaver-server.git
cd beaver-server
```

### 2. 安装Go环境

```bash
# 下载Go 1.21 (推荐版本)
wget https://go.dev/dl/go1.21.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz

# 配置环境变量
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct

# 验证安装
go version
```

### 3. 安装go-zero工具

```bash
# 安装goctl工具
go install github.com/zeromicro/go-zero/tools/goctl@latest

# 验证安装
goctl --version
```

### 4. 数据库配置

#### MySQL配置

```bash
# 登录MySQL
mysql -u root -p

# 创建数据库
CREATE DATABASE beaver_im CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 创建用户
CREATE USER 'beaver'@'localhost' IDENTIFIED BY 'beaver123';
GRANT ALL PRIVILEGES ON beaver_im.* TO 'beaver'@'localhost';
FLUSH PRIVILEGES;
```

#### Redis配置

```bash
# 启动Redis
redis-server

# 验证连接
redis-cli ping
```

### 5. 项目配置

```bash
# 复制配置文件
cp etc/config.example.yaml etc/config.yaml

# 编辑配置文件
vim etc/config.yaml
```

配置文件示例：

```yaml
Name: beaver-api
Host: 0.0.0.0
Port: 21000

# 数据库配置
DataSource: beaver:beaver123@tcp(localhost:3306)/beaver_im?charset=utf8mb4&parseTime=true

# Redis配置
CacheRedis:
  - Host: localhost:6379
    Type: node

# JWT配置
Auth:
  AccessSecret: your-access-secret
  AccessExpire: 86400

# 文件上传配置
Upload:
  QiniuAccessKey: your-qiniu-access-key
  QiniuSecretKey: your-qiniu-secret-key
  QiniuBucket: your-bucket-name
  QiniuDomain: your-domain.com

# WebSocket配置
WebSocket:
  Port: 21040
  Path: /ws

# 日志配置
Log:
  ServiceName: beaver-api
  Mode: file
  Path: logs
  Level: info
```

## 📋 开发流程

### 1. 依赖管理

```bash
# 下载依赖
go mod download

# 添加新依赖
go get github.com/example/package

# 整理依赖
go mod tidy
```

### 2. API开发

#### 定义API

在 `api/` 目录下定义API接口：

```go
// api/user.api
syntax = "v1"

info(
    title: "用户服务API"
    desc: "用户相关的API接口"
    author: "beaver-im"
    email: "contact@beaver-im.com"
    version: "v1.0"
)

// 用户登录请求
type LoginRequest {
    Username string `json:"username"`
    Password string `json:"password"`
}

// 用户登录响应
type LoginResponse {
    Token string `json:"token"`
    UserInfo UserInfo `json:"userInfo"`
}

// 用户信息
type UserInfo {
    Id int64 `json:"id"`
    Username string `json:"username"`
    Nickname string `json:"nickname"`
    Avatar string `json:"avatar"`
}

service user-api {
    @handler LoginHandler
    post /api/user/login (LoginRequest) returns (LoginResponse)
    
    @handler GetUserInfoHandler
    get /api/user/info returns (UserInfo)
}
```

#### 生成代码

```bash
# 生成API代码
goctl api go -api api/user.api -dir .

# 生成的文件结构：
# ├── internal/
# │   ├── handler/
# │   │   ├── loginhandler.go
# │   │   └── getuserinfohandler.go
# │   ├── logic/
# │   │   ├── loginlogic.go
# │   │   └── getuserinfologic.go
# │   ├── svc/
# │   │   └── servicecontext.go
# │   └── types/
# │       └── types.go
```

### 3. 业务逻辑开发

#### Handler层

```go
// internal/handler/loginhandler.go
package handler

import (
    "net/http"
    "github.com/zeromicro/go-zero/rest/httpx"
    "beaver-server/internal/logic"
    "beaver-server/internal/svc"
    "beaver-server/internal/types"
)

func LoginHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        var req types.LoginRequest
        if err := httpx.Parse(r, &req); err != nil {
            httpx.Error(w, err)
            return
        }

        l := logic.NewLoginLogic(r.Context(), svcCtx)
        resp, err := l.Login(&req)
        if err != nil {
            httpx.Error(w, err)
        } else {
            httpx.OkJson(w, resp)
        }
    }
}
```

#### Logic层

```go
// internal/logic/loginlogic.go
package logic

import (
    "context"
    "errors"
    "github.com/zeromicro/go-zero/core/logx"
    "beaver-server/internal/svc"
    "beaver-server/internal/types"
)

type LoginLogic struct {
    logx.Logger
    ctx    context.Context
    svcCtx *svc.ServiceContext
}

func NewLoginLogic(ctx context.Context, svcCtx *svc.ServiceContext) *LoginLogic {
    return &LoginLogic{
        Logger: logx.WithContext(ctx),
        ctx:    ctx,
        svcCtx: svcCtx,
    }
}

func (l *LoginLogic) Login(req *types.LoginRequest) (resp *types.LoginResponse, err error) {
    // 验证用户名密码
    user, err := l.svcCtx.UserModel.FindByUsername(l.ctx, req.Username)
    if err != nil {
        return nil, errors.New("用户名或密码错误")
    }
    
    // 验证密码
    if !l.verifyPassword(req.Password, user.Password) {
        return nil, errors.New("用户名或密码错误")
    }
    
    // 生成JWT Token
    token, err := l.generateToken(user.Id)
    if err != nil {
        return nil, errors.New("生成Token失败")
    }
    
    return &types.LoginResponse{
        Token: token,
        UserInfo: types.UserInfo{
            Id: user.Id,
            Username: user.Username,
            Nickname: user.Nickname,
            Avatar: user.Avatar,
        },
    }, nil
}

func (l *LoginLogic) verifyPassword(inputPassword, hashedPassword string) bool {
    // 密码验证逻辑
    return true
}

func (l *LoginLogic) generateToken(userId int64) (string, error) {
    // JWT Token生成逻辑
    return "token", nil
}
```

### 4. 数据模型

#### 定义模型

```sql
-- 用户表
CREATE TABLE users (
    id bigint NOT NULL AUTO_INCREMENT,
    username varchar(50) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    nickname varchar(50),
    avatar varchar(500),
    phone varchar(20),
    email varchar(100),
    status tinyint DEFAULT 1,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_username (username)
);
```

#### 生成模型代码

```bash
# 生成模型代码
goctl model mysql ddl -src user.sql -dir model -c

# 生成的文件：
# ├── model/
# │   ├── usersmodel.go
# │   └── vars.go
```

### 5. WebSocket服务

```go
// internal/ws/hub.go
package ws

import (
    "log"
    "net/http"
    "github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
    CheckOrigin: func(r *http.Request) bool {
        return true
    },
}

type Hub struct {
    clients    map[*Client]bool
    broadcast  chan []byte
    register   chan *Client
    unregister chan *Client
}

type Client struct {
    hub  *Hub
    conn *websocket.Conn
    send chan []byte
    userId int64
}

func NewHub() *Hub {
    return &Hub{
        clients:    make(map[*Client]bool),
        broadcast:  make(chan []byte),
        register:   make(chan *Client),
        unregister: make(chan *Client),
    }
}

func (h *Hub) Run() {
    for {
        select {
        case client := <-h.register:
            h.clients[client] = true
            log.Printf("用户 %d 连接", client.userId)
            
        case client := <-h.unregister:
            if _, ok := h.clients[client]; ok {
                delete(h.clients, client)
                close(client.send)
                log.Printf("用户 %d 断开连接", client.userId)
            }
            
        case message := <-h.broadcast:
            for client := range h.clients {
                select {
                case client.send <- message:
                default:
                    close(client.send)
                    delete(h.clients, client)
                }
            }
        }
    }
}
```

## 🔧 开发工具

### 1. API文档生成

```bash
# 生成Swagger文档
goctl api plugin -plugin goctl-swagger="swagger -filename user.json" -api api/user.api -dir docs
```

### 2. 代码格式化

```bash
# 格式化代码
go fmt ./...

# 使用goimports
goimports -w .
```

### 3. 代码检查

```bash
# 安装golangci-lint
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

# 运行代码检查
golangci-lint run
```

## 🚀 启动服务

### 开发环境启动

```bash
# 直接运行
go run main.go

# 或者使用goctl
goctl api go -api api/*.api -dir . --home template
```

### 编译和部署

```bash
# 编译
go build -o beaver-server main.go

# 运行编译后的程序
./beaver-server -f etc/config.yaml
```

## 🐛 调试技巧

### 1. 日志调试

```go
import "github.com/zeromicro/go-zero/core/logx"

// 在Logic中使用日志
logx.Infof("用户登录: %s", req.Username)
logx.Errorf("登录失败: %v", err)
```

### 2. 断点调试

在VS Code中配置 `.vscode/launch.json`：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Go",
            "type": "go",
            "request": "launch",
            "mode": "auto",
            "program": "${workspaceFolder}/main.go",
            "args": ["-f", "etc/config.yaml"]
        }
    ]
}
```

### 3. 接口测试

使用REST Client插件，创建 `test.http`：

```http
### 用户登录
POST http://localhost:21000/api/user/login
Content-Type: application/json

{
    "username": "testuser",
    "password": "123456"
}

### 获取用户信息
GET http://localhost:21000/api/user/info
Authorization: Bearer {{token}}
```

## 📋 开发规范

### 1. 代码规范

- 遵循Go官方代码规范
- 使用有意义的变量名和函数名
- 添加必要的注释
- 错误处理要完整

### 2. API设计规范

- RESTful API设计
- 统一的响应格式
- 合理的HTTP状态码
- 详细的错误信息

### 3. 数据库规范

- 表名使用复数形式
- 字段名使用下划线命名
- 必须有创建时间和更新时间
- 合理的索引设计

## 🚦 性能优化

### 1. 数据库优化

- 合理使用索引
- 避免N+1查询
- 使用连接池
- 读写分离

### 2. 缓存策略

- Redis缓存热点数据
- 合理设置过期时间
- 缓存更新策略

### 3. 并发优化

- 使用Go协程
- 合理的超时设置
- 连接池管理

## 📚 相关资源

- [go-zero官方文档](https://go-zero.dev/)
- [Go语言官方文档](https://golang.org/doc/)
- [MySQL官方文档](https://dev.mysql.com/doc/)
- [Redis官方文档](https://redis.io/documentation)

如果在开发过程中遇到问题，欢迎在GitHub Issues中提问或加入QQ群(1013328597)交流！ 

<style>
/* 海狸IM 后端开发指南样式 */
:root {
  --primary-color: #FF7D45;
  --primary-dark: #E86835;
  --primary-light: #FFE6D9;
  --secondary-blue: #4A6FA1;
  --text-primary: #2D3436;
  --text-secondary: #636E72;
  --text-muted: #B2BEC3;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;
  --border-color: #EBEEF5;
  --success-color: #4CAF50;
  --warning-color: #FFC107;
  --error-color: #FF5252;
  --info-color: #2196F3;
}

/* 后端主题英雄区 */
.backend-hero {
  background: linear-gradient(135deg, var(--secondary-blue) 0%, #3A5A89 100%);
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 架构网格 */
.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.arch-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.arch-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(74, 111, 161, 0.15);
}

.arch-card.core::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-color);
}

.arch-card.database::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--secondary-blue);
}

.arch-card.communication::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--success-color);
}

.arch-card .card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.arch-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.arch-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.arch-card li {
  padding: 0.4rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.arch-card strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* 项目结构 */
.structure-section {
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.structure-tree {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.tree-node {
  margin: 0.5rem 0;
}

.tree-node .node-children {
  margin-left: 1.5rem;
  border-left: 1px dashed var(--border-color);
  padding-left: 1rem;
}

.folder-icon {
  color: var(--primary-color);
  margin-right: 0.5rem;
}

.file-icon {
  color: var(--secondary-blue);
  margin-right: 0.5rem;
}

.node-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 0.5rem;
}

.node-desc {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-style: italic;
}

.structure-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  box-shadow: 0 4px 16px rgba(255, 125, 69, 0.1);
  border-color: var(--primary-light);
}

.highlight-card h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.highlight-card p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .structure-section {
    grid-template-columns: 1fr;
  }
  
  .tech-badges {
    justify-content: center;
  }
  
  .architecture-grid {
    grid-template-columns: 1fr;
  }
}
</style> 