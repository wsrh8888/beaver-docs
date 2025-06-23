# 基础服务部署

使用Docker Compose部署海狸IM系统的基础服务，包括MySQL、Redis、Nginx和ETCD。

## 🎯 概述

基础服务是海狸IM系统的核心依赖，包括：
- **MySQL**: 主数据库，存储用户数据、聊天记录等
- **Redis**: 缓存服务，存储会话信息、临时数据等
- **Nginx**: 反向代理，处理HTTP请求和负载均衡
- **ETCD**: 配置中心，存储服务配置和发现信息

## 📋 前置要求

- 完成[服务器初始化](./initialization.md)
- Docker和Docker Compose已安装
- 相关目录已创建

## 🚀 部署步骤

### 1. 创建Docker Compose文件

在 `/mnt/docker` 目录下创建 `docker-compose.yml` 文件：

```yaml
version: '2.2'
services:
    redis:
      image: redis:4
      container_name: redis
      command: redis-server --appendonly yes --requirepass "123456" # 自己配置自己的密码
      ports:
        - "18991:6379"
      volumes:
        - /mnt/docker/redis:/data

    mysql:
        image: mysql:5.7.31
        container_name: mysql
        restart: always
        ports:
            - '1800:3306'
        privileged: true
        environment:
              MYSQL_ROOT_PASSWORD: "123456"  # 自己配置自己的密码
              TZ: "Asia/Shanghai" # 设置时区环境变量

        command: [
            '--character-set-server=utf8mb4',
            '--collation-server=utf8mb4_general_ci',
            '--max_connections=3000',
        ]
        volumes:
             - /mnt/docker/mysql/data:/var/lib/mysql
             - /mnt/docker/mysql/my.cnf:/etc/mysql/my.cnf
             - /mnt/docker/mysql/log:/var/log/mysql
             - /etc/localtime:/etc/localtime:ro # 挂载本地时区文件至容器

    nginx:
        image: nginx
        container_name: nginx
        restart: always
        user: root
        ports:
            - '80:80'
            - '443:443'
        volumes:
            - /mnt/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf
            - /mnt/docker/nginx/conf.d:/etc/nginx/conf.d
            - /mnt/docker/nginx/ssl:/etc/nginx/ssl
            - /etc/localtime:/etc/localtime:ro
            - /mnt/docker/nginx/html:/etc/nginx/html
            - '/mnt/static:/mnt/static'
            - '/mnt/h5:/mnt/h5'
        depends_on:
            - mysql

    etcd:
        image: bitnami/etcd:3.5.12
        container_name: etcd
        ports:
            - "2379:2379"
            - "2380:2380"
        environment:
            - ALLOW_NONE_AUTHENTICATION=yes                  
            - ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379      # 向所有接口上监听客户端请求
            - ETCD_ADVERTISE_CLIENT_URLS=http://xxx:2379,http://xxxx:2379  # xxx替换为自己的内外围地址
        volumes:
            - /mnt/docker/etcd:/etcd-data
        networks:
            - beaver_network

networks:
    beaver_network:
        driver: bridge
```

### 2. 启动基础服务

```bash
# 进入部署目录
cd /mnt/docker

# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看服务日志
docker-compose logs -f
```

### 3. 验证服务状态

```bash
# 检查容器状态
docker ps

# 测试MySQL连接
docker exec -it mysql mysql -uroot -p123456 -e "SELECT VERSION();"

# 测试Redis连接
docker exec -it redis redis-cli -a 123456 ping

# 测试ETCD连接
docker exec -it etcd etcdctl endpoint health

# 测试Nginx
curl http://localhost/health
```

## 📊 监控和维护

### 查看服务状态

```bash
# 查看所有容器状态
docker-compose ps

# 查看特定服务日志
docker-compose logs mysql
docker-compose logs redis
docker-compose logs nginx
docker-compose logs etcd

# 实时查看日志
docker-compose logs -f
```

### 服务管理

```bash
# 重启服务
docker-compose restart mysql
docker-compose restart redis
docker-compose restart nginx
docker-compose restart etcd

# 停止服务
docker-compose stop

# 启动服务
docker-compose start

# 重新构建并启动
docker-compose up -d --build
```

## 🔒 安全配置

### 修改默认密码

```bash
# 修改MySQL root密码
docker exec -it mysql mysql -uroot -p123456 -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';"

# 修改Redis密码
# 需要修改docker-compose.yml中的密码并重启服务
```

### 防火墙配置

确保只开放必要端口：

```bash
# 检查防火墙状态
sudo ufw status

# 只开放必要端口
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 1800/tcp  # MySQL
sudo ufw allow 18991/tcp # Redis
sudo ufw allow 2379/tcp  # ETCD
```

## ✅ 部署完成检查

完成基础服务部署后，请检查以下项目：

- [ ] MySQL服务正常运行
- [ ] Redis服务正常运行
- [ ] Nginx服务正常运行
- [ ] ETCD服务正常运行
- [ ] 所有端口可正常访问
- [ ] 数据库连接正常
- [ ] 缓存服务正常
- [ ] 反向代理配置正确

## 🚀 下一步

完成基础服务部署后，可以继续进行：

- [后端服务部署](../backend/overview.md) - 部署微服务

## 🆘 常见问题

### 端口冲突
```bash
# 检查端口占用
sudo netstat -tlnp | grep :1800
sudo netstat -tlnp | grep :18991

# 修改docker-compose.yml中的端口映射
```

### 权限问题
```bash
# 修复目录权限
sudo chown -R $USER:$USER /mnt/docker
sudo chmod -R 755 /mnt/docker
```

### 服务启动失败
```bash
# 查看详细错误信息
docker-compose logs [service_name]

# 检查配置文件语法
docker-compose config
``` 