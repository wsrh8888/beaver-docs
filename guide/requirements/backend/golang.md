# Golang 安装教程

## <img src="/image/guide/download.svg" alt="下载安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">下载安装

### Windows 安装
1. 访问：https://golang.org/dl/
2. 下载 `go1.23.8.windows-amd64.msi`
3. 双击安装包，一路下一步
4. 安装完成后重启命令提示符

**注意：** 现代Go安装包（1.13+）会自动配置环境变量：
- `GOROOT`: Go安装目录
- `GOPATH`: 默认在 `C:\Users\{username}\go`
- `PATH`: 自动添加Go的bin目录

## <img src="/image/guide/check.svg" alt="验证安装" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">验证安装

打开终端，输入：
```bash
go version
```
应该显示：`go version go1.23.8`

检查环境变量：
```bash
go env GOPATH
go env GOROOT
```

## <img src="/image/guide/settings.svg" alt="配置代理" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">配置代理

```bash
go env -w GOPROXY=https://goproxy.cn,direct
```

## <img src="/image/guide/wrench.svg" alt="VSCode 开发环境配置" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 8px; display: inline-block;">VSCode 开发环境配置

### 安装Go插件
1. 在VSCode中按 `Ctrl+Shift+X`
2. 搜索 "Go" 并安装官方Go插件
3. 重启VSCode

### 安装Go工具链
1. 按 `Ctrl+Shift+P` 打开命令面板
2. 输入 "Go: Install/Update Tools"
3. 选择所有工具并点击确定

**如果安装失败，可以手动安装：**
```bash
go install golang.org/x/tools/gopls@latest
go install github.com/go-delve/delve/cmd/dlv@latest
go install golang.org/x/tools/cmd/goimports@latest
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