# 📁 文档处理 · 推广文章目录

本目录用于存放海狸IM（Beaver IM）的对外推广文章，主要发布渠道为 **CSDN**。

文章均基于 **官方更新公告**（`@全体成员 海狸IM2.ini`）、`beaver-docs` 文档与 `public/screenshots/` 下的真实产品截图撰写；
配图使用相对路径引用，**发布到 CSDN 前，请将图片上传至 CSDN 图床，并把正文中的本地相对路径替换为 CSDN 返回的 URL。**

📌 图片替换速查见本文末尾「CSDN 图片替换速查」：每个端下列出图片与对应 URL，左侧为图片文件名、右侧填 CSDN 链接。

> 📌 登录能力统一表述为 **OAuth 授权码登录 + 移动端扫码确认**（由 beaver-oauth 统一授权页与开放平台支撑）。**不要使用 `auto2` 一词**——作者已确认它并非该功能的名称。

---

## 文章清单

| 序号 | 文件名 | 标题 | 角度 | 状态 |
|------|--------|------|------|------|
| 01 | [01-海狸IM-2.0-发布与功能总览.md](./01-海狸IM-2.0-发布与功能总览.md) | 🦫 海狸IM 2.1 正式发布：一个全平台开源即时通讯平台（私聊 / 群聊 / 音视频 / 朋友圈 / 好友 / 圈子 / 工作台） | 发布 + 功能总览（基于官方更新公告，仅桌面端截图） | ✅ 已完成 |
| 02 | [02-深度体验海狸IM-2.0.md](./02-深度体验海狸IM-2.0.md) | 深度体验海狸IM 2.1：从一个人聊天，到把沟通、社交、办公装进一个应用 | 深度体验 / 场景向（作者本人日常使用体感，不虚构团队规模） | ✅ 已完成 |

---

## 事实依据（已核对，非杜撰）

- **版本号**：统一为 2.1（桌面端 v2.1.0，移动端 / 管理后台 / 开放平台 / OAuth / 服务端 均为 v2.1.1；与官方更新公告对应）。
- **登录**：密码登录、扫码登录；OAuth 授权码登录（beaver-oauth 统一授权页）+ 移动端扫码确认；多端登录设备管理（在线状态 / 踢下线）。
- **聊天**：富文本、引用回复、合并转发、Markdown、语音播放；群通知机器人（Webhook）；群详情 / 安全设置。
- **音视频**：基于 LiveKit，私聊 / 群聊，移动端来电横幅。
- **朋友圈**：独立窗口、发布互动、通知红点实时同步。
- **好友 / 群组**：加好友、建群、群成员管理、入群申请。
- **圈子**：社区 / 兴趣组模块（发帖、评论、二维码 / 链接 / 名片分享）。
- **工作台**：桌面端应用中心，可嵌入 Web 应用（截图示例：百度）。
- **管理后台**：运营工作台、用户 360、连接监控、消息审计、内容安全、开放生态、版本发布、资源管理。
- **开放平台 / OAuth**：开发者门户、应用配置、机器人（智能机器人 + Webhook）、事件订阅、安全设置。
- **技术栈**：后端 Go + go-zero；实时通信 WebSocket；多端 Electron / Flutter / Vue3；MIT 开源、私有化部署。

---

## 后续可补充的文章方向（待写）

- 《海狸IM 2.1 私有化部署从零到一》（部署实战）
- 《beaver-oauth 与开放平台接入：第三方应用授权登录原理》（技术深挖）
- 《用圈子做团队私域社区：运营 SOP》（运营向）
- 《海狸IM vs 某商业 IM：选型对比》（对比测评）

---

> 目录维护说明：新增文章后，请按 `01 / 02 / 03 …` 顺序命名并追加一行到"文章清单"表格，同步更新上方"事实依据"。

---

### 一、桌面端（desktop）· 共 44 张

**用户认证**

| 图片 | URL 地址 |
|------|----------|
| 登录-密码登录.png | https://i-blog.csdnimg.cn/direct/3229c1fc62ee4677af072ce113afe407.png |
| 登录-扫码登录.png | https://i-blog.csdnimg.cn/direct/5f82e082310a4966bc14d3142cd3f185.png |

**聊天**

