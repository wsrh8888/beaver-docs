# CentOS 7 安装 Docker

## 安装步骤

### 1. 安装必要工具

```bash
yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 2. 添加 Docker 仓库

```bash
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 3. 安装 Docker

```bash
sudo yum -y install docker-ce docker-ce-cli containerd.io
```

### 4. 启动 Docker 服务

```bash
sudo systemctl start docker
```

### 5. 设置 Docker 开机自启

```bash
sudo systemctl enable docker
```

### 6. 验证安装

```bash
docker -v
```

### 7. 验证 Docker 服务状态

```bash
sudo systemctl status docker
``` 