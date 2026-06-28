# 后台管理系统界面展示

## 运营工作台

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/工作台.png" alt="运营工作台" />
    <p>运营工作台</p>
  </div>
</div>

## 用户管理

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/用户管理-用户列表.png" alt="用户列表" />
    <p>用户列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/用户管理-用户360.png" alt="用户360" />
    <p>用户360</p>
  </div>
</div>

## 版本发布

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/版本发布-版本管理.png" alt="版本发布" />
    <p>版本发布</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/版本管理.png" alt="版本管理" />
    <p>版本管理</p>
  </div>
</div>

## 数据

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/日志模块.png" alt="客户端日志" />
    <p>客户端日志</p>
  </div>
</div>

## 资源管理

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/文件存储-文件列表.png" alt="文件列表" />
    <p>文件列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/manager/表情包-表情包合理.png" alt="表情包合集" />
    <p>表情包合集</p>
  </div>
</div>

## 产品与开放

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/产品与开放- 开发者.png" alt="开发者" />
    <p>开发者</p>
  </div>
</div>

## 系统

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/manager/连接监控.png" alt="连接监控" />
    <p>连接监控</p>
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
