import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'yang 的小站',
    },

    nav: [
      { text: '文章', link: '/posts/', icon: 'i-ri-article-line' },
      { text: '归档', link: '/archives/', icon: 'i-ri-archive-line' },
      { text: '分类', link: '/categories/', icon: 'i-ri-folder-line' },
      { text: '标签', link: '/tags/', icon: 'i-ri-price-tag-3-line' },
      { text: '我的歌单', link: '/music/', icon: 'i-ri-music-line' },
      { text: '我的项目', link: '/projects/', icon: 'i-ri-code-box-line' },
      { text: '我的小伙伴们', link: '/links/', icon: 'i-ri-genderless-line' },
    ],

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '我的歌单',
        url: '/music/',
        icon: 'i-ri-music-line',
        color: '#e6162d',
      },
      {
        name: '我的项目',
        url: '/projects/',
        icon: 'i-ri-code-box-line',
        color: '#6e5494',
      },
    ],

    footer: {
      since: 2026,
      beian: {
        enable: false,
      },
    },
  },

  unocss: { safelist },
})
