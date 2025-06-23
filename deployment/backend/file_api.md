# 文件服务部署

File API 是海狸IM系统的文件管理服务，负责文件上传、下载和存储管理。

## 🎯 服务概述

File API 提供以下核心功能：
- 文件上传和下载
- 图片处理和压缩
- 文件存储管理
- CDN集成
- 文件权限控制

## 📋 前置要求

- 完成[服务器初始化](../server/initialization.md)
- 完成[基础服务部署](../server/deployment.md)
- MySQL、Redis、ETCD 服务正常运行

## 🚀 部署步骤

### 1. 创建部署目录

```bash
# 创建文件服务目录
mkdir -p /mnt/beaver/file_api
cd /mnt/beaver/file_api
```

### 2. 创建 Docker Compose 文件

创建 `docker-compose.yml` 文件：

```yaml
version: '3.9'
services:
  file_api:
    image: registry.cn-hangzhou.aliyuncs.com/beaver_im/file_api:1.0.0
    container_name: file_api
    environment:
      - ETCD_SERVER=http://10.0.20.7:1900
    ports:
      - "21303:21303"
    volumes:
      - /etc/localtime:/etc/localtime:ro
    deploy:
      restart_policy:
        condition: any
    network_mode: "host"
    pull_policy: always
```

> **注意**: `10.0.20.7` 为服务器内网地址，请根据实际情况替换为您服务器的内网IP地址。

### 3. 启动服务

```bash
# 拉取最新镜像
docker-compose pull

# 启动服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

### 4. 验证部署

```bash
# 检查容器状态
docker ps | grep file_api

# 检查端口监听
netstat -tlnp | grep :21303

# 测试健康检查
curl http://localhost:21303/health

# 检查服务日志
docker logs file_api
```

## 🔧 配置详解

### 环境变量说明

| 变量名 | 说明 | 值 |
|--------|------|-----|
| `ETCD_SERVER` | ETCD服务器地址 | `http://10.0.20.7:1900` |

> **注意**: `10.0.20.7` 为服务器内网地址，请根据实际情况替换为您服务器的内网IP地址。

### 网络配置

使用 `network_mode: "host"` 的原因：
- 减少网络开销
- 提高性能
- 简化服务间通信
- 避免端口映射问题

### 数据卷挂载

```yaml
volumes:
  - /etc/localtime:/etc/localtime:ro  # 时区同步
```