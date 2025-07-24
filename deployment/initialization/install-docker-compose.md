# CentOS 7 安装 Docker Compose

## 安装步骤

### 1. 下载 Docker Compose

这个命令会下载最新版本的 Docker Compose 并保存到 `/usr/local/bin/docker-compose`。

```bash
sudo curl -L "https://repo.huaweicloud.com/docker/compose/releases/download/v2.24.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### 2. 赋予执行权限

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. 验证安装

安装完成后，可以运行以下命令来验证 Docker Compose 是否成功安装：

```bash
docker-compose --version
``` 