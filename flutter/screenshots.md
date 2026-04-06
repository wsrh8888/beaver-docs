# Flutter 界面展示

> 这里展示了 Beaver Flutter 移动端的核心界面和主要功能点。

## <img src="/image/mobile/mobile.svg" alt="应用截图" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">应用截图

### 消息与聊天功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/messages.jpg" alt="消息主界面" />
    <p>消息主界面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/chat_content.jpg" alt="聊天消息内容" />
    <p>聊天消息内容</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/chat_settings.jpg" alt="聊天设置" />
    <p>聊天设置</p>
  </div>
</div>

### 好友管理
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/friend_list.jpg" alt="好友列表" />
    <p>好友列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/friend_profile.jpg" alt="好友详细资料" />
    <p>好友详细资料</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/new_friend_received.jpg" alt="收到好友申请" />
    <p>收到好友申请</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/new_friend_sent.jpg" alt="发出好友申请" />
    <p>发出好友申请</p>
  </div>
</div>

### 群聊功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/create_group.jpg" alt="发起群聊" />
    <p>发起群聊</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/my_groups.jpg" alt="我的群聊" />
    <p>我的群聊</p>
  </div>
</div>

### 个人中心与设置
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/my_profile.jpg" alt="个人中心 (我的)" />
    <p>个人中心 (我的)</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/general_settings.jpg" alt="通用设置" />
    <p>通用设置</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/feedback.jpg" alt="意见反馈" />
    <p>意见反馈</p>
  </div>
</div>

### 特色功能与系统
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/favorite_emojis.jpg" alt="收藏表情" />
    <p>收藏表情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/default_emojis.jpg" alt="系统默认表情" />
    <p>系统默认表情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/camera.jpg" alt="多媒体拍照" />
    <p>多媒体拍照</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/database.jpg" alt="数据库同步管理" />
    <p>数据库同步管理</p>
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
