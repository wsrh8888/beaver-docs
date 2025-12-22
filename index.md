---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
outline: false
title: 海狸IM - 开源企业级即时通讯系统
titleTemplate: 轻量级、高性能、重安全的IM解决方案

hero:
  name: "海狸IM"
  text: "开源企业级即时通讯系统"
  tagline: 基于 go-zero + uni-app + Electron 构建的现代化IM解决方案
  image:
    src: /logo.png
    alt: 海狸IM Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 在线演示
      link: /demo
    - theme: alt  
      text: GitHub
      link: https://github.com/wsrh8888/beaver-server

features:
  - icon:
      src: /image/home/rocket.svg
      alt: 现代化技术栈
    title: 现代化技术栈
    details: 基于 Go-Zero、Uni-App、Electron 等现代化技术构建，确保系统的高性能和可扩展性。
  - icon:
      src: /image/home/lock.svg
      alt: 私有化部署
    title: 私有化部署
    details: 支持完全私有化部署，所有数据掌握在自己手中，保障企业信息和用户隐私安全。
  - icon: 
      src: /icons/open-source.svg
      alt: 开源
    title: 完全开源
    details: Apache-2.0 开源协议，后端、移动端、桌面端全部开源，可自由使用和商业化
  - icon:
      src: /icons/cross-platform.svg
      alt: 跨平台
    title: 跨平台支持
    details: 一套后端服务，支持 iOS、Android、Windows、macOS、Linux 全平台
    
  - icon:
      src: /icons/microservice.svg
      alt: 微服务
    title: 微服务架构
    details: 基于 go-zero 框架，模块化设计，支持水平扩展和高并发
    
  - icon:
      src: /icons/sync.svg
      alt: 同步
    title: 多端同步
    details: 移动端和桌面端数据实时同步，多设备无缝切换使用体验
---

<div style="text-align: center; margin: 3rem 0; font-size: 1.1rem; color: #333;">
  <h2 style="font-weight: 600; margin-bottom: 1rem;">为什么选择海狸IM作为您的开源IM解决方案？</h2>
  <p>无论您是希望构建企业内部沟通工具，还是为您的应用嵌入聊天功能，海狸IM作为一个彻底的<strong>开源IM</strong>项目，都为您提供了稳定、安全、易于扩展的即时通讯核心。</p>
</div>

## <img src="/image/home/target.svg" alt="产品特色" style="width: 32px; height: 32px; display: inline-block; vertical-align: middle; margin-right: 12px;">产品特色
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon" style="display: flex; justify-content: center; align-items: center;">
      <img src="/image/home/chat-feature.svg" alt="即时通讯" style="width: 48px; height: 48px; display: inline-block;">
    </div>
    <h3 style="text-align: center;">即时通讯</h3>
    <p style="text-align: center;">支持私聊、群聊，文本、图片、文件等多种消息类型</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon" style="display: flex; justify-content: center; align-items: center;">
      <img src="/image/home/users.svg" alt="好友管理" style="width: 48px; height: 48px; display: inline-block;">
    </div>
    <h3 style="text-align: center;">好友管理</h3>
    <p style="text-align: center;">好友添加、删除，个人信息管理，二维码名片</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon" style="display: flex; justify-content: center; align-items: center;">
      <img src="/image/home/cloud.svg" alt="云端存储" style="width: 48px; height: 48px; display: inline-block;">
    </div>
    <h3 style="text-align: center;">云端存储</h3>
    <p style="text-align: center;">集成七牛云存储，支持文件上传和多媒体消息</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon" style="display: flex; justify-content: center; align-items: center;">
      <img src="/image/home/star.svg" alt="高性能" style="width: 48px; height: 48px; display: inline-block;">
    </div>
    <h3 style="text-align: center;">高性能</h3>
    <p style="text-align: center;">Go 语言高并发特性，支持万级用户同时在线</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon" style="display: flex; justify-content: center; align-items: center;">
      <img src="/image/home/security.svg" alt="数据安全" style="width: 48px; height: 48px; display: inline-block;">
    </div>
    <h3 style="text-align: center;">数据安全</h3>
    <p style="text-align: center;">端到端加密传输，支持私有化部署，数据完全可控</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon" style="display: flex; justify-content: center; align-items: center;">
      <img src="/image/home/check.svg" alt="开发友好" style="width: 48px; height: 48px; display: inline-block;">
    </div>
    <h3 style="text-align: center;">开发友好</h3>
    <p style="text-align: center;">完整开发文档，模块化设计，快速二次开发和定制</p>
  </div>
</div>

## <img src="/image/home/tools.svg" alt="技术架构" style="width: 32px; height: 32px; display: inline-block; vertical-align: middle; margin-right: 12px;">技术架构

