(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{384:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("command > file")]),t._v(" "),a("td",[t._v("将输出重定向到 file。")])]),t._v(" "),a("tr",[a("td",[t._v("command < file")]),t._v(" "),a("td",[t._v("将输入重定向到 file。")])]),t._v(" "),a("tr",[a("td",[t._v("command >> file")]),t._v(" "),a("td",[t._v("将输出以追加的方式重定向到 file。")])]),t._v(" "),a("tr",[a("td",[t._v("n > file")]),t._v(" "),a("td",[t._v("将文件描述符为 n 的文件重定向到 file。")])]),t._v(" "),a("tr",[a("td",[t._v("n >> file")]),t._v(" "),a("td",[t._v("将文件描述符为 n 的文件以追加的方式重定向到 file。")])]),t._v(" "),a("tr",[a("td",[t._v("n >& m")]),t._v(" "),a("td",[t._v("将输出文件 m 和 n 合并。")])]),t._v(" "),a("tr",[a("td",[t._v("n <& m")]),t._v(" "),a("td",[t._v("将输入文件 m 和 n 合并。")])]),t._v(" "),a("tr",[a("td",[t._v("<< tag")]),t._v(" "),a("td",[t._v("将开始标记 tag 和结束标记 tag 之间的内容作为输入。")])])])]),t._v(" "),a("h3",{attrs:{id:"输出重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向"}},[t._v("#")]),t._v(" 输出重定向")]),t._v(" "),a("p",[a("strong",[t._v("覆盖内容")])]),t._v(" "),a("ul",[a("li",[t._v("直接将输出内容覆盖到文件：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filenew'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nfilenew\n")])])]),a("ul",[a("li",[t._v("将输出内容追加到文件：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new line"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nfilenew\nnew line\n")])])]),a("p",[t._v("将指令的输出内容覆盖到文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])])]),a("h3",{attrs:{id:"输出重定向-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向-2"}},[t._v("#")]),t._v(" 输出重定向")]),t._v(" "),a("p",[t._v("没看懂~~\nhttps://www.runoob.com/linux/linux-shell-io-redirections.html")]),t._v(" "),a("h3",{attrs:{id:"dev-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev-null"}},[t._v("#")]),t._v(" /dev/null")]),t._v(" "),a("blockquote",[a("p",[t._v("如果希望执行某个命令，但又不希望在屏幕上显示输出结果，那么可以将输出重定向到 /dev/null")])]),t._v(" "),a("p",[a("code",[t._v("ls > /dev/null")])]),t._v(" "),a("p",[t._v('/dev/null 是一个特殊的文件，写入到它的内容都会被丢弃；如果尝试从该文件读取内容，那么什么也读不到。但是 /dev/null 文件非常有用，将命令的输出重定向到它，会起到"禁止输出"的效果。\n如果希望屏蔽 stdout 和 stderr，可以这样写: '),a("code",[t._v("command > /dev/null 2>&1")])])])}),[],!1,null,null,null);s.default=n.exports}}]);