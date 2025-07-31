# 开发流程

## 1. 下载代码

```bash
git clone https://github.com/wsrh8888/beaver-server.git
cd beaver-server
```

## 2. 安装依赖

```bash
go mod tidy
```

## 3. 启动服务

### 启动顺序

服务启动必须按照以下顺序进行：

1. **RPC服务** - 先启动所有RPC服务
2. **API服务** - 再启动所有API服务

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

在VSCode中运行任务来启动API服务：

![启动API服务](/backend/start-api.png)

### 手动启动命令

```bash
# 启动RPC服务
go run app/user/user_rpc/userrpc.go -f app/user/user_rpc/etc/userrpc.yaml
go run app/auth/auth_rpc/authrpc.go -f app/auth/auth_rpc/etc/authrpc.yaml

# 启动API服务
go run app/user/user_api/user.go -f app/user/user_api/etc/user.yaml
go run app/auth/auth_api/auth.go -f app/auth/auth_api/etc/auth.yaml
``` 