<div class="tech-overview">
  <div class="arch-grid">
    <div class="arch-card">
      <div class="arch-icon" style="display: flex; justify-content: center; align-items: center;"><img src="/image/home/server.svg" alt="后端服务" style="width: 32px; height: 32px; display: inline-block;"></div>
      <h3 style="text-align: center;">后端服务</h3>
      <p style="text-align: center;">采用Go语言开发，基于go-zero微服务框架，支持高并发处理</p>
      <div class="tech-tags" style="text-align: center;">
        <span class="tech-tag">Go语言</span>
        <span class="tech-tag">go-zero</span>
        <span class="tech-tag">微服务</span>
      </div>
    </div>
    <div class="arch-card">
      <div class="arch-icon" style="display: flex; justify-content: center; align-items: center;"><img src="/image/home/mobile.svg" alt="移动端" style="width: 32px; height: 32px; display: inline-block;"></div>
      <h3 style="text-align: center;">移动端</h3>
      <p style="text-align: center;">基于uni-app开发，支持iOS和Android双平台，一套代码多端运行</p>
      <div class="tech-tags" style="text-align: center;">
        <span class="tech-tag">uni-app</span>
        <span class="tech-tag">Vue3</span>
        <span class="tech-tag">跨平台</span>
      </div>
    </div>
    <div class="arch-card">
      <div class="arch-icon" style="display: flex; justify-content: center; align-items: center;"><img src="/image/home/desktop.svg" alt="桌面端" style="width: 32px; height: 32px; display: inline-block;"></div>
      <h3 style="text-align: center;">桌面端</h3>
      <p style="text-align: center;">使用Electron技术栈，支持Windows、macOS、Linux全平台</p>
      <div class="tech-tags" style="text-align: center;">
        <span class="tech-tag">Electron</span>
        <span class="tech-tag">Vue3</span>
        <span class="tech-tag">TypeScript</span>
      </div>
    </div>
  </div>
</div>

## <img src="/image/home/package.svg" alt="项目仓库" style="width: 32px; height: 32px; display: inline-block; vertical-align: middle; margin-right: 12px;">项目仓库

<div class="repo-grid">
  <div class="repo-card">
    <div class="repo-header" style="display: flex; align-items: center; gap: 12px; justify-content: center;">
      <div class="repo-icon"><img src="/image/home/server.svg" alt="beaver-server" style="width: 24px; height: 24px; display: inline-block;"></div>
      <h3 style="margin: 0;">beaver-server</h3>
    </div>
    <p style="text-align: center;">Go 微服务后端，基于 go-zero 框架</p>
    <div class="repo-links">
      <a href="https://github.com/wsrh8888/beaver-server" target="_blank" class="repo-link github">GitHub</a>
      <a href="https://gitee.com/dawwdadfrf/beaver-server" target="_blank" class="repo-link gitee">Gitee</a>
    </div>
  </div>
  
  <div class="repo-card">
    <div class="repo-header" style="display: flex; align-items: center; gap: 12px; justify-content: center;">
      <div class="repo-icon"><img src="/image/home/mobile.svg" alt="beaver-mobile" style="width: 24px; height: 24px; display: inline-block;"></div>
      <h3 style="margin: 0;">beaver-mobile</h3>
    </div>
    <p style="text-align: center;">uni-app 跨平台移动端应用</p>
    <div class="repo-links">
      <a href="https://github.com/wsrh8888/beaver-mobile" target="_blank" class="repo-link github">GitHub</a>
      <a href="https://gitee.com/dawwdadfrf/beaver-mobile" target="_blank" class="repo-link gitee">Gitee</a>
    </div>
  </div>
  
  <div class="repo-card">
    <div class="repo-header" style="display: flex; align-items: center; gap: 12px; justify-content: center;">
      <div class="repo-icon"><img src="/image/home/desktop.svg" alt="beaver-desktop" style="width: 24px; height: 24px; display: inline-block;"></div>
      <h3 style="margin: 0;">beaver-desktop</h3>
    </div>
    <p style="text-align: center;">Electron 跨平台桌面端应用</p>
    <div class="repo-links">
      <a href="https://github.com/wsrh8888/beaver-desktop" target="_blank" class="repo-link github">GitHub</a>
      <a href="https://gitee.com/dawwdadfrf/beaver-desktop" target="_blank" class="repo-link gitee">Gitee</a>
    </div>
  </div>
</div>

## <img src="/image/home/chat.svg" alt="加入社区" style="width: 32px; height: 32px; display: inline-block; vertical-align: middle; margin-right: 12px;">加入社区

<div class="community-section">
  <div class="community-grid">
    <div class="community-card">
      <div class="community-icon" style="display: flex; justify-content: center; align-items: center;"><img src="/image/home/qq.svg" alt="QQ交流群" style="width: 32px; height: 32px; display: inline-block;"></div>
      <h3 style="text-align: center;">QQ 交流群</h3>
      <p style="text-align: center;">与开发者交流讨论，获取技术支持</p>
      <div class="community-info" style="text-align: center;">
        <strong>群号：1013328597</strong>
      </div>
      <a href="https://qm.qq.com/q/82rbf7QBzO" target="_blank" class="community-btn">加入群聊</a>
    </div>
    <div class="community-card">
      <div class="community-icon"><img src="/image/home/github.svg" alt="GitHub讨论" style="width: 32px; height: 32px; display: inline-block;"></div>
      <h3>GitHub 讨论</h3>
      <p>在GitHub上提交Issues和参与项目讨论</p>
      <div class="community-info">
        <strong>开源协作</strong>
      </div>
      <a href="https://github.com/wsrh8888/beaver-server/issues" target="_blank" class="community-btn">参与讨论</a>
    </div>
  </div>
</div>

