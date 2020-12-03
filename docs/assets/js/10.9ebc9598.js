(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{371:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-page"}},[t._v("#")]),t._v(" Git Page")]),t._v(" "),a("ol",[a("li",[t._v("GitHub新建仓库(<github user>.github.io最终生成的访问链接是同名的，推荐配置此仓库名)")]),t._v(" "),a("li",[t._v("tab找到 "),a("code",[t._v("settings")]),t._v(" => "),a("code",[t._v("GitHub Pages")]),t._v(" => "),a("code",[t._v("source")]),t._v("下拉选择 "),a("code",[t._v("master branch")]),a("br"),t._v(" "),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/image.png",alt:"image.png"}})]),t._v(" "),a("li",[t._v("现在，可以直接访问git page了，由于仓库master分支上还未部署html代码，所以可能是空白页面，接下来使用vuepress生成静态页面")])]),t._v(" "),a("h2",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" VuePress")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ol",[a("li",[t._v("git clone 刚才创建的仓库，作为vuepress的运行目录。")]),t._v(" "),a("li",[t._v("安装 "),a("code",[t._v("npm i vuepress -D")]),t._v("，个人认为不需要将其安装到全局")]),t._v(" "),a("li",[t._v("保证项目根路径下有一个markdown文件："),a("code",[t._v("readme.md")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" # 测试大标题\n\n - 列表1\n - 列表2\n")])])])]),t._v(" "),a("li",[t._v("运行 - 执行指令 "),a("code",[t._v("npx vuepress dev")])]),t._v(" "),a("li",[t._v("构建发布 - "),a("code",[t._v("npx vuepress build")]),a("br"),t._v("\n默认会在 "),a("code",[t._v(".vuepress")]),t._v(" => "),a("code",[t._v("dist")]),t._v(" 目录下生成html页面，因为git page只识别master分支下的根目录或者docs/文件夹。稍后需要修改HTML的输出目录")])]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("（1） 在根目录下新建目录 "),a("code",[t._v(".vuepress")]),a("br"),t._v("\n（2） 自定义配置：新建文件 "),a("code",[t._v("config.js")]),a("br"),t._v("\n更多配置查看"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("由于vuepress暂时不支持根据目录自动生成侧边栏，自己写了一个vuepress的插件 "),a("code",[t._v("vuepress-auto-sidebar.js")]),t._v(","),a("a",{attrs:{href:"https://github.com/justwe7/vuepress-auto-sidebar.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库地址"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要以commonjs规范导出配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" autoSidebar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-auto-sidebar.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置 html 的输出目录")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      autoSidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { base: 'doc' }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("再次打包"),a("code",[t._v("npx vuepress build")]),t._v("会生成一个docs目录，html文件生成在目录中")])]),t._v(" "),a("p",[t._v("（3） 将改动push到master分支，然后在setting中修改Git Page的设置，选中"),a("code",[t._v("master branch/docs folder")]),a("br"),t._v("\n（4） 访问Git Page的url，可以看到vuepress生成的静态页面已经生效")]),t._v(" "),a("h2",{attrs:{id:"jenkins部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins部署"}},[t._v("#")]),t._v(" Jenkins部署")]),t._v(" "),a("blockquote",[a("p",[t._v("首先在GitHub仓库新增一个feature分支")])]),t._v(" "),a("h3",{attrs:{id:"_1-新建一个构建任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建一个构建任务"}},[t._v("#")]),t._v(" （1）新建一个构建任务")]),t._v(" "),a("p",[t._v("选择第一项："),a("code",[t._v("Freestyle project")])]),t._v(" "),a("h3",{attrs:{id:"_2-配置源码地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置源码地址"}},[t._v("#")]),t._v(" （2）配置源码地址")]),t._v(" "),a("p",[t._v("指定拉取的分支为feature，"),a("strong",[t._v("以后feature用来更新内容，master分支只用来部署HTML页面")]),t._v("（对应的，需要基于master分支拉取一个feature分支并push到GitHub仓库）"),a("br"),t._v(" "),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/image8c8c0.png",alt:"image8c8c0.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3-配置构建任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置构建任务"}},[t._v("#")]),t._v(" （3）配置构建任务")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/imagecf199.png",alt:"imagecf199.png"}}),a("br"),t._v("\n弹出的输入框中填写如下shell指令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"安装依赖..."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"安装依赖成功，开始打包..."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"开始发布到远端..."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'justwe7'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ilihuaxi@gmail.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://name:password@github.com/justwe7/blog.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jenkins: auto deploy'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD:master --force\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发布完成！！！"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("git config username和email信息需要填写自己的")])]),t._v(" "),a("blockquote",[a("p",[t._v("remote地址name和password需要替换成自己的GitHub的name和密码")])]),t._v(" "),a("p",[t._v("此时点击build应该可以将feature分支的markdown文章生成html静态页面，并将html文件推送到master下，目录结构差不多是这样："),a("br"),t._v(" "),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/image2f410.png",alt:"image2f410.png"}})]),t._v(" "),a("p",[t._v("😂需要再去settings将Git Page的select改回"),a("code",[t._v("master")]),t._v("。--- 页面可以正常访问了。")]),t._v(" "),a("p",[a("strong",[t._v("构建后要将当前的文件清空，避免影响下次构建")]),t._v("\n选中"),a("code",[t._v("Delete workspace when build is done")]),t._v("："),a("br"),t._v(" "),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/image66c2b.png",alt:"image66c2b.png"}})]),t._v(" "),a("h3",{attrs:{id:"_4-配置git-hooks触发自动构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置git-hooks触发自动构建"}},[t._v("#")]),t._v(" （4）配置git hooks触发自动构建")]),t._v(" "),a("h4",{attrs:{id:"生成github-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成github-token"}},[t._v("#")]),t._v(" 生成GitHub token")]),t._v(" "),a("ol",[a("li",[t._v("进入GitHub，点击右上角头像 => settings")]),t._v(" "),a("li",[t._v("左边找到 Developer settings 点击")]),t._v(" "),a("li",[t._v("点击 Personal access tokens"),a("br"),t._v(" "),a("a",{attrs:{href:"https://img.lihx.top/image/XB48",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/imaged5c7d.png",alt:"imaged5c7d.png"}}),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("点击右上角的Generate new token按钮，生成的token只会展示一次，记得保存好")])]),t._v(" "),a("h4",{attrs:{id:"jenkins配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins配置"}},[t._v("#")]),t._v(" Jenkins配置")]),t._v(" "),a("ol",[a("li",[t._v("去到Jenkins首页。在系统设置页面找到”GitHub”，点击添加GitHub Server，如下图，名称随便起，API URL填写https://api.github.com，凭据位置如下图红框所示，选中管理 Hook选择Add ->Jenkins：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/04/image.png",alt:"image.png"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("填写刚刚从GitHub生成的token："),a("br"),t._v(" "),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/04/image242f4.png",alt:"image242f4.png"}})])]),t._v(" "),a("li",[a("p",[t._v("配置完成可以试试是否可以正确连接：\n"),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/04/image11a35.png",alt:"image11a35.png"}})])]),t._v(" "),a("li",[a("p",[t._v("勾选"),a("code",[t._v("为 Github 指定另外一个 Hook URL")]),t._v("，将生成的Jenkins hook地址复制\n"),a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/imagee3427.png",alt:"imagee3427.png"}})])]),t._v(" "),a("li",[a("p",[t._v("去到GitHub的仓库，settings => webhooks 点击add webhooks按钮,会要求输入GitHub密码，然后在输入框中填写Jenkins hook的地址")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/imagee4ac4.png",alt:"imagee4ac4.png"}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("回到Jenkins任务配置，添加两项配置：\nsecret 选择刚刚在Jenkins配置中添加的GitHub token的label")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.lihx.top/images/2020/01/14/image7c0cc.png",alt:"image7c0cc.png"}})]),t._v(" "),a("p",[t._v("！！保存")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("此时在GitHub，feature分支push会触发GitHub hook => Jenkins拉取代码 => 自动打包 => push到仓库master分支，实现自动化部署静态笔记")])])])}),[],!1,null,null,null);s.default=n.exports}}]);