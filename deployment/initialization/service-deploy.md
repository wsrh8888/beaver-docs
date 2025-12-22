# 服务部署

## <img src="/image/deployment/clipboard.svg" alt="打包前配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">打包前配置

### 1. 查看deploy目录结构

![deploy目录结构截图](/deployment/deploy.png)

### 2. 修改配置

打包前需要修改以下配置：

**镜像地址和版本号：**
- 将所有 `image:` 字段的地址和版本号替换为你的镜像地址
- 可以使用官方镜像 `wsrh8888/` 开头的镜像地址

**ETCD地址：**
- 将 `127.0.0.1:2379` 替换为你的内网地址:2379

**数据库连接：**
- 将 `root:123456@tcp(127.0.0.1:3306)/beaver?charset=utf8mb4&parseTime=True&loc=Local` 中的密码和IP端口替换为你的配置

**Redis配置：**
- 将 `Addr: 127.0.0.1:6379` 替换为你的Redis地址
- 将 `Password: '123456'` 替换为你的Redis密码

## <img src="/image/deployment/rocket.svg" alt="部署步骤" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">部署步骤

### 3. 解压到服务器

```bash
# 解压到指定目录
unzip /tmp/beaver-server.zip -d /mnt/beaver
```

### 4. 启动服务

**注意：需要先启动RPC服务，再启动API服务**

```bash
# 进入beaver目录
cd /mnt/beaver

# 启动RPC服务（需要进入每个RPC服务目录）
cd rpc_services/user_rpc
docker-compose up -d

cd ../group_rpc
docker-compose up -d

cd ../friend_rpc
docker-compose up -d

cd ../chat_rpc
docker-compose up -d

cd ../file_rpc
docker-compose up -d

cd ../dictionary_rpc
docker-compose up -d

# 启动API服务（需要进入每个API服务目录）
cd ../../api_services/auth_api
docker-compose up -d

cd ../chat_api
docker-compose up -d

cd ../dictionary_api
docker-compose up -d

cd ../feedback_api
docker-compose up -d

cd ../file_api
docker-compose up -d

cd ../friend_api
docker-compose up -d

cd ../group_api
docker-compose up -d

cd ../moment_api
docker-compose up -d

cd ../user_api
docker-compose up -d

cd ../ws_api
docker-compose up -d

cd ../gateway_api
docker-compose up -d
```
