# Etcd Workbench 安装教程

Etcd Workbench 是一个开源的 Etcd 可视化管理工具，提供友好的 Web 界面来管理 Etcd 集群。

## <img src="/image/guide/clipboard.svg" alt="软件信息" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">软件信息

- **软件名称**: Etcd Workbench
- **开发者**: 开源社区
- **官网**: https://github.com/gtamas/etcdmanager
- **授权**: 开源免费
- **支持平台**: Windows / macOS / Linux

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

### Windows 安装

1. **GitHub下载**
   ```
   访问: https://github.com/gtamas/etcdmanager/releases
   下载最新版本的 Windows 安装包
   ```

2. **运行安装程序**
   - 双击下载的安装包
   - 按照向导完成安装

### macOS 安装

```bash
# 使用 Homebrew 安装
brew install etcdmanager

# 或从 GitHub 下载 dmg 文件安装
```

### Linux 安装

```bash
# Ubuntu/Debian
wget https://github.com/gtamas/etcdmanager/releases/download/v1.0.0/etcdmanager_1.0.0_amd64.deb
sudo dpkg -i etcdmanager_1.0.0_amd64.deb

# CentOS/RHEL
wget https://github.com/gtamas/etcdmanager/releases/download/v1.0.0/etcdmanager-1.0.0-1.x86_64.rpm
sudo rpm -ivh etcdmanager-1.0.0-1.x86_64.rpm
```

## <img src="/image/guide/settings.svg" alt="配置连接" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置连接

1. **启动 Etcd Workbench**
   - Windows: 开始菜单 → Etcd Workbench
   - macOS/Linux: 终端运行 `etcdmanager`

2. **配置 Etcd 连接**
   ```
   Host: localhost
   Port: 2379
   Username: (如有认证)
   Password: (如有认证)
   ```

3. **测试连接**
   - 点击 "Test Connection" 按钮
   - 确认连接成功

## <img src="/image/guide/wrench.svg" alt="基本使用" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">基本使用

### 浏览键值对
- 在左侧树形结构中浏览 keys
- 点击 key 查看对应的 value
- 支持搜索和过滤功能

### 管理数据
- **添加**: 右键 → Add Key
- **编辑**: 双击 key 或 value 进行编辑
- **删除**: 选中 key → 右键 → Delete

### 监控集群
- 查看集群状态和健康度
- 监控连接数和性能指标
- 查看日志和事件

## <img src="/image/guide/check.svg" alt="验证安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证安装

打开 Etcd Workbench，尝试连接到本地 Etcd 实例：

```bash
# 如果没有 Etcd，可以使用 Docker 快速启动
docker run -d \
  --name etcd \
  -p 2379:2379 \
  -p 2380:2380 \
  quay.io/coreos/etcd:latest \
  etcd \
  --name etcd0 \
  --data-dir /etcd-data \
  --listen-client-urls http://0.0.0.0:2379 \
  --advertise-client-urls http://0.0.0.0:2379 \
  --listen-peer-urls http://0.0.0.0:2380 \
  --initial-advertise-peer-urls http://0.0.0.0:2380 \
  --initial-cluster etcd0=http://0.0.0.0:2380 \
  --initial-cluster-token etcd-cluster-1 \
  --initial-cluster-state new \
  --auto-compaction-retention 1
```

 