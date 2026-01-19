# 打包部署

## 构建命令

### 第一阶段：生成产物包

```bash
npm run package
```

此命令会执行以下操作：
1. 构建渲染进程代码 (`build-renderer`)
2. 构建主进程代码 (`build-electron`)
3. 生成可执行的桌面应用程序包

### 第二阶段：制作安装包

```bash
npm run package-install
```

此命令会将产物包制作成exe格式的安装程序。

## 构建产物

### 产物包目录结构

执行 `npm run package` 后会在 `release` 目录生成以下文件：

- `win-unpacked/` - 未打包的应用程序目录
  - `beaver.exe` - 主程序文件
  - `resources/` - 资源文件目录
  - 其他依赖文件

### 安装包

执行 `npm run package-install` 后会在 `output` 目录生成：
- `beaver_x.x.x.exe` - Windows安装程序

## 部署说明

1. 首先执行 `npm run package` 生成产物包
2. 然后执行 `npm run package-install` 生成安装包
3. 安装包可分发给最终用户进行安装