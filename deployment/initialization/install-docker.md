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

### 8. 配置国内镜像源（可选）

为了加速Docker镜像下载，建议配置国内镜像源：

```bash
# 创建或编辑Docker配置文件
vi /etc/docker/daemon.json
```

在文件中添加以下内容：

```json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://dockerproxy.com",
    "https://vp5v3vra.mirror.aliyuncs.com",
    "https://docker.registry.cyou",
    "https://docker-cf.registry.cyou",
    "https://dockercf.jsdelivr.fyi",
    "https://docker.jsdelivr.fyi",
    "https://dockertest.jsdelivr.fyi",
    "https://docker.m.daocloud.io",
    "https://docker.nju.edu.cn",
    "https://mirror.iscas.ac.cn"
  ]
}
```

保存文件后，重新加载配置并重启Docker服务：

```bash
systemctl daemon-reload
```

```bash
systemctl restart docker
```