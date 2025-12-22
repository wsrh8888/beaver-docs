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
    ['meta', { name: 'baidu_union_verify', content: '48032b45b14359638412d5798e66b3df' }],
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
      { text: '教程', link: '/tutorials/' },
      { text: '指南', link: '/guide/' },
      { text: '部署', link: '/deployment/' },
      { text: '后端', link: '/backend/' },
      { text: '移动端', link: '/mobile/' },
      { text: '桌面端', link: '/desktop/' },
      { text: '更新记录', link: '/changelog/' },
      // { text: '价格', link: '/commercial/' },
      { text: '社区', link: '/community/' }
    ],

    sidebar: {
      '/tutorials/': [
        {
          text: '视频教程',
          items: [
            { text: '合集·海狸IM服务器部署教程', link: '/tutorials/server-deployment-collection' },
            { text: '合集·海狸IM本地搭建教程', link: '/tutorials/local-setup-collection' }
          ]
        }
      ],
      '/changelog/': [
        {
          text: '更新记录',
          items: [
            { text: '更新概览', link: '/changelog/' }
          ]
        },
        {
          text: '服务端更新',
          items: [
            { text: 'v1.0.0 - 2025-08-09', link: '/changelog/backend/v1.0.0' }
          ]
        },
        {
          text: '移动端更新',
          items: [
            { text: 'v1.2.2 - 2025-08-09', link: '/changelog/mobile/v1.2.2' }
          ]
        },
        {
          text: '桌面端更新',
          items: [
            { text: 'v1.0.0 - 未发布', link: '/changelog/desktop/v1.0.0' }
          ]
        }
      ],
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
          text: '服务器初始化',
          items: [
            { text: 'Docker', link: '/deployment/initialization/install-docker' },
            { text: 'Docker Compose', link: '/deployment/initialization/install-docker-compose' },
            { text: 'mysql、redis、nginx、etcd', link: '/deployment/initialization/deployment' },
            { text: '数据库初始化', link: '/deployment/initialization/database-init' },
            { text: 'Nginx初始化', link: '/deployment/initialization/nginx-init' }
          ]
        },
        {
          text: '启动服务',
          items: [
            { text: '启动服务', link: '/deployment/initialization/service-deploy' }
          ]
        },
        {
          text: '镜像地址',
          items: [
            { text: '镜像', link: '/deployment/images' }
          ]
        }
      ],
      
      '/backend/': [
        {
          text: '服务端开发',
          items: [
            { text: '项目概述', link: '/backend/' },
            { text: 'API接口', link: '/backend/api' },
            { text: '初始化etcd、redis、mysql', link: '/backend/development' }
          ]
        },
        {
          text: '环境搭建',
          items: [
            { text: '开发流程', link: '/backend/setup/download-code' }
          ]
        },
        {
          text: '打包部署',
          items: [
            { text: 'Docker登录', link: '/backend/deploy/docker-login' },
            { text: '构建脚本', link: '/backend/deploy/build-scripts' },
            { text: '服务模块', link: '/backend/deploy/modules' }
          ]
        }
      ],
      
      '/mobile/': [
        {
          text: '移动端开发',
          items: [
            { text: '项目概述', link: '/mobile/' },
            { text: '界面展示', link: '/mobile/screenshots' },
            { text: '体验下载', link: '/mobile/experience' },
          ]
        }
      ],
      
      '/desktop/': [
        {
          text: '桌面端开发',
          items: [
            { text: '项目概述', link: '/desktop/' },
          ]
        }
      ],
      
      '/community/': [
        {
          text: '社区交流',
          items: [
            { text: '社区', link: '/community/' },
            { text: '赞助支持', link: '/community/sponsor' }
          ]
        }
      ],

      // '/commercial/': [
      //   {
      //     text: '价格方案',
      //     items: [
      //       { text: '价格', link: '/commercial/' }
      //     ]
      //   }
      // ],


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
      pattern: 'https://github.com/wsrh8888/beaver-docs/edit/main/:path',
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
