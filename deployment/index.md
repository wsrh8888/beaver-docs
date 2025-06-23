# 部署指南

海狸IM系统的完整部署指南，支持Docker和Docker Compose部署方式。

## 🎯 部署架构

海狸IM采用微服务架构，支持容器化部署，主要包含以下组件：

<div class="beaver-grid cols-2">
  <div class="beaver-card primary">
    <h4>🖥️ 服务器环境</h4>
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
    <h4>🔧 后端服务</h4>
    <p>微服务部署</p>
    <ul>
      <li>Auth API 认证服务</li>
      <li>Chat API 聊天服务</li>
      <li>User API 用户服务</li>
      <li>File API 文件服务</li>
    </ul>
  </div>
</div>

## 📁 部署目录结构

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

## 🚀 快速开始

### 1. 基础服务部署
- [基础服务部署](./server/deployment.md) - MySQL、Redis、Nginx、ETCD 部署

### 2. 后端服务部署
- [后端服务概述](./backend/overview.md) - 微服务架构说明
- [认证服务部署](./backend/auth_api.md) - Auth API 部署指南
- [聊天服务部署](./backend/chat_api.md) - Chat API 部署指南
- [用户服务部署](./backend/user_api.md) - User API 部署指南
- [文件服务部署](./backend/file_api.md) - File API 部署指南

## 🔧 部署要求

### 系统要求
- **操作系统**: Ubuntu 20.04+ LTS / CentOS 8+
- **架构**: x86_64
- **内存**: 最低 4GB，推荐 8GB+
- **存储**: 最低 50GB，推荐 200GB+
- **网络**: 公网IP + 域名

### 软件要求
- **Docker**: 20.10+
- **Docker Compose**: 2.0+
- **Git**: 最新版本

## 📋 部署检查清单

- [ ] Docker 和 Docker Compose 安装完成
- [ ] 基础服务（MySQL、Redis、Nginx、ETCD）部署完成
- [ ] 后端服务部署完成
- [ ] 域名解析配置完成
- [ ] SSL 证书配置完成
- [ ] 防火墙规则配置完成
- [ ] 监控和日志配置完成

## 🆘 常见问题

- [部署问题排查](./troubleshooting.md) - 常见部署问题解决方案
- [性能优化](./optimization.md) - 系统性能优化建议
- [安全配置](./security.md) - 安全配置指南

## 📞 技术支持

如果在部署过程中遇到问题，请参考：
- [问题排查指南](./troubleshooting.md)
- [社区讨论](https://github.com/wsrh8888/beaver-im/discussions)
- [提交 Issue](https://github.com/wsrh8888/beaver-im/issues) 