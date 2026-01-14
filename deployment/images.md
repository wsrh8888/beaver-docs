# Docker镜像地址

## <img src="/image/deployment/package.svg" alt="镜像仓库信息" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">镜像仓库信息

海狸IM的所有Docker镜像都托管在 [Docker Hub](https://hub.docker.com/u/wsrh8888) 上，由 `wsrh8888` 用户维护。

## <img src="/image/deployment/whale.svg" alt="镜像列表" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">镜像列表

### API服务镜像 (HTTP接口)

| 序号 | 镜像名称 | 镜像地址 | 版本 | 用途说明 |
|------|----------|----------|------|----------|
| 1 | auth_api | `wsrh8888/auth_api` | 1.1.0 | 认证授权API服务，处理用户身份验证 |
| 2 | user_api | `wsrh8888/user_api` | 1.1.0 | 用户管理API服务，处理用户注册、登录等 |
| 3 | file_api | `wsrh8888/file_api` | 1.1.0 | 文件管理API服务，处理文件上传下载 |
| 4 | friend_api | `wsrh8888/friend_api` | 1.1.0 | 好友管理API服务，处理好友关系操作 |
| 5 | chat_api | `wsrh8888/chat_api` | 1.1.0 | 聊天API服务，处理消息收发功能 |
| 6 | ws_api | `wsrh8888/ws_api` | 1.1.0 | WebSocket API服务，处理实时通信连接 |
| 7 | group_api | `wsrh8888/group_api` | 1.1.0 | 群组管理API服务，处理群组相关操作 |
| 8 | gateway_api | `wsrh8888/gateway_api` | 1.1.0 | API网关服务，统一入口和路由管理 |
| 9 | emoji_api | `wsrh8888/emoji_api` | 1.1.0 | 表情管理API服务，处理表情相关操作 |
| 10 | moment_api | `wsrh8888/moment_api` | 1.1.0 | 朋友圈API服务，处理动态发布和互动 |
| 11 | dictionary_api | `wsrh8888/dictionary_api` | 1.1.0 | 字典数据API服务，提供系统配置数据 |
| 12 | track_api | `wsrh8888/track_api` | 1.1.0 | 轨迹跟踪API服务，处理用户行为追踪 |
| 13 | update_api | `wsrh8888/update_api` | 1.1.0 | 更新管理API服务，处理版本更新相关 |
| 14 | datasync_api | `wsrh8888/datasync_api` | 1.1.0 | 数据同步API服务，处理数据同步功能 |
| 15 | notification_api | `wsrh8888/notification_api` | 1.1.0 | 通知管理API服务，处理消息通知功能 |

### RPC服务镜像 (内部通信)

| 序号 | 镜像名称 | 镜像地址 | 版本 | 用途说明 |
|------|----------|----------|------|----------|
| 1 | user_rpc | `wsrh8888/user_rpc` | 1.1.0 | 用户管理RPC服务，内部用户处理服务 |
| 2 | group_rpc | `wsrh8888/group_rpc` | 1.1.0 | 群组管理RPC服务，内部群组处理服务 |
| 3 | friend_rpc | `wsrh8888/friend_rpc` | 1.1.0 | 好友管理RPC服务，内部好友关系服务 |
| 4 | chat_rpc | `wsrh8888/chat_rpc` | 1.1.0 | 聊天RPC服务，内部消息处理服务 |
| 5 | file_rpc | `wsrh8888/file_rpc` | 1.1.0 | 文件管理RPC服务，内部文件处理服务 |
| 6 | dictionary_rpc | `wsrh8888/dictionary_rpc` | 1.1.0 | 字典数据RPC服务，内部数据配置服务 |
| 7 | emoji_rpc | `wsrh8888/emoji_rpc` | 1.1.0 | 表情管理RPC服务，内部表情处理服务 |
| 8 | notification_rpc | `wsrh8888/notification_rpc` | 1.1.0 | 通知管理RPC服务，内部通知处理服务 |

### Admin服务镜像 (管理后台)

| 序号 | 镜像名称 | 镜像地址 | 版本 | 用途说明 |
|------|----------|----------|------|----------|
| 1 | gateway_admin | `wsrh8888/gateway_admin` | 1.1.0 | 网关管理后台，提供网关服务管理界面 |
| 2 | backend_admin | `wsrh8888/backend_admin` | 1.1.0 | 后端管理后台，提供系统整体管理界面 |

## <img src="/image/deployment/link.svg" alt="镜像仓库链接" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">镜像仓库链接

> 📦 **[访问Docker Hub镜像仓库](https://hub.docker.com/u/wsrh8888)**

---
