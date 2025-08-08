# 数据库初始化

## 📋 查看数据库配置

首先在服务器的 `docker-compose.yml` 文件中查看数据库连接配置：

![初始化数据库](/deployment/mysqlInit.png)

**需要记录的信息：**
- MySQL密码
- MySQL端口
- 服务器的IP地址

## 🗄️ 创建数据库

### 1. 连接数据库

使用 **Navicat Premium Lite 17** 连接线上的MySQL数据库：

1. 打开 Navicat Premium Lite 17
2. 点击 **连接** → **MySQL**

![Navicat连接MySQL](/deployment/mysql-connect.png)

3. 填写连接信息（使用docker-compose.yml中的配置）：
   - **连接名**：beaver（自定义名称）
   - **主机**：你的MySQL服务器IP地址
   - **端口**：docker-compose.yml中配置的MySQL端口
   - **用户名**：root（或你的MySQL用户名）
   - **密码**：docker-compose.yml中配置的MySQL密码

![Navicat连接配置](/deployment/connection-config.png)

4. 点击 **测试连接** 确认连接成功
5. 点击 **确定** 保存连接

### 2. 创建数据库

1. 在连接成功后，右键点击连接名称
2. 选择 **新建数据库**

![Navicat新建数据库](/deployment/navicat-new-database.png)

3. 填写数据库信息：
   - **数据库名**：`beaver`
   - **字符集**：选择 `utf8mb4`（推荐）或 `utf8`
   - **排序规则**：`utf8mb4_bin`（推荐）

![Navicat数据库配置](/deployment/navicat-database-config.png)

4. 点击 **确定** 创建数据库

## 📝 修改服务端代码配置

在服务端代码的 `main.go` 文件中，找到数据库连接配置：

![初始化数据库](/deployment/mysqlInit.png)

**需要修改：**
- 将 `123456` 替换为docker-compose.yml中的MySQL密码
- 将 `127.0.0.1:3306` 替换为你的服务器IP和docker-compose.yml中的MySQL端口
- 确保数据库名称设置为 `beaver`

## 🚀 执行初始化

```bash
go run main.go -db
```

执行成功后显示：`所有表结构生成成功` 