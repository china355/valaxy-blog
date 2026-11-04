import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://xiutu.site/',
  lang: 'zh-CN',
  timezone: 'Asia/Shanghai',
  title: 'yang 的小站',
  author: {
    name: 'yang',
    avatar: '/avatar.jpg',
  },
  description: 'yang 的个人博客，用 Valaxy + Yun 搭建。',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
  },
})
