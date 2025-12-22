# 公共开发工具

跨平台通用开发工具，支持所有开发环境。

## <img src="/image/guide/clipboard.svg" alt="软件清单" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">软件清单

<div class="software-grid">
  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/vscode.png" alt="Visual Studio Code Logo" />
    </div>
    <h3>Visual Studio Code</h3>
    <p>代码编辑器</p>
    <div class="software-info">
      <span class="version">最新版本</span>
      <span class="status required">必装</span>
    </div>
    <a href="./common/vscode" class="install-btn"><img src="/image/guide/book.svg" alt="安装教程" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px; display: inline-block;">安装教程</a>
  </div>

  <div class="software-item">
    <div class="software-icon">
      <img src="/logos/apifox.png" alt="Apifox Logo" />
    </div>
    <h3>Apifox</h3>
    <p>API接口调试</p>
    <div class="software-info">
      <span class="version">最新版本</span>
      <span class="status recommended">推荐</span>
    </div>
    <a href="./common/apifox" class="install-btn"><img src="/image/guide/book.svg" alt="安装教程" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px; display: inline-block;">安装教程</a>
  </div>
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
  background: #ff4757;
  color: white;
}

.status.recommended {
  background: #ffa726;
  color: white;
}

.install-btn {
  display: inline-block;
  background: var(--vp-c-brand-1);
  color: #FFFFFF !important;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(255, 125, 69, 0.2);
}

.install-btn:hover {
  background: var(--vp-c-brand-2);
  color: #FFFFFF !important;
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 125, 69, 0.3);
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

