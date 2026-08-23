<!--
  Copyright (c) 2024-2026 Beaver IM Team
  SPDX-License-Identifier: MIT
  Project: beaver-docs
  https://github.com/wsrh8888/beaver-docs

  中文：
  本文件为海狸 IM（Beaver IM）开源项目源代码。
  版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
  禁止删除、篡改或替换本文件头部版权与许可声明。
  使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html

  English:
  This file is part of the Beaver IM open-source project.
  Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
  Do not remove, alter, or replace this copyright and license header.
  Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html

  beaver-docs-header-v1
-->

# 部署指南

将海狸IM部署到生产环境的完整指南，支持Docker和传统部署方式。

## 🎯 部署方式选择

<div class="beaver-grid cols-2">
  <div class="beaver-card primary">
    <h4>🐳 Docker 部署</h4>
    <p><span class="beaver-badge primary">推荐</span></p>
    <ul>
      <li>一键部署，环境隔离</li>
      <li>支持容器编排</li>
      <li>便于扩展和维护</li>
      <li>适合大部分场景</li>
    </ul>
  </div>

  <div class="beaver-card secondary">
    <h4>📦 传统部署</h4>
    <p><span class="beaver-badge outline">备选</span></p>
    <ul>
      <li>直接安装到系统</li>
      <li>性能相对更好</li>
      <li>配置相对复杂</li>
      <li>适合高性能场景</li>
    </ul>
  </div>
</div>

## <img src="/image/guide/server.svg" alt="服务器要求" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">服务器要求

### 最低配置

<div class="beaver-card">
  <div class="beaver-grid cols-2">
    <div>
      <h5>硬件要求</h5>
      <ul>
        <li><strong>CPU：</strong>2核心 2.4GHz+</li>
        <li><strong>内存：</strong>2GB RAM</li>
        <li><strong>存储：</strong>50GB SSD</li>
        <li><strong>网络：</strong>10Mbps+</li>
      </ul>
    </div>
    <div>
      <h5>系统要求</h5>
      <ul>
        <li><strong>操作系统：</strong>Ubuntu 20.04+ LTS</li>
        <li><strong>架构：</strong>x86_64</li>
        <li><strong>权限：</strong>sudo 权限</li>
        <li><strong>网络：</strong>公网IP + 域名</li>
      </ul>
    </div>
  </div>
</div>

### 推荐配置（100-1000用户）

<div class="beaver-card">
  <div class="beaver-grid cols-2">
    <div>
      <h5>生产环境</h5>
      <ul>
        <li><strong>CPU：</strong>4核心 3.0GHz+</li>
        <li><strong>内存：</strong>8GB+ RAM</li>
        <li><strong>存储：</strong>200GB+ SSD</li>
        <li><strong>网络：</strong>100Mbps+ 专线</li>
      </ul>
    </div>
    <div>
      <h5>高可用环境</h5>
      <ul>
        <li><strong>CPU：</strong>8核心+ 高频</li>
        <li><strong>内存：</strong>16GB+ RAM</li>
        <li><strong>存储：</strong>500GB+ NVMe SSD</li>
        <li><strong>网络：</strong>千兆专线 + CDN</li>
      </ul>
    </div>
  </div>
</div>

## 🐳 Docker 部署（推荐）

### 第一步：服务器准备

<div class="beaver-card">

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装必要工具
sudo apt install -y curl wget vim

# 安装 Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# 安装 Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 重新登录以生效
exit
```

</div>

### 第二步：创建部署目录

<div class="beaver-card">

```bash
# 创建部署目录
mkdir -p /opt/beaver-im && cd /opt/beaver-im

# 创建必要目录
mkdir -p {nginx,ssl,logs,data}
```

</div>

### 第三步：配置 Docker Compose

<div class="beaver-card">

**创建 `docker-compose.yml`：**

```yaml
version: '3.8'

services:
  # MySQL 数据库
  mysql:
    image: mysql:8.0
    container_name: beaver-mysql
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: beaver_im
      MYSQL_USER: beaver_user
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql
      - ./sql:/docker-entrypoint-initdb.d
    networks:
      - beaver-net
    command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  # Redis 缓存
  redis:
    image: redis:7-alpine
    container_name: beaver-redis
    restart: unless-stopped
    command: redis-server --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis_data:/data
    networks:
      - beaver-net

  # 后端服务
  backend:
    image: beaver/server:latest
    container_name: beaver-backend
    restart: unless-stopped
    depends_on:
      - mysql
      - redis
    environment:
      - DB_HOST=mysql
      - DB_PASSWORD=${MYSQL_PASSWORD}
      - REDIS_HOST=redis
      - REDIS_PASSWORD=${REDIS_PASSWORD}
      - JWT_SECRET=${JWT_SECRET}
    networks:
      - beaver-net
    volumes:
      - ./logs:/app/logs

  # Nginx 代理
  nginx:
    image: nginx:alpine
    container_name: beaver-nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
      - ./static:/usr/share/nginx/html
    depends_on:
      - backend
    networks:
      - beaver-net

