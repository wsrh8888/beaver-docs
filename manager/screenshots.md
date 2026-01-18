# 后台管理系统界面展示

> 当前展示后台管理系统的核心功能界面截图。

## <img src="/image/manager/update.svg" alt="版本管理" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">版本管理

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/version-list.png" alt="版本列表" />
    <p>版本列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/architecture-management.png" alt="架构管理" />
    <p>架构管理</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/app-management.png" alt="应用管理" />
    <p>应用管理</p>
  </div>
</div>

## <img src="/image/manager/emoji.svg" alt="表情包管理" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">表情包管理

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/emoji-collections.png" alt="表情包合集管理" />
    <p>表情包合集管理</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/emoji-management.png" alt="表情包管理" />
    <p>表情包管理</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/emoji-list.png" alt="表情列表" />
    <p>表情列表</p>
  </div>
</div>

<style>
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.screenshot-item {
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background: var(--vp-c-bg);
}

.screenshot-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.screenshot-item img {
  width: 100%;
  height: auto;
  display: block;
}

.screenshot-item p {
  margin: 10px 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

@media (max-width: 768px) {
  .screenshots-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  .screenshot-item p {
    font-size: 12px;
  }
}
</style>