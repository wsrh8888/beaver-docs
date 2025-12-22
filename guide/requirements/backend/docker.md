# Docker Desktop 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

1. 访问：https://www.docker.com/products/docker-desktop/
2. 下载 Docker Desktop for Windows
3. 双击安装包，选择使用 WSL2
4. 安装完成后重启电脑

## <img src="/image/guide/check.svg" alt="验证安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证安装

打开终端，输入：
```bash
docker --version
```
应该显示：`Docker version 24.x.x`

验证docker-compose：
```bash
docker-compose --version
```
应该显示：`Docker Compose version v2.x.x`

## <img src="/image/guide/settings.svg" alt="配置国内镜像源" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置国内镜像源

为了加速Docker镜像下载，建议配置国内镜像源：

1. 打开 Docker Desktop
2. 点击右上角设置图标（<img src="/image/guide/settings.svg" alt="设置" style="width: 16px; height: 16px; display: inline-block;">）
3. 选择 "Docker Engine"
4. 在配置文件中添加或修改以下内容：

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "https://hub.geekery.cn",
    "https://dockerpull.com",
    "https://docker.xuanyuan.me",
    "https://docker.m.daocloud.io",
    "https://docker.unsee.tech",
    "https://docker.1panel.live",
    "http://mirrors.ustc.edu.cn",
    "https://docker.chenby.cn",
    "http://mirror.azure.cn",
    "https://dockerpull.org",
    "https://dockerhub.icu",
    "https://hub.rat.dev",
    "http://hub-mirror.c.163.com",
    "https://registry.docker-cn.com"
  ]
}
```

5. 点击 "Apply & Restart" 重启Docker

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