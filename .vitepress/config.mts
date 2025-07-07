import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "海狸IM",
  description: "基于 go-zero + uni-app + Electron 构建的现代化IM解决方案",
  base: '/beaver-docs/',
  ignoreDeadLinks: true,
  
  // SEO优化配置
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  
  // 生成网站地图
  sitemap: {
    hostname: 'https://wsrh8888.github.io/beaver-docs/'
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    
    // 百度统计
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
       hm.src = "https://hm.baidu.com/hm.js?68e83556d322ee9a1a87530ba2fd1745";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `],
    
    // SEO Meta标签
    ['meta', { name: 'keywords', content: 'IM聊天软件,即时通讯,私有化部署,开源IM,企业聊天,安全聊天软件,自建聊天服务器,go-lang IM,国产开源IM,企业内部沟通,团队协作工具,消息推送,实时通信,go-zero,uni-app,Electron,Vue3,TypeScript,WebSocket,端到端加密,多端同步,海狸IM' }],
    ['meta', { name: 'description', content: '海狸IM - 轻量级、高性能、重安全的开源即时通讯系统。支持私有化部署，基于go-zero微服务架构，提供iOS、Android、Windows、macOS、Linux、Web全平台支持，消息必达，永久存储，端到端加密。' }],
    ['meta', { name: 'author', content: '海狸IM团队' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['meta', { name: 'bingbot', content: 'index,follow' }],
    ['meta', { name: 'baidu-spider', content: 'index,follow' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '海狸IM - 开源企业级即时通讯系统' }],
    ['meta', { property: 'og:description', content: '轻量级、高性能、重安全的开源IM系统，支持私有化部署，全平台覆盖，消息必达，永久存储' }],
    ['meta', { property: 'og:url', content: 'https://wsrh8888.github.io/beaver-docs/' }],
    ['meta', { property: 'og:site_name', content: '海狸IM官方文档' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '海狸IM - 开源企业级即时通讯系统' }],
    ['meta', { name: 'twitter:description', content: '轻量级、高性能、重安全的开源IM系统，支持私有化部署，全平台覆盖' }],
    
    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#FF7D45' }],
    
    // 站点验证（需要时添加）
    // ['meta', { name: 'google-site-verification', content: 'your-verification-code' }],
    // ['meta', { name: 'baidu-site-verification', content: 'your-verification-code' }],
    ['meta', { name: 'msvalidate.01', content: 'your-verification-code' }],
    
    // JSON-LD Structured Data for SoftwareApplication
    ['script', { type: 'application/ld+json' }, `
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "海狸IM",
        "applicationCategory": "CommunicationApplication",
        "operatingSystem": "Windows, macOS, Linux, iOS, Android, Web",
        "description": "海狸IM是一款支持私有化部署的开源IM聊天软件。基于go-zero + uni-app + Electron构建，为企业和开发者提供安全、可靠、全平台的即时通讯解决方案。",
        "keywords": "IM, 开源IM, 即时通讯, 私有化部署, 聊天软件, go-zero IM, self-hosted chat",
        "url": "https://wsrh8888.github.io/beaver-docs/",
        "author": {
          "@type": "Organization",
          "name": "海狸IM团队"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "license": "https://www.apache.org/licenses/LICENSE-2.0"
      }
    `],
    
    ['style', {}, `
      :root {
        --vp-c-brand-1: #FF7D45;
        --vp-c-brand-2: #E86835;
        --vp-c-brand-3: #FFE6D9;
        --vp-c-brand-soft: #FFE6D9;
        --vp-home-hero-name-color: transparent;
        --vp-home-hero-name-background: linear-gradient(135deg, #FF7D45 0%, #E86835 100%);
        --vp-home-hero-image-background-image: linear-gradient(135deg, #FF7D45 0%, #E86835 100%);
        --vp-home-hero-image-filter: blur(44px);
        --vp-button-brand-border: #FF7D45;
        --vp-button-brand-text: #FFFFFF;
        --vp-button-brand-bg: #FF7D45;
        --vp-button-brand-hover-border: #E86835;
        --vp-button-brand-hover-text: #FFFFFF;
        --vp-button-brand-hover-bg: #E86835;
        --vp-button-brand-active-border: #E86835;
        --vp-button-brand-active-text: #FFFFFF;
        --vp-button-brand-active-bg: #E86835;
      }
      
      .dark {
        --vp-c-brand-1: #FF7D45;
        --vp-c-brand-2: #E86835;
        --vp-c-brand-3: #FFE6D9;
        --vp-c-brand-soft: rgba(255, 125, 69, 0.14);
      }
    `]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '部署', link: '/deployment/' },
      { text: '后端', link: '/backend/' },
      { text: '移动端', link: '/mobile/' },
      { text: '桌面端', link: '/desktop/' },
      { text: '赞助', link: '/sponsor/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '项目介绍', link: '/guide/' },
            { 
              text: '软件要求', 
              link: '/guide/requirements',
              collapsed: false,
              items: [
                { 
                  text: '后端开发软件', 
                  link: '/guide/requirements/backend',
                  collapsed: false,
                  items: [
                    { text: 'Golang', link: '/guide/requirements/backend/golang' },
                    { text: 'Docker Desktop', link: '/guide/requirements/backend/docker' },
                    { text: 'Navicat', link: '/guide/requirements/backend/navicat' },
                    { text: 'Redis管理工具', link: '/guide/requirements/backend/redis-manager' },
                    { text: 'Etcd Workbench', link: '/guide/requirements/backend/etcd-workbench' }
                  ]
                },
                { 
                  text: '前端开发软件', 
                  link: '/guide/requirements/frontend',
                  collapsed: false,
                  items: [
                    { text: 'Node.js', link: '/guide/requirements/frontend/nodejs' },
                    { text: 'HBuilder X', link: '/guide/requirements/frontend/hbuilderx' }
                  ]
                },
                { 
                  text: '公共开发工具', 
                  link: '/guide/requirements/common',
                  collapsed: false,
                  items: [
                    { text: 'Visual Studio Code', link: '/guide/requirements/common/vscode' },
                    { text: 'Apifox', link: '/guide/requirements/common/apifox' }
                  ]
                }
              ]
            }
          ]
        }
      ],

      '/deployment/': [
        {
          text: '部署指南',
          items: [
            { text: '部署概述', link: '/deployment/' }
          ]
        },
        {
          text: '服务器环境',
          items: [
            { text: '基础服务部署', link: '/deployment/server/deployment' }
          ]
        },
        {
          text: '后端服务',
          items: [
            { text: '服务概述', link: '/deployment/backend/overview' },
            { text: '认证服务', link: '/deployment/backend/auth_api' },
            { text: '聊天服务', link: '/deployment/backend/chat_api' },
            { text: '用户服务', link: '/deployment/backend/user_api' },
            { text: '文件服务', link: '/deployment/backend/file_api' }
          ]
        }
      ],
      
      '/backend/': [
        {
          text: '服务端开发',
          items: [
            { text: '项目概述', link: '/backend/' },
            { text: '技术栈', link: '/backend/tech-stack' },
            { text: '项目结构', link: '/backend/structure' }
          ]
        },
        {
          text: '微服务模块',
          items: [
            { text: '用户服务', link: '/backend/user-service' },
            { text: '认证服务', link: '/backend/auth-service' },
            { text: '好友服务', link: '/backend/friend-service' },
            { text: '聊天服务', link: '/backend/chat-service' },
            { text: 'WebSocket服务', link: '/backend/ws-service' },
            { text: '群组服务', link: '/backend/group-service' },
            { text: '文件服务', link: '/backend/file-service' }
          ]
        },
        {
          text: '开发指南',
          items: [
            { text: '本地开发', link: '/backend/development' },
            { text: 'API设计', link: '/backend/api-design' },
            { text: '数据库设计', link: '/backend/database' },
            { text: '消息存储', link: '/backend/message-storage' }
          ]
        }
      ],
      
      '/mobile/': [
        {
          text: '移动端开发',
          items: [
            { text: '项目概述', link: '/mobile/' },
            { text: 'uni-app技术栈', link: '/mobile/tech-stack' },
            { text: '项目结构', link: '/mobile/structure' }
          ]
        },
        {
          text: '功能模块',
          items: [
            { text: '用户认证', link: '/mobile/auth' },
            { text: '聊天界面', link: '/mobile/chat' },
            { text: '好友管理', link: '/mobile/friends' },
            { text: '群组管理', link: '/mobile/groups' },
            { text: '文件传输', link: '/mobile/file-transfer' }
          ]
        },
        {
          text: '开发指南',
          items: [
            { text: '本地开发', link: '/mobile/development' },
            { text: '打包发布', link: '/mobile/build' },
            { text: '平台适配', link: '/mobile/platform' }
          ]
        }
      ],
      
      '/desktop/': [
        {
          text: '桌面端开发',
          items: [
            { text: '项目概述', link: '/desktop/' },
            { text: 'Electron技术栈', link: '/desktop/tech-stack' },
            { text: '项目结构', link: '/desktop/structure' }
          ]
        },
        {
          text: '功能模块',
          items: [
            { text: '主进程', link: '/desktop/main-process' },
            { text: '渲染进程', link: '/desktop/renderer-process' },
            { text: 'WebSocket连接', link: '/desktop/websocket' },
            { text: '消息管理', link: '/desktop/message' },
            { text: '文件处理', link: '/desktop/file-handling' }
          ]
        },
        {
          text: '开发指南',
          items: [
            { text: '本地开发', link: '/desktop/development' },
            { text: '打包发布', link: '/desktop/build' },
            { text: '跨平台适配', link: '/desktop/cross-platform' }
          ]
        }
      ],
      
      '/sponsor/': [
        {
          text: '赞助项目',
          items: [
            { text: '赞助海狸IM', link: '/sponsor/' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API接口',
          items: [
            { text: 'API概述', link: '/api/' },
            { text: '认证方式', link: '/api/authentication' },
            { text: '错误码', link: '/api/error-codes' }
          ]
        },
        {
          text: '用户相关',
          items: [
            { text: '用户注册', link: '/api/user/register' },
            { text: '用户登录', link: '/api/user/login' },
            { text: '用户信息', link: '/api/user/profile' },
            { text: '好友管理', link: '/api/user/friends' }
          ]
        },
        {
          text: '聊天相关',
          items: [
            { text: '消息发送', link: '/api/chat/send' },
            { text: '消息历史', link: '/api/chat/history' },
            { text: '群组管理', link: '/api/chat/groups' }
          ]
        },
        {
          text: '文件相关',
          items: [
            { text: '文件上传', link: '/api/file/upload' },
            { text: '文件下载', link: '/api/file/download' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsrh8888/beaver-server' }
    ],
    
    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024-present 海狸IM'
    },
    
    search: {
      provider: 'local'
    },
    
    editLink: {
      pattern: 'https://github.com/wsrh8888/beaver-server/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
