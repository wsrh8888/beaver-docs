# Nginx初始化

## 📋 创建nginx.conf

在 `/mnt/docker/nginx/conf/` 目录下创建 `nginx.conf` 文件：

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

## 📋 创建server.conf

在 `/mnt/docker/nginx/conf.d/` 目录下创建 `server.conf` 文件：

```nginx
# 海狸IM API服务配置
server {
    listen 80;
    server_name localhost;

    # 设置客户端请求体最大大小
    client_max_body_size 2M;

    # 为文件上传设置更长的超时时间
    proxy_read_timeout 300;
    proxy_connect_timeout 300;
    proxy_send_timeout 300;

    location /beaver {
        rewrite ^/beaver/(.*)$ /$1 break;

        proxy_pass http://127.0.0.1:20800;  # 替换为你的API服务地址和端口
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

## 🚀 重启Nginx

配置完成后重启Nginx服务：

```bash
# 进入docker目录
cd /mnt/docker

# 重启nginx容器
docker-compose restart nginx

# 查看nginx日志
docker-compose logs nginx
``` 