# 构建脚本



## all.sh 主构建脚本

```bash
#!/bin/bash

# 定义模块列表
modules=(
    # ==================== RPC 服务 ====================
    "user_rpc"
    "group_rpc"
    "friend_rpc"
    "chat_rpc"
    "file_rpc"
    "dictionary_rpc"
    
    # ==================== API 服务 ====================
    "auth_api"
    "chat_api"
    "dictionary_api"
    "feedback_api"
    "file_api"
    "friend_api"
    "group_api"
    "moment_api"
    "user_api"
    "ws_api"
    "gateway_api"
)

# 在当前路径执行 docker build
docker build -t beaver_server .

# 并发构建函数
build_module() {
    local module_name="$1"
    echo "🚀 开始构建: $module_name"
    ./build/build.sh "$module_name"
    if [ $? -eq 0 ]; then
        echo "<img src="/image/backend/check.svg" alt="成功" style="width: 16px; height: 16px; display: inline-block;"> 打包镜像成功: $module_name"
    else
        echo "<img src="/image/backend/error.svg" alt="失败" style="width: 16px; height: 16px; display: inline-block;"> 打包镜像失败: $module_name"
    fi
    echo "----------------------------------------"
}

# 并发构建，限制最大并发数为4
max_jobs=4
current_jobs=0

for module_name in "${modules[@]}"; do
    # 如果当前并发数达到上限，等待一个任务完成
    while [ $current_jobs -ge $max_jobs ]; do
        wait -n
        current_jobs=$((current_jobs - 1))
    done
    
    # 启动后台任务
    build_module "$module_name" &
    current_jobs=$((current_jobs + 1))
done

# 等待所有后台任务完成
wait

echo "<img src="/image/backend/celebration.svg" alt="完成" style="width: 16px; height: 16px; display: inline-block;"> 所有模块构建完成！"

```

## build.sh 单个模块构建脚本

```bash
#!/bin/bash

# 配置变量
REGISTRY_URL="wsrh8888"
VERSION="1.2.0"

# 函数：获取Docker镜像的Id
get_image_id() {
    docker images -q $1 | head -n1
}

# 检查是否传入了参数
if [ -z "$1" ];then
    echo "Usage: $0 module_name"
    exit 1
fi

# 获取参数
module_name="$1"

# 跳转到目标目录
cd deploy/"$module_name" || {
    echo "Error: Directory deploy/$module_name not found"
    exit 1
}

# 构建镜像
echo "Building image: $module_name"
docker build -t "$module_name" .
if [ $? -ne 0 ]; then
    echo "Error: Failed to build the image"
    exit 1
fi

# 获取镜像Id
image_id=$(get_image_id "$module_name")

# 检查获取到的image_id是否为空
if [ -z "$image_id" ];then
    echo "Error: Failed to retrieve the image Id"
    exit 1
fi

# 打标签并推送镜像
docker tag "$image_id" "$REGISTRY_URL/$module_name:$VERSION"
if [ $? -ne 0 ]; then
    echo "Error: Failed to tag the image"
    exit 1
fi

# 推送镜像，带重试机制
max_retries=3
retry_count=0

while [ $retry_count -lt $max_retries ]; do
    echo "Pushing image to registry (attempt $((retry_count + 1))/$max_retries)..."
    docker push "$REGISTRY_URL/$module_name:$VERSION"
    
    if [ $? -eq 0 ]; then
        echo "Successfully pushed the image"
        break
    else
        retry_count=$((retry_count + 1))
        if [ $retry_count -lt $max_retries ]; then
            echo "Push failed, retrying in 5 seconds..."
            sleep 5
        else
            echo "Error: Failed to push the image to registry after $max_retries attempts"
            exit 1
        fi
    fi
done

echo "Successfully built, tagged, and pushed the image: $module_name:$VERSION"
```

## 需要修改的内容

只需要修改脚本开头的两个变量：

### 1. REGISTRY_URL
修改为你的镜像仓库地址：

#### 使用Docker Hub（推荐）
```bash
REGISTRY_URL="你的Docker用户名"
```

#### 查看你的Docker用户名
1. 登录 [Docker Hub](https://hub.docker.com/)
2. 点击右上角头像
3. 选择 **My Profile**
4. 在个人页面可以看到你的用户名

![Docker Hub镜像列表](/server_dev_build/docker-user.png)



### 2. VERSION
每次打包时修改版本号：
```bash
VERSION="1.2.0"
```

这样每次打包时只需要修改 `VERSION` 变量即可。 


## 执行命令

打包所有模块：

```bash
./build/all.sh
```
