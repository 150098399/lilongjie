import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/lilongjie',
  lang: 'zh-CN',
  title: '三味书屋',
  description: '踩坑日记&&生活记录',
  theme: defaultTheme({
    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'CSS进阶',
        children: [
          {
            text: '基础知识',
            link: '/CSS/chapter1.md'
          }
        ]
      }
    ]
  }),
  plugins: [
    searchPlugin({

    })
  ]
})