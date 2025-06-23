# 认证服务部署

Auth API 是海狸IM系统的认证服务，负责用户登录、注册和权限管理。

## 🎯 服务概述

Auth API 提供以下核心功能：
- 用户注册和登录
- JWT Token 生成和验证
- 用户权限管理
- 会话状态管理
- 密码加密和验证

## 📋 前置要求

- 完成[服务器初始化](../server/initialization.md)
- 完成[基础服务部署](../server/deployment.md)
- MySQL、Redis、ETCD 服务正常运行

## 🚀 部署步骤

### 1. 创建部署目录

```bash
# 创建认证服务目录
mkdir -p /mnt/beaver/auth_api
cd /mnt/beaver/auth_api
```

### 2. 创建 Docker Compose 文件

创建 `docker-compose.yml` 文件：

```yaml
version: '3.9'
services:
  auth_api:
    image: registry.cn-hangzhou.aliyuncs.com/beaver_im/auth_api:1.0.0
    container_name: auth_api
    environment:
      - ETCD_SERVER=http://10.0.20.7:1900
    ports:
      - "21301:21301"
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
docker ps | grep auth_api

# 检查端口监听
netstat -tlnp | grep :21301

# 测试健康检查
curl http://localhost:21301/health

# 检查服务日志
docker logs auth_api
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

## 📊 监控和维护

### 健康检查

```bash
# 检查服务健康状态
curl http://localhost:21301/health

# 检查详细状态
curl http://localhost:21301/status
```

### 日志管理

```bash
# 查看实时日志
docker logs -f auth_api

# 查看最近100行日志
docker logs --tail 100 auth_api

# 查看错误日志
docker logs auth_api 2>&1 | grep ERROR

# 查看认证相关日志
docker logs auth_api 2>&1 | grep -i "login\|register\|auth"
```

### 性能监控

```bash
# 查看容器资源使用
docker stats auth_api

# 查看进程信息
docker exec auth_api ps aux

# 查看内存使用
docker exec auth_api free -h
```

## 🔄 服务更新

### 更新镜像

```bash
# 拉取最新镜像
docker-compose pull

# 重启服务
docker-compose up -d

# 验证更新
docker-compose ps
curl http://localhost:21301/health
```

### 回滚版本

```bash
# 停止当前服务
docker-compose down

# 使用指定版本启动
docker-compose up -d auth_api:1.0.0

# 验证回滚
docker-compose ps
```

## 🔒 安全配置

### 网络安全

```bash
# 检查防火墙规则
sudo ufw status

# 确保只开放必要端口
sudo ufw allow 21301/tcp
```

## 🆘 故障排查

### 服务启动失败

```bash
# 检查端口占用
sudo netstat -tlnp | grep :21301

# 检查配置文件语法
docker-compose config

# 查看详细错误日志
docker-compose logs auth_api
```

### 连接问题

```bash
# 检查ETCD连接
docker exec auth_api curl http://10.0.20.7:1900/health

# 检查网络连接
docker exec auth_api ping 10.0.20.7
```

> **注意**: `10.0.20.7` 为服务器内网地址，请根据实际情况替换为您服务器的内网IP地址。

### 认证问题

```bash
# 检查ETCD配置
docker exec auth_api env | grep ETCD_SERVER

# 测试用户注册
curl -X POST http://localhost:21301/api/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test123","email":"test@example.com"}'
```

## 📋 部署检查清单

- [ ] 部署目录创建完成
- [ ] Docker Compose 文件配置正确
- [ ] 镜像拉取成功
- [ ] 服务启动成功
- [ ] 端口监听正常
- [ ] 健康检查通过
- [ ] 日志输出正常
- [ ] ETCD连接正常

## 🚀 下一步

完成认证服务部署后，可以继续进行：

- [聊天服务部署](./chat_api.md)
- [用户服务部署](./user_api.md)
- [文件服务部署](./file_api.md)

## 📞 技术支持

如果遇到问题，请检查：
- [故障排查指南](../troubleshooting.md)
- [日志分析](../logs.md)
- [性能优化](../optimization.md) 