| 图片 | URL 地址 |
|------|----------|
| 聊天-消息主界面.png | https://i-blog.csdnimg.cn/direct/ec0198547eb94c0cb24806a41818ea5f.png |
| 聊天-语音.png | https://i-blog.csdnimg.cn/direct/5ad664804b9f4160b358f9052006cc97.png |
| 聊天-Markdown消息.png | https://i-blog.csdnimg.cn/direct/db12a6d34b714ad5af60dde619169369.png |
| 聊天-图片预览.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 聊天-视频预览.png | https://i-blog.csdnimg.cn/direct/57a84935a454487b9c4dbce602e9b07c.png |
| 聊天-私聊详情.png | https://i-blog.csdnimg.cn/direct/2a944fe2788240fabb6ed3f26d36a5b7.png |
| 表情-表情商店.png | https://i-blog.csdnimg.cn/direct/2bfcd38217cf4a15aeeae2237774ead2.png |
| 表情-表情收藏.png | https://i-blog.csdnimg.cn/direct/82a8d5a80a6844308b41d120abe6324a.png |
| 聊天-消息转发.png | https://i-blog.csdnimg.cn/direct/3ab2e4f286124a96b6974a2f75175479.png |
| 聊天-消息回复.png | https://i-blog.csdnimg.cn/direct/252d013a424146548360b7f71f4f8277.png |
| 聊天-多选消息.png | https://i-blog.csdnimg.cn/direct/4da4dc8c93c14373a8b80c2b4b6b59d0.png |
| 聊天-音视频通话.png | https://i-blog.csdnimg.cn/direct/cea6807635bd432e89b2d84c0c693689.png |

**群**

| 图片 | URL 地址 |
|------|----------|
| 群聊-创建群聊.png | https://i-blog.csdnimg.cn/direct/24c463de406943bba9315285482d5e90.png |
| 群助手-列表.png | https://i-blog.csdnimg.cn/direct/05a858eb13de4750bf5cfe063f0280a9.png |
| 群助手-添加群助手.png | https://i-blog.csdnimg.cn/direct/71096df0cb544f7f952417b43755eb3a.png |
| 群聊-分享.png | https://i-blog.csdnimg.cn/direct/38502b09447f4fadbd1e34470675a5f4.png |
| 群聊-分享-链接.png | https://i-blog.csdnimg.cn/direct/49aa93c0f2a14e188b7cebcb77ec5e2d.png |
| 群聊-群聊详情.png | https://i-blog.csdnimg.cn/direct/062e2de32dae4ebb8fa9b88f3a58cd58.png |

**好友**

| 图片 | URL 地址 |
|------|----------|
| 好友-好友申请.png | https://i-blog.csdnimg.cn/direct/47d4049f60904787a0c03bf6d4a17f9e.png |
| 好友-好友列表.png | https://i-blog.csdnimg.cn/direct/c405c9fcb6ff40a1bee1d0dad36e7ea4.png |
| 好友-好友详情.png | https://i-blog.csdnimg.cn/direct/5cba0604dfca41448c7ef7354bd15598.png |

**朋友圈**

| 图片 | URL 地址 |
|------|----------|
| 朋友圈-主页.png | https://i-blog.csdnimg.cn/direct/787fa2c5ae82444f9f0f9798aeabcd89.png |
| 朋友圈-发布朋友圈.png | https://i-blog.csdnimg.cn/direct/06b4ff95575c4845a7089806b9eab13f.png |
| 朋友圈-详情内容.png | https://i-blog.csdnimg.cn/direct/203f15f3c2c34bcfbd793685aaf0c310.png |
| 朋友圈-点赞.png | https://i-blog.csdnimg.cn/direct/21d1bcab11ce4b0cab4f6039bd42a7e4.png |
| 朋友圈-评论.png | https://i-blog.csdnimg.cn/direct/38da2377c3de4e9fbbc393c44e91d101.png |

**圈子**

| 图片 | URL 地址 |
|------|----------|
| 圈子模块.png | https://i-blog.csdnimg.cn/direct/7637fc896c7e438091f06ab18804d76f.png |
| 创建圈子.png | https://i-blog.csdnimg.cn/direct/2553bc4d5e2849fbbb4d8896c0075917.png |
| 圈子发布帖子.png | https://i-blog.csdnimg.cn/direct/1920a41ef1e6456ab2cdc711bf450574.png |
| 圈子帖子详情.png | https://i-blog.csdnimg.cn/direct/5f69c1d739ff4092bfa416bfe653a6bb.png |
| 最近会话-圈子详情.png | https://i-blog.csdnimg.cn/direct/9177b9e0d3a4483295b89b5dc16a8268.png |
| 圈子-分享.png | https://i-blog.csdnimg.cn/direct/a78175117a504b6aaa9b73845f5e0d9d.png |
| 圈子分享-名片.png | https://i-blog.csdnimg.cn/direct/8f054b42139f4294859133573d6e4935.png |
| 圈子二维码添加.png | https://i-blog.csdnimg.cn/direct/adb174f0b65d4d7d8749635af3555733.png |

