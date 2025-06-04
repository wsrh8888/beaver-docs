# Redis管理工具 安装教程

## 📥 下载安装

### Another Redis Desktop Manager（推荐）
1. 访问：https://github.com/qishibo/AnotherRedisDesktopManager/releases
2. 下载最新版本
3. 运行安装包完成安装

### 其他选择
- **RedisInsight**: Redis官方工具
- **Medis**: macOS专用
- **Redis Commander**: 网页版工具

## ✅ 验证安装

1. 启动 Another Redis Desktop Manager
2. 点击"新建连接"
3. 填写连接信息：
   - 主机：localhost
   - 端口：6379
   - 密码：（留空，Docker默认无密码）
4. 点击"测试连接"

## ⚙️ 基本使用

1. **查看数据库**：左侧显示所有数据库
2. **查看键值**：点击数据库查看所有key
3. **编辑数据**：双击key编辑value
4. **执行命令**：使用控制台执行Redis命令

## 🎯 下一步

<a href="../../frontend/nodejs" class="beaver-button">安装 Node.js →</a>

<style>
.beaver-button {
  background: var(--vp-c-brand-1);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.beaver-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
}
</style> 