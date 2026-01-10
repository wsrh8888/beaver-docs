# 桌面端界面展示

> 当前仅展示已上传的部分界面截图，更多功能界面将持续补充完善。

## <img src="/image/desktop/desktop.svg" alt="应用截图" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">应用截图

### 用户认证
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/desktop/login.jpg" alt="登录" />
    <p>登录</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/find-password.jpg" alt="找回密码" />
    <p>找回密码</p>
  </div>
</div>

### 聊天功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/desktop/message.png" alt="消息主界面" />
    <p>消息主界面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/private-detail.png" alt="私聊聊天内容" />
    <p>私聊聊天内容</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/group-detail.png" alt="群聊聊天内容" />
    <p>群聊聊天内容</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/image.png" alt="图片预览" />
    <p>图片预览</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/video.png" alt="视频预览" />
    <p>视频预览</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/emoji-store.png" alt="表情商店" />
    <p>表情商店</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/emoji-favorites.png" alt="表情收藏列表" />
    <p>表情收藏列表</p>
  </div>
</div>

### 好友管理
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/desktop/friend-list.png" alt="好友列表" />
    <p>好友列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/friend-detail.png" alt="好友详情" />
    <p>好友详情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/friend-verify.png" alt="好友验证" />
    <p>好友验证</p>
  </div>
</div>

### 群组功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/desktop/create-group.png" alt="创建群聊" />
    <p>创建群聊</p>
  </div>
</div>

### 系统功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/desktop/profile-edit.jpg" alt="编辑个人资料" />
    <p>编辑个人资料</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/update.png" alt="应用更新" />
    <p>应用更新</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/desktop/about.png" alt="关于页面" />
    <p>关于页面</p>
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