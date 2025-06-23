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
  -
    icon: 🚀
    title: 现代化技术栈
    details: 基于 Go-Zero、Uni-App、Electron 等现代化技术构建，确保系统的高性能和可扩展性。
  -
    icon: 🔒
    title: 私有化部署
    details: 支持完全私有化部署，所有数据掌握在自己手中，保障企业信息和用户隐私安全。
  -
    icon: 🌐
    title: 全平台覆盖
    details: 一套代码库支持iOS、Android、Windows、macOS、Linux及Web，实现真正的多端消息同步。
  - icon: 
      src: /icons/open-source.svg
      alt: 开源
    title: 完全开源
    details: Apache-2.0 开源协议，后端、移动端、桌面端全部开源，可自由使用和商业化
    
  - icon:
      src: /icons/security.svg
      alt: 安全
    title: 私有化部署
    details: 数据完全自主可控，支持内网部署，保障企业数据安全和隐私
    
  - icon:
      src: /icons/realtime.svg
      alt: 实时
    title: 实时通信
    details: 基于 WebSocket 长连接，毫秒级消息传输，支持消息可靠性保证
    
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

## 🎯 产品特色

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2Z" fill="#FF7D45"/>
        <path d="M6 9H18V11H6V9ZM6 12H15V14H6V12Z" fill="white"/>
      </svg>
    </div>
    <h3>即时通讯</h3>
    <p>支持私聊、群聊，文本、图片、文件等多种消息类型</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4Z" fill="#FF7D45"/>
        <path d="M8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6Z" fill="#4A6FA1"/>
        <path d="M22 20V18C22 15.7909 20.2091 14 18 14H14C11.7909 14 10 15.7909 10 18V20H22Z" fill="#FF7D45"/>
        <path d="M11 20V19C11 17.3431 9.65685 16 8 16H4C2.34315 16 1 17.3431 1 19V20H11Z" fill="#4A6FA1"/>
      </svg>
    </div>
    <h3>好友管理</h3>
    <p>好友添加、删除，个人信息管理，二维码名片</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#FF7D45"/>
        <path d="M12 13L8 9H11V6H13V9H16L12 13Z" fill="white"/>
      </svg>
    </div>
    <h3>云端存储</h3>
    <p>集成七牛云存储，支持文件上传和多媒体消息</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.09 8.26L19 7L14.74 11.74L22 12L15.74 16.26L17 22L12 18L7 22L8.26 16.26L2 12L9.26 11.74L5 7L10.91 8.26L12 2Z" fill="#FF7D45"/>
      </svg>
    </div>
    <h3>高性能</h3>
    <p>Go 语言高并发特性，支持万级用户同时在线</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="#FF7D45"/>
        <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h3>数据安全</h3>
    <p>端到端加密传输，支持私有化部署，数据完全可控</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z" fill="#FF7D45"/>
        <path d="M7 7H17M7 11H17M7 15H13" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <circle cx="16" cy="16" r="3" fill="#4A6FA1"/>
        <path d="M15 16L16 17L17.5 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h3>开发友好</h3>
    <p>完整开发文档，模块化设计，快速二次开发和定制</p>
  </div>
</div>

## 🛠️ 技术架构

<div class="tech-overview">
  <div class="arch-grid">
    <div class="arch-card">
      <div class="arch-icon">🖥️</div>
      <h3>后端服务</h3>
      <p>采用Go语言开发，基于go-zero微服务框架，支持高并发处理</p>
      <div class="tech-tags">
        <span class="tech-tag">Go语言</span>
        <span class="tech-tag">go-zero</span>
        <span class="tech-tag">微服务</span>
      </div>
    </div>
    <div class="arch-card">
      <div class="arch-icon">📱</div>
      <h3>移动端</h3>
      <p>基于uni-app开发，支持iOS和Android双平台，一套代码多端运行</p>
      <div class="tech-tags">
        <span class="tech-tag">uni-app</span>
        <span class="tech-tag">Vue3</span>
        <span class="tech-tag">跨平台</span>
      </div>
    </div>
    <div class="arch-card">
      <div class="arch-icon">💻</div>
      <h3>桌面端</h3>
      <p>使用Electron技术栈，支持Windows、macOS、Linux全平台</p>
      <div class="tech-tags">
        <span class="tech-tag">Electron</span>
        <span class="tech-tag">Vue3</span>
        <span class="tech-tag">TypeScript</span>
      </div>
    </div>
  </div>
</div>

## 📦 项目仓库

<div class="repo-grid">
  <div class="repo-card">
    <div class="repo-header">
      <div class="repo-icon">🖥️</div>
      <h3>beaver-server</h3>
    </div>
    <p>Go 微服务后端，基于 go-zero 框架</p>
    <div class="repo-links">
      <a href="https://github.com/wsrh8888/beaver-server" target="_blank" class="repo-link github">GitHub</a>
      <a href="https://gitee.com/dawwdadfrf/beaver-server" target="_blank" class="repo-link gitee">Gitee</a>
    </div>
  </div>
  
  <div class="repo-card">
    <div class="repo-header">
      <div class="repo-icon">📱</div>
      <h3>beaver-mobile</h3>
    </div>
    <p>uni-app 跨平台移动端应用</p>
    <div class="repo-links">
      <a href="https://github.com/wsrh8888/beaver-mobile" target="_blank" class="repo-link github">GitHub</a>
      <a href="https://gitee.com/dawwdadfrf/beaver-mobile" target="_blank" class="repo-link gitee">Gitee</a>
    </div>
  </div>
  
  <div class="repo-card">
    <div class="repo-header">
      <div class="repo-icon">💻</div>
      <h3>beaver-desktop</h3>
    </div>
    <p>Electron 跨平台桌面端应用</p>
    <div class="repo-links">
      <a href="https://github.com/wsrh8888/beaver-desktop" target="_blank" class="repo-link github">GitHub</a>
      <a href="https://gitee.com/dawwdadfrf/beaver-desktop" target="_blank" class="repo-link gitee">Gitee</a>
    </div>
  </div>
</div>

## 💬 加入社区

<div class="community-section">
  <div class="community-grid">
    <div class="community-card">
      <div class="community-icon">🐧</div>
      <h3>QQ 交流群</h3>
      <p>与开发者交流讨论，获取技术支持</p>
      <div class="community-info">
        <strong>群号：1013328597</strong>
      </div>
      <a href="https://qm.qq.com/q/82rbf7QBzO" target="_blank" class="community-btn">加入群聊</a>
    </div>
    <div class="community-card">
      <div class="community-icon">💬</div>
      <h3>GitHub 讨论</h3>
      <p>在GitHub上提交Issues和参与项目讨论</p>
      <div class="community-info">
        <strong>开源协作</strong>
      </div>
      <a href="https://github.com/wsrh8888/beaver-server/issues" target="_blank" class="community-btn">参与讨论</a>
    </div>
  </div>
</div>

