# 获取 AppID

## 创建应用

1. 登录 [beaver-open](https://github.com/wsrh8888/beaver-open) 开放平台门户
2. 完成开发者申请（若开启审核）
3. 创建应用，在应用详情查看 **AppID**、**AppSecret**

**AppSecret 只放在服务端**，不要写入前端或 Jenkins 脚本明文仓库。

## 按场景配置

| 场景 | 门户内配置 |
|------|------------|
| 第三方登录 | OAuth 回调地址、安全域名 |
| 群机器人 | 启用机器人能力 → 创建 Incoming Webhook，绑定目标群 |
| 事件订阅 | 应用事件 Webhook（文档待补充） |
