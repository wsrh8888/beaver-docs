# 开发流程

## <img src="/image/backend/rocket.svg" alt="启动顺序" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">启动顺序

**重要：** 服务启动必须严格按照以下顺序进行：

1. **启动Docker Desktop** - 确保Docker服务正常运行
2. **启动基础设施服务** - 使用docker-compose启动MySQL、Redis、ETCD
3. **启动VSCode** - 打开项目并配置开发环境
4. **启动RPC服务** - 先启动所有RPC服务
5. **启动API服务** - 再启动所有API服务

## 1. 下载代码

```bash
git clone https://github.com/wsrh8888/beaver-server.git
cd beaver-server
```

## 2. 安装依赖

```bash
go mod tidy
```

## 3. 启动基础设施

确保Docker Desktop已启动，然后运行：

```bash
cd ~/Desktop/docker
docker-compose up -d
```

## 4. 启动服务

### 启动RPC服务

#### 步骤1：点击运行任务

在VSCode中点击"运行(R)" → "运行任务..."：

![点击运行任务](/backend/click-run-task.png)

#### 步骤2：选择要运行的任务

在弹出的任务列表中选择"启动RPC服务"：

![选择要运行的任务](/backend/select-rpc-task.png)

#### 步骤3：启动成功

RPC服务启动成功，终端显示运行状态：

![启动成功](/backend/rpc-start-success.png)

### 启动API服务

#### 步骤1：点击运行任务

在VSCode中点击"运行(R)" → "运行任务..."：

![点击运行任务](/backend/click-run-task-api.png)

#### 步骤2：选择要运行的任务

在弹出的任务列表中选择"启动Api全部任务"：

![选择要运行的任务](/backend/select-api-task.png)

#### 步骤3：启动成功

API服务启动成功，终端显示运行状态：

![启动成功](/backend/api-start-success.png)

 