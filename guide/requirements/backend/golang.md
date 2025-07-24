# Golang 安装教程

## 📥 下载安装

### Windows 安装
1. 访问：https://golang.org/dl/
2. 下载 `go1.23.8.windows-amd64.msi`
3. 双击安装包，一路下一步
4. 安装完成后重启命令提示符

## ✅ 验证安装

打开终端，输入：
```bash
go version
```
应该显示：`go version go1.23.8`

## ⚙️ 配置代理

```bash
go env -w GOPROXY=https://goproxy.cn,direct
```

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