const autoSidebar = require('vuepress-auto-sidebar.js')
module.exports = {
  home: true,
  title: '郭鹏的学习笔记',
  description: 'dayday up',
  dest: 'docs',
  base: '/docs/',
  plugins: [
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    [
      autoSidebar,
      // { base: 'doc' }
      // { titleOverflow: 20, ignoreFilder: ['doc'] }
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine',
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       avatar: 'monsterid',
    //       appId: 'hAfrJDiMKxLmXVpSnRDIp1JT-gzGzoHsz',
    //       appKey: 'uJ7s48tGgYtEqI5tSFPMTymR',
    //     },
    //   },
    // ],
  ],
  head: [['link', { rel: 'icon', href: '/favorite.ico' }]],
  themeConfig: {
    repoLabel: 'GitHub',
    repo: 'https://github.com/guopeng1024/guopeng1024.github.io',
    lastUpdated: '最近提交',
    docsDir: '',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '纠正错误',
    smoothScroll: true,
  },
}
