# Nginx初始化

## <img src="/image/deployment/clipboard.svg" alt="公共配置 (nginx.conf)" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">公共配置 (nginx.conf)

在 `/mnt/docker/nginx/conf/` 目录下创建 `nginx.conf` 文件，包含公共配置：

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        # 根目录
        root   /etc/nginx/html;
        index  index.html index.htm;

        location / {
            try_files $uri $uri/ =404;
        }
    }

    include /etc/nginx/conf.d/*.conf;
}
```

## <img src="/image/deployment/warning.svg" alt="重要提示" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">重要提示

**请根据你的需求选择以下其中一种配置方式，不要同时使用两种配置！**

## <img src="/image/deployment/clipboard.svg" alt="HTTP版本配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">HTTP版本配置

在 `/mnt/docker/nginx/conf.d/` 目录下创建 `server.conf` 文件：

```nginx
# HTTP版本配置 - 线上环境
server {
    listen 80;
    server_name server.wsrh8888.com;

    # 设置客户端请求体最大大小
    client_max_body_size 2M;

    # 为文件上传设置更长的超时时间
    proxy_read_timeout 300;
    proxy_connect_timeout 300;
    proxy_send_timeout 300;

    location /beaver/api {
        rewrite ^/beaver/(.*)$ /$1 break;

        proxy_pass http://10.0.24.6:20800;  # 代理到宿主机服务
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket 支持 - 必须添加这些头部
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # 正常超时时间
        proxy_read_timeout 300;
        proxy_connect_timeout 30;
        proxy_send_timeout 300;
    }
}
```

### <img src="/image/deployment/wrench.svg" alt="配置后需要修改的内容" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置后需要修改的内容

拿到配置后，请根据你的实际环境修改以下内容：

1. **修改域名**：将 `server.wsrh8888.com` 改为你自己的域名
2. **修改内网IP**：将 `10.0.24.6` 改为你的API服务实际内网IP地址
   - 端口 `20800` 是项目固定端口，无需修改
   - 如果API服务在同一台机器上，可以改为 `127.0.0.1`
   - 如果在其他内网机器上，改为对应的内网IP地址

## <img src="/image/deployment/clipboard.svg" alt="HTTPS版本配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">HTTPS版本配置

在 `/mnt/docker/nginx/conf.d/` 目录下创建 `https.conf` 文件：

```nginx
# HTTPS版本配置 - 线上环境
server {
    listen 80;
    server_name server.wsrh8888.com;
    return 301 https://$host$request_uri;  # HTTP强制跳转HTTPS
}

server {
    listen 443 ssl;
    server_name server.wsrh8888.com;

    ssl_certificate /etc/nginx/ssl/server.wsrh8888.com.pem;  # 证书需覆盖主域名
    ssl_certificate_key /etc/nginx/ssl/server.wsrh8888.com.key;

    # 设置客户端请求体最大大小
    client_max_body_size 2M;

    # 为文件上传设置更长的超时时间
    proxy_read_timeout 300;
    proxy_connect_timeout 300;
    proxy_send_timeout 300;
    
    location /beaver/api {
        rewrite ^/beaver/(.*)$ /$1 break;

        proxy_pass http://10.0.24.6:20800;  # 代理到宿主机服务
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket 支持 - 必须添加这些头部
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # 正常超时时间
        proxy_read_timeout 300;
        proxy_connect_timeout 30;
        proxy_send_timeout 300;
    }
}
```

### <img src="/image/deployment/wrench.svg" alt="配置后需要修改的内容" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置后需要修改的内容

拿到配置后，请根据你的实际环境修改以下内容：

1. **修改域名**：将 `server.wsrh8888.com` 改为你自己的域名
2. **修改内网IP**：将 `10.0.24.6` 改为你的API服务实际内网IP地址
   - 端口 `20800` 是项目固定端口，无需修改
   - 如果API服务在同一台机器上，可以改为 `127.0.0.1`
   - 如果在其他内网机器上，改为对应的内网IP地址
3. **修改SSL证书文件名**：将证书文件名改为对应你的域名
   - `server.wsrh8888.com.pem` → `你的域名.pem`
   - `server.wsrh8888.com.key` → `你的域名.key`

## <img src="/image/deployment/lock.svg" alt="SSL证书配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">SSL证书配置

如果选择HTTPS版本，需要配置SSL证书：

1. 将SSL证书文件放在 `/etc/nginx/ssl/` 目录下
2. 确保证书文件名为：
   - `server.wsrh8888.com.pem` (证书文件)
   - `server.wsrh8888.com.key` (私钥文件)

## <img src="/image/deployment/rocket.svg" alt="重启Nginx" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">重启Nginx

配置完成后重启Nginx服务：

```bash
# 进入docker目录
cd /mnt/docker

# 重启nginx容器
docker-compose restart nginx

# 查看nginx日志
docker-compose logs nginx
```
