# CentOS 7 安装 Docker

## 安装步骤

### 1. 安装必要工具

```bash
yum install -y yum-utils device-mapper-persistent-data lvm2
```



### 2. 安装 Docker

```bash
sudo yum -y install docker-ce docker-ce-cli containerd.io
```

### 3. 启动 Docker 服务

```bash
sudo systemctl start docker
```

### 4. 设置 Docker 开机自启

```bash
sudo systemctl enable docker
```

### 5. 验证安装

```bash
docker -v
```

### 6. 验证 Docker 服务状态

```bash
sudo systemctl status docker
``` 