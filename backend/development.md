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

# 初始化etcd、redis、mysql

## Docker Compose配置

### 1. 创建配置文件

在桌面创建 `docker/docker-compose.yml` 文件：

```yaml
version: '3.9'
name: beaver 
services:
  redis:
      image: redis:4
      container_name: redis
      command: redis-server --appendonly yes --requirepass "123456"
      ports:
        - "6379:6379"
      volumes:
        - ./redis:/data
  mysq:
    image: mysql:5.7.31
    container_name: mysql
    restart: always
    ports:
      - '3306:3306'
    privileged: true
    environment:
      MYSQL_ROOT_PASSWORD: "123456"
    command: [ '--character-set-server=utf8mb4', '--collation-server=utf8mb4_general_ci', '--max_connections=3000' ]
    volumes:
      - ./mysql/data:/var/lib/mysql
      - ./mysql/my.cnf:/etc/mysql/my.cnf
      - ./mysql/log:/var/log/mysql
  etcd:
    image: quay.io/coreos/etcd:v3.5.15  # 最新稳定版
    container_name: etcd
    ports:
      - "2379:2379"
      - "2380:2380"
    environment:
      - ALLOW_NONE_AUTHENTICATION=yes
    volumes:
      - ./etcd:/etcd-data  
networks:
  default:
    driver: bridge
```

### 2. 启动服务

```bash
cd ~/Desktop/docker
docker-compose up -d
```

 
