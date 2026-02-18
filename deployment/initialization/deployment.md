# 基础服务部署

使用Docker Compose部署海狸IM系统的基础服务，包括MySQL、Redis、ETCD和Nginx。

## <img src="/image/deployment/target.svg" alt="概述" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">概述

基础服务是海狸IM系统的核心依赖，包括：
- **MySQL**: 主数据库，存储用户数据、聊天记录等
- **Redis**: 缓存服务，存储会话信息、临时数据等
- **ETCD**: 配置中心，存储服务配置和发现信息
- **Nginx**: 反向代理，处理HTTP请求和负载均衡

## <img src="/image/deployment/rocket.svg" alt="部署步骤" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">部署步骤

### 1. 创建Docker Compose文件

在 `/mnt/docker` 目录下创建 `docker-compose.yml` 文件：

```yaml
version: '3.9'
services:
    redis:
      image: redis:4
      container_name: redis
      command: redis-server --appendonly yes --requirepass "your_redis_password"
      ports:
        - "6379:6379"
      volumes:
        - ./redis:/data

    mysql:
        image: mysql:5.7.31
        container_name: mysql
        restart: always
        ports:
            - '3306:3306'
        privileged: true
        environment:
            MYSQL_ROOT_PASSWORD: "your_mysql_password"
        command: [ 
            '--character-set-server=utf8mb4', 
            '--collation-server=utf8mb4_general_ci', 
            '--max_connections=3000' 
        ]
        volumes:
            - ./mysql/data:/var/lib/mysql
            - ./mysql/my.cnf:/etc/mysql/my.cnf
            - ./mysql/log:/var/log/mysql

    nginx:
        image: nginx
        container_name: nginx
        restart: always
        user: root
        ports:
            - '80:80'
            - '443:443'
        volumes:
            - ./nginx/conf/nginx.conf:/etc/nginx/nginx.conf
            - ./nginx/conf.d:/etc/nginx/conf.d
            - ./nginx/ssl:/etc/nginx/ssl
            - /etc/localtime:/etc/localtime:ro
            - ./nginx/html:/etc/nginx/html

    etcd:
        image: quay.io/coreos/etcd:v3.5.15  # 最新稳定版
        container_name: etcd
        ports:
            - "2379:2379"
            - "2380:2380"
        environment:
            - ALLOW_NONE_AUTHENTICATION=yes                  
            - ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379      # 向所有接口上监听客户端请求
            - ETCD_ADVERTISE_CLIENT_URLS=http://your_internal_ip:2379,http://your_external_ip:2379  # 替换为你的内外网地址
        volumes:
            - ./etcd:/etcd-data
        networks:
            - beaver_network

networks:
    beaver_network:
        name: beaver_network  # 强制覆盖默认命名
        driver: bridge
```

### <img src="/image/deployment/warning.svg" alt="用户需要修改的配置项" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">用户需要修改的配置项

在部署前，请修改以下配置项：

**Redis**：
- 修改密码：将 `your_redis_password` 替换为你的Redis密码
- 修改端口：将 `"6379:6379"` 中的第一个6379改为你的端口

**MySQL**：
- 修改密码：将 `your_mysql_password` 替换为你的MySQL root密码
- 修改端口：将 `'3306:3306'` 中的第一个3306改为你的端口

**ETCD**：
- 修改地址：将 `your_internal_ip` 和 `your_external_ip` 替换为你的内网和外网IP地址
- 修改端口：不用改

### <img src="/image/deployment/lock.svg" alt="安全建议" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">安全建议

**推荐使用随机密码**：
- 密码生成工具：https://suijimimashengcheng.bmcx.com/
- 建议密码长度：16-32位，包含大小写字母、数字
- 请妥善保存生成的密码，避免泄露

**端口号建议**：
- 避免使用默认端口（3306、6379、2379等），容易被攻击
- 推荐使用5位数字端口（10000-99999）
- 端口号生成工具：https://suijimimashengcheng.bmcx.com/
- 确保选择的端口未被其他服务占用

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

### 3. 检查容器状态

```bash
# 检查容器状态
docker ps
``` 
