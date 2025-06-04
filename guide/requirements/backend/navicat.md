# Navicat 安装教程

## 📥 下载安装

### 试用版安装
1. 访问：https://navicat.com.cn/
2. 下载 Navicat Premium 试用版
3. 运行安装包完成安装
4. 试用期为30天

### 其他选择
- **免费替代品**: DBeaver, HeidiSQL
- **在线工具**: phpMyAdmin, Adminer

## ✅ 验证安装

1. 启动 Navicat
2. 点击"连接" → "MySQL"
3. 填写连接信息：
   - 主机：localhost
   - 端口：3306
   - 用户名：root
   - 密码：123456（Docker默认）
4. 点击"测试连接"

## ⚙️ 基本使用

1. **连接数据库**：配置MySQL连接
2. **创建数据库**：右键新建数据库
3. **查看表结构**：双击表名查看
4. **执行SQL**：使用查询编辑器

## 🎯 下一步

<a href="../redis-manager" class="beaver-button">安装 Redis管理工具 →</a>

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