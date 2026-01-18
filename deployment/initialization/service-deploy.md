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

**注意：**
- 先停止所有服务，再启动服务
- 服务启动顺序：RPC → API → Admin

```bash
# 进入beaver目录
cd /mnt/beaver

# 1. 停止所有服务
./deploy/stop.sh

# 2. 启动所有服务
./deploy/start.sh
```

#### Linux环境使用说明

如果在Linux环境中遇到空格转义问题，可以使用以下命令自动修复脚本：

```bash
# 自动修复start.sh中的转义问题
sed -i 's/\\$/$/g' deploy/start.sh

# 自动修复stop.sh中的转义问题
sed -i 's/\\$/$/g' deploy/stop.sh
```


#### 脚本功能说明

- **stop.sh**: 按 Admin → API → RPC 的顺序停止所有服务，并清理容器和网络
- **start.sh**: 按 RPC → API → Admin 的顺序启动所有服务，支持自动拉取最新镜像

#### 手动操作（可选）

如果需要手动启动特定服务，可以进入对应目录执行：

```bash
# 例如启动用户API服务
cd /mnt/beaver/deploy/user_api
docker-compose up -d

# 例如启动用户RPC服务
cd /mnt/beaver/deploy/user_rpc
docker-compose up -d
```
