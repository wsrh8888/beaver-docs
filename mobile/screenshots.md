# 移动端界面展示

> 当前仅展示已上传的部分界面截图，更多功能界面将持续补充完善。

## 📱 应用截图

### 用户认证
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/login.jpg" alt="登录" />
    <p>登录</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/register.jpg" alt="创建账号" />
    <p>创建账号</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/find-password.jpg" alt="找回密码" />
    <p>找回密码</p>
  </div>
</div>

### 聊天功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/message.jpg" alt="消息主界面" />
    <p>消息主界面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/private-chat.jpg" alt="私聊聊天内容" />
    <p>私聊聊天内容</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/group-chat.jpg" alt="群聊聊天内容" />
    <p>群聊聊天内容</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/send-text.jpg" alt="发送文字" />
    <p>发送文字</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/send-emoji.jpg" alt="发送表情" />
    <p>发送表情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/chat-details.jpg" alt="聊天详情" />
    <p>聊天详情</p>
  </div>
</div>

### 群聊管理
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/group-list.jpg" alt="群聊列表" />
    <p>群聊列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/create-group.jpg" alt="创建群聊" />
    <p>创建群聊</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/group-details.jpg" alt="群聊详情" />
    <p>群聊详情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/add-members.jpg" alt="添加群成员" />
    <p>添加群成员</p>
  </div>
</div>

### 好友管理
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/new-friends.jpg" alt="新的朋友列表" />
    <p>新的朋友列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/friend.jpg" alt="好友列表" />
    <p>好友列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/friend-info.jpg" alt="好友资料" />
    <p>好友资料</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/edit-remark.jpg" alt="编辑好友备注" />
    <p>编辑好友备注</p>
  </div>
</div>

### 朋友圈
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/moments.jpg" alt="朋友圈页面" />
    <p>朋友圈页面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/send-moments.jpg" alt="发布朋友圈页面" />
    <p>发布朋友圈页面</p>
  </div>
</div>

### 个人中心
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/profile-edit.jpg" alt="编辑个人资料" />
    <p>编辑个人资料</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/mine.jpg" alt="我的主界面" />
    <p>我的主界面</p>
  </div>
</div>

### 系统功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/mobile/settings.jpg" alt="通用设置" />
    <p>通用设置</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/qcode.jpg" alt="二维码功能" />
    <p>二维码功能</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/update.jpg" alt="更新页面" />
    <p>更新页面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/about.jpg" alt="关于页面" />
    <p>关于页面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/feedback.jpg" alt="意见反馈" />
    <p>意见反馈</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/mobile/statement.jpg" alt="项目声明" />
    <p>项目声明</p>
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