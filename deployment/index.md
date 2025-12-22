# 部署指南

海狸IM系统的完整部署指南，支持Docker和Docker Compose部署方式。

## <img src="/image/deployment/target.svg" alt="部署架构" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">部署架构

海狸IM采用微服务架构，支持容器化部署，主要包含以下组件：

<div class="beaver-grid cols-2">
  <div class="beaver-card primary">
    <h4><img src="/image/deployment/server.svg" alt="服务器环境" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">服务器环境</h4>
    <p>基础环境搭建</p>
    <ul>
      <li>Docker & Docker Compose</li>
      <li>MySQL 数据库</li>
      <li>Redis 缓存</li>
      <li>Nginx 代理</li>
      <li>ETCD 配置中心</li>
    </ul>
  </div>

  <div class="beaver-card secondary">
    <h4><img src="/image/deployment/wrench.svg" alt="后端服务" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">后端服务</h4>
    <p>微服务部署</p>
    <ul>
      <li>Auth API 认证服务</li>
      <li>Chat API 聊天服务</li>
      <li>User API 用户服务</li>
      <li>File API 文件服务</li>
    </ul>
  </div>
</div>

## <img src="/image/deployment/folder.svg" alt="部署目录结构" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">部署目录结构

```
/mnt/
├── docker/           # 基础服务配置 (/mnt/docker)
│   ├── docker-compose.yml    # 基础服务编排
│   ├── nginx/               # Nginx 配置
│   ├── mysql/               # MySQL 配置
│   ├── redis/               # Redis 数据
│   └── etcd/                # ETCD 数据
└── beaver/           # 后端服务配置 (/mnt/beaver)
    ├── auth_api/            # 认证服务
    ├── chat_api/            # 聊天服务
    ├── user_api/            # 用户服务
    └── file_api/            # 文件服务
```

## <img src="/image/deployment/wrench.svg" alt="部署要求" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">部署要求

### 系统要求
- **操作系统**: CentOS 7.6+
- **架构**: x86_64
- **内存**: 最低 2GB，推荐 2GB+
- **存储**: 最低 50GB，推荐 200GB+
- **网络**: 公网IP + 域名