**工作台**

| 图片 | URL 地址 |
|------|----------|
| 工作台.png | https://i-blog.csdnimg.cn/direct/38ee1c9beef64b3193d00d45ca909979.png |
| 工作台-百度.png | https://i-blog.csdnimg.cn/direct/2e765f62ae424fc9915c83b71363aa0c.png |

**个人中心**

| 图片 | URL 地址 |
|------|----------|
| 个人中心-编辑个人资料.jpg | https://i-blog.csdnimg.cn/direct/948e4f45e5394184b06d68446d30bab3.jpeg |

**系统功能**

| 图片 | URL 地址 |
|------|----------|
| 系统-关于页面.png | https://i-blog.csdnimg.cn/direct/ca26d9e93ead4895bc129f9ccc768651.png |
| 系统-开源致谢.png | https://i-blog.csdnimg.cn/direct/353e726999e749669e547e14ae2c47dd.png |
| 设置-检查更新.png | https://i-blog.csdnimg.cn/direct/84b42ce21d1143a281a2107bf69cb7ee.png |
| 设置-快捷键.png | hhttps://i-blog.csdnimg.cn/direct/7befcd0517344ca2b5bb7bceeb844ef8.png |
| 设置-账号与存储.png | https://i-blog.csdnimg.cn/direct/b7e8b7970cb04f019dc3e91d42395740.png |

### 二、Flutter 端（跨平台移动端）· 共 23 张

**用户认证**

| 图片 | URL 地址 |
|------|----------|
| 账号-登录.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 账号- 找回密码.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**聊天**

| 图片 | URL 地址 |
|------|----------|
| 消息.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 会话-语言.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 聊天-markdown.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 聊天-图片预览.jpg | https://i-blog.csdnimg.cn/direct/76a6d09f6c4a465e9bc3732dfce495e8.png |
| 私聊-设置.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 表情-商店.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**好友**

| 图片 | URL 地址 |
|------|----------|
| 朋友.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 好友-新的朋友.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 好友-详情.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 添加朋友.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 搜索好友.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 扫码.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**群**

| 图片 | URL 地址 |
|------|----------|
| 群聊-发起群聊.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 群聊-列表.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 群聊-群聊设置.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**朋友圈**

| 图片 | URL 地址 |
|------|----------|
| 朋友圈-详情.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 朋友圈-回复.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**个人中心**

| 图片 | URL 地址 |
|------|----------|
| 我的.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 我的-二维码.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**系统功能**

| 图片 | URL 地址 |
|------|----------|
| 基础-通用设置.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 升级.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

### 三、管理端（manager）· 共 10 张

**运营工作台**

| 图片 | URL 地址 |
|------|----------|
| 工作台.png | https://i-blog.csdnimg.cn/direct/adac0282ef0c44098c0bb6a7676c81a8.png |

**用户管理**

| 图片 | URL 地址 |
|------|----------|
| 用户管理-用户列表.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 用户管理-用户360.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**版本发布**

| 图片 | URL 地址 |
|------|----------|
| 版本发布-版本管理.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 版本管理.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**数据**

| 图片 | URL 地址 |
|------|----------|
| 日志模块.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**资源管理**

| 图片 | URL 地址 |
|------|----------|
| 文件存储-文件列表.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| 表情包-表情包合理.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**产品与开放**

| 图片 | URL 地址 |
|------|----------|
| 产品与开放- 开发者.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**系统**

| 图片 | URL 地址 |
|------|----------|
| 连接监控.png | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

### 四、移动端（mobile，原生）· 共 27 张

**用户认证**

| 图片 | URL 地址 |
|------|----------|
| login.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| register.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| find-password.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**聊天功能**

| 图片 | URL 地址 |
|------|----------|
| message.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| private-chat.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| group-chat.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| send-text.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| send-emoji.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| chat-details.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**群聊管理**

| 图片 | URL 地址 |
|------|----------|
| group-list.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| create-group.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| group-details.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| add-members.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**好友管理**

| 图片 | URL 地址 |
|------|----------|
| new-friends.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| friend.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| friend-info.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| edit-remark.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**朋友圈**

| 图片 | URL 地址 |
|------|----------|
| moments.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| send-moments.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**个人中心**

| 图片 | URL 地址 |
|------|----------|
| profile-edit.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| mine.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |

**系统功能**

| 图片 | URL 地址 |
|------|----------|
| settings.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| qcode.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| update.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| about.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| feedback.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
| statement.jpg | https://img-blog.csdnimg.cn/把CSDN给的整条链接粘到这里 |
