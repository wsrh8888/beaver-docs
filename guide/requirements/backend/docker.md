# Docker Desktop 安装教程

## 📥 下载安装

### Windows 安装
1. 访问：https://www.docker.com/products/docker-desktop/
2. 下载 Docker Desktop for Windows
3. 双击安装包，选择使用 WSL2
4. 安装完成后重启电脑

### macOS 安装
1. 访问：https://www.docker.com/products/docker-desktop/
2. 下载 Docker Desktop for Mac
3. 双击 `.dmg` 文件安装

## ✅ 验证安装

打开终端，输入：
```bash
docker --version
```
应该显示：`Docker version 24.x.x`

## 🗄️ 启动数据库服务

```bash
# 启动 MySQL
docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0

# 启动 Redis
docker run -d --name redis -p 6379:6379 redis:6.0

# 查看运行状态
docker ps
```

<style>
.beaver-button {
  background: var(--vp-c-brand-1);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.beaver-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
}
</style> 