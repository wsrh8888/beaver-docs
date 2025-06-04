# 后端开发软件

Go语言后端开发所需的核心软件和工具。

## 🛠️ 必备软件列表

<div class="software-grid">
  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/golang.png" alt="Golang Logo" />
    </div>
    <h3>Golang</h3>
    <div class="software-info">
      <span class="version">版本要求: 1.19+</span>
      <span class="status required">必需</span>
    </div>
    <p>后端服务开发语言，高性能编译型语言</p>
    <a href="./backend/golang" class="install-link">📖 安装教程</a>
  </div>

  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/docker.png" alt="Docker Logo" />
    </div>
    <h3>Docker Desktop</h3>
    <div class="software-info">
      <span class="version">版本要求: 最新版</span>
      <span class="status required">必需</span>
    </div>
    <p>容器化平台，用于运行MySQL、Redis等数据库服务</p>
    <a href="./backend/docker" class="install-link">📖 安装教程</a>
  </div>

  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/navicat.png" alt="Navicat Logo" />
    </div>
    <h3>Navicat</h3>
    <div class="software-info">
      <span class="version">版本要求: 15+</span>
      <span class="status optional">推荐</span>
    </div>
    <p>MySQL数据库可视化管理工具</p>
    <a href="./backend/navicat" class="install-link">📖 安装教程</a>
  </div>

  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/redis.png" alt="Redis Logo" />
    </div>
    <h3>Another Redis Desktop Manager</h3>
    <div class="software-info">
      <span class="version">版本要求: 最新版</span>
      <span class="status optional">推荐</span>
    </div>
    <p>Redis数据库可视化管理工具</p>
    <a href="./backend/redis-manager" class="install-link">📖 安装教程</a>
  </div>

  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/etcd.png" alt="Etcd Logo" />
    </div>
    <h3>Etcd Workbench</h3>
    <div class="software-info">
      <span class="version">版本要求: 最新版</span>
      <span class="status optional">推荐</span>
    </div>
    <p>Etcd分布式键值存储可视化管理工具</p>
    <a href="./backend/etcd-workbench" class="install-link">📖 安装教程</a>
  </div>
</div>

## 📋 安装说明

<div class="beaver-card">
  <h4>🚀 推荐安装顺序</h4>
  <ol>
    <li><strong>第一步：</strong>安装 Golang - 后端开发基础环境</li>
    <li><strong>第二步：</strong>安装 Docker Desktop - 数据库容器环境</li>
    <li><strong>第三步：</strong>安装 Navicat - MySQL管理工具</li>
    <li><strong>第四步：</strong>安装 Another Redis Desktop Manager - Redis可视化工具</li>
    <li><strong>第五步：</strong>安装 Etcd Workbench - Etcd可视化工具</li>
  </ol>
</div>

<style>
.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.software-item {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.software-item:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(255, 125, 69, 0.1);
  transform: translateY(-2px);
}

.software-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.software-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.software-item h3 {
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.software-item p {
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.software-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.version {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
}

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status.required {
  background: #FF5252;
  color: white;
}

.status.optional {
  background: #4CAF50;
  color: white;
}

.install-link {
  background: var(--vp-c-brand-1);
  color: #FFFFFF !important;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(255, 125, 69, 0.2);
}

.install-link:hover {
  background: var(--vp-c-brand-2);
  color: #FFFFFF !important;
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 125, 69, 0.3);
}

.beaver-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.beaver-card h4 {
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.beaver-card ol {
  margin: 0;
  padding-left: 1.5rem;
}

.beaver-card li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.checklist {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checklist label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.checklist label:hover {
  background: var(--vp-c-bg-soft);
}

.checklist input[type="checkbox"] {
  margin: 0;
}

@media (max-width: 768px) {
  .software-grid {
    grid-template-columns: 1fr;
  }
  
  .software-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style> 