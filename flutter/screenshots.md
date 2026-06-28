# Flutter 界面展示

> 这里展示了 Beaver Flutter 移动端的核心界面和主要功能点。

## <img src="/image/mobile/mobile.svg" alt="应用截图" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">应用截图

### 用户认证
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/账号-登录.jpg" alt="登录" />
    <p>登录</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/账号- 找回密码.jpg" alt="找回密码" />
    <p>找回密码</p>
  </div>
</div>

### 消息与聊天功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/消息.jpg" alt="消息主界面" />
    <p>消息主界面</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/会话-语言.jpg" alt="语音会话" />
    <p>语音会话</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/聊天-markdown.jpg" alt="Markdown 消息" />
    <p>Markdown 消息</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/聊天-图片预览.jpg" alt="图片预览" />
    <p>图片预览</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/私聊-设置.jpg" alt="私聊设置" />
    <p>私聊设置</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/表情-商店.jpg" alt="表情商店" />
    <p>表情商店</p>
  </div>
</div>

### 好友管理
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/朋友.jpg" alt="好友列表" />
    <p>好友列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/好友-详情.jpg" alt="好友详情" />
    <p>好友详情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/好友-新的朋友.jpg" alt="新的朋友" />
    <p>新的朋友</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/添加朋友.jpg" alt="添加朋友" />
    <p>添加朋友</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/搜索好友.jpg" alt="搜索好友" />
    <p>搜索好友</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/扫码.jpg" alt="扫码" />
    <p>扫码</p>
  </div>
</div>

### 群聊功能
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/群聊-发起群聊.jpg" alt="发起群聊" />
    <p>发起群聊</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/群聊-列表.jpg" alt="群聊列表" />
    <p>群聊列表</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/群聊-群聊设置.jpg" alt="群聊设置" />
    <p>群聊设置</p>
  </div>
</div>

### 朋友圈
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/朋友圈-详情.jpg" alt="动态详情" />
    <p>动态详情</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/朋友圈-回复.jpg" alt="评论回复" />
    <p>评论回复</p>
  </div>
</div>

### 个人中心与设置
<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/screenshots/flutter/我的.jpg" alt="个人中心" />
    <p>个人中心</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/我的-二维码.jpg" alt="我的二维码" />
    <p>我的二维码</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/基础-通用设置.jpg" alt="通用设置" />
    <p>通用设置</p>
  </div>
  <div class="screenshot-item">
    <img src="/screenshots/flutter/升级.jpg" alt="检查更新" />
    <p>检查更新</p>
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