volumes:
  mysql_data:
  redis_data:

networks:
  beaver-net:
    driver: bridge
```

</div>

### 第四步：配置环境变量

<div class="beaver-card">

**创建 `.env` 文件：**

```env
# 数据库密码
MYSQL_ROOT_PASSWORD=your_strong_root_password
MYSQL_PASSWORD=your_strong_password

# Redis密码
REDIS_PASSWORD=your_redis_password

# JWT密钥
JWT_SECRET=your_jwt_secret_key

# 域名配置
DOMAIN=your-domain.com
```

</div>

### 第五步：配置 Nginx

<div class="beaver-card">

**创建 `nginx/nginx.conf`：**

```nginx
events {
    worker_connections 1024;
}

http {
    upstream backend {
        server backend:8888;
    }

    server {
        listen 80;
        server_name your-domain.com;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name your-domain.com;

        ssl_certificate /etc/nginx/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/ssl/privkey.pem;
        
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
        ssl_prefer_server_ciphers off;

        location /api/ {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /ws {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
        }

        location / {
            root /usr/share/nginx/html;
            try_files $uri $uri/ /index.html;
        }
    }
}
```

</div>

### 第六步：SSL 证书配置

<div class="beaver-card">

```bash
# 安装 Certbot
sudo apt install certbot

# 获取证书
sudo certbot certonly --standalone -d your-domain.com

# 复制证书到项目目录
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ./nginx/ssl/
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ./nginx/ssl/
sudo chown $USER:$USER ./nginx/ssl/*

# 设置自动续期
echo "0 2 * * * /usr/bin/certbot renew --quiet && docker-compose restart nginx" | sudo crontab -
```

</div>

### 第七步：启动部署

<div class="beaver-card">

```bash
# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f backend

# 等待服务启动完成（约1-2分钟）
```

</div>

## 📊 监控和维护

### 服务监控

<div class="beaver-card">

```bash
# 查看容器状态
docker-compose ps

# 查看系统资源
docker stats

# 查看服务日志
docker-compose logs -f [service_name]

# 重启服务
docker-compose restart [service_name]
```

</div>

### 数据备份

<div class="beaver-card">

**创建备份脚本 `backup.sh`：**

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup"

mkdir -p $BACKUP_DIR

# 数据库备份
docker-compose exec -T mysql mysqldump -u root -p${MYSQL_ROOT_PASSWORD} beaver_im > $BACKUP_DIR/db_$DATE.sql

# Redis备份
docker-compose exec redis redis-cli --rdb /data/backup.rdb
docker cp beaver-redis:/data/backup.rdb $BACKUP_DIR/redis_$DATE.rdb

# 压缩备份
tar -czf $BACKUP_DIR/beaver_backup_$DATE.tar.gz $BACKUP_DIR/db_$DATE.sql $BACKUP_DIR/redis_$DATE.rdb

# 清理旧备份（保留7天）
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $BACKUP_DIR/beaver_backup_$DATE.tar.gz"
```

**设置定时备份：**

```bash
chmod +x backup.sh
echo "0 2 * * * /opt/beaver-im/backup.sh" | crontab -
```

</div>

## 🚨 故障排除

<div class="beaver-card">

### 常见问题解决

**服务无法启动：**

```bash
# 检查端口占用
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443

# 检查防火墙
sudo ufw status
sudo ufw allow 80,443/tcp
```

**数据库连接失败：**

```bash
# 检查数据库容器
docker-compose logs mysql

# 进入数据库容器
docker-compose exec mysql mysql -u root -p
```

**SSL证书问题：**

```bash
# 检查证书有效期
openssl x509 -in ./nginx/ssl/fullchain.pem -noout -dates

# 手动续期证书
sudo certbot renew
docker-compose restart nginx
```

</div>

## 🔄 更新升级

<div class="beaver-card">

```bash
# 备份数据
./backup.sh

# 拉取最新镜像
docker-compose pull

# 重启服务
docker-compose down
docker-compose up -d

# 验证更新
docker-compose ps
curl -I https://your-domain.com/api/health
```

</div>

---

<div style="text-align: center; margin-top: 2rem; padding: 2rem; background: var(--beaver-bg-secondary); border-radius: 12px;">
  <h3>🎉 部署完成！</h3>
  <p>您的海狸IM系统已成功部署到生产环境</p>
  
  <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap;">
    <a href="../backend/" class="beaver-button primary">后端开发</a>
    <a href="../mobile/" class="beaver-button secondary">移动端开发</a>
    <a href="../desktop/" class="beaver-button secondary">桌面端开发</a>
    <a href="../api/" class="beaver-button outline">API文档</a>
  </div>
</div> 