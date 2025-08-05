# Docker登录

## 1. 登录Docker Desktop

在Docker Desktop中登录：

1. 打开Docker Desktop
2. 点击右上角 **Sign In**
3. 输入Docker Hub用户名和密码

![Docker Desktop登录页面](/server_dev_build/login.png)

## 2. 登录Docker网站

1. 访问 [Docker登录页面](https://login.docker.com/u/login/identifier)
2. **推荐使用GitHub登录**（点击"Continue with GitHub"按钮）
3. 或者输入Docker用户名和密码登录

![Docker登录页面](/server_dev_build/login1.png)

## 3. 获取访问令牌

### 3.1 进入Personal Access Tokens

1. 在Docker Desktop中点击右上角头像
2. 选择 **Account Settings**
3. 在打开的网页中点击 **Personal access tokens**

![Docker Desktop账户菜单](/server_dev_build/docker-account-menu.png)

### 3.2 进入Personal Access Tokens页面

在网页中点击Personal access tokens后，会进入Personal access tokens管理页面。

![Personal Access Tokens页面](/server_dev_build/personal-access-tokens.png)

### 3.3 创建访问令牌

1. 点击 **Create access token**
2. 填写令牌信息：
   - **Name**: `beaver`
   - **Expiration**: 选择 **None**（永不过期）
   - **Permissions**: 选择 **Read, Write, Delete**
3. 点击 **Create** 生成令牌

![创建访问令牌](/server_dev_build/create-token.png)

### 3.4 保存令牌

**重要**：令牌只显示一次，请立即复制保存

![访问令牌生成结果](/server_dev_build/token-result.png)

## 4. 本地Docker登录

### 4.1 打开终端

在项目根目录打开终端或命令行工具。

### 4.2 执行登录命令

```bash
docker login -u your-username
```

将 `your-username` 替换为你的Docker Hub用户名。

### 4.3 输入密码

系统会提示输入密码，这里输入刚才生成的访问令牌（不是Docker Hub密码）。


### 4.4 验证登录成功

如果登录成功，会显示 "Login Succeeded"。

![Docker登录成功](/server_dev_build/docker-login-success.png)



 