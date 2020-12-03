(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{381:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"hello-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hello-shell"}},[s._v("#")]),s._v(" hello shell")]),s._v(" "),t("ol",[t("li",[s._v("创建文件"),t("code",[s._v("$ touch helloworld.sh")])]),s._v(" "),t("li",[s._v("添加内容")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World !"')]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("#! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。")])]),s._v(" "),t("blockquote",[t("p",[s._v("echo 命令用于向窗口输出文本。")])]),s._v(" "),t("h4",{attrs:{id:"运行-shell-脚本有两种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-shell-脚本有两种方法"}},[s._v("#")]),s._v(" 运行 Shell 脚本有两种方法：")]),s._v(" "),t("p",[s._v("在刚才创建的shell文件同目录下")]),s._v(" "),t("ol",[t("li",[s._v("作为可执行程序")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./helloworld.sh  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使脚本具有执行权限")]),s._v("\n./helloworld.sh  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行脚本")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("注意，"),t("strong",[s._v("一定要写成 ./helloworld.sh")]),s._v("，而不是 helloworld.sh，运行其它二进制的程序也一样")])]),s._v(" "),t("blockquote",[t("p",[s._v("直接写 helloworld.sh，linux 系统会去 PATH 里寻找有没有叫 helloworld.sh 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 helloworld.sh 是会找不到命令的，要用 ./helloworld.sh 告诉系统说，就在当前目录找。")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("作为解释器参数")])]),s._v(" "),t("p",[s._v("这种运行方式是，直接运行解释器，其参数就是 shell 脚本的文件名，如：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/bin/sh test.sh\n/bin/php test.php\n")])])]),t("blockquote",[t("p",[s._v("这种方式运行的脚本，不需要在第一行指定解释器信息，写了也没用。")])]),s._v(" "),t("h2",{attrs:{id:"echo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[s._v("#")]),s._v(" echo")]),s._v(" "),t("blockquote",[t("p",[s._v("先学一学bash的 console.log")])]),s._v(" "),t("h4",{attrs:{id:"显示普通字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示普通字符串"}},[s._v("#")]),s._v(" 显示普通字符串")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"It is a test"')]),s._v("\nIt is a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 双引号完全可以省略，以下命令与上面实例效果一致")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" It is a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nIt is a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("h4",{attrs:{id:"显示转义字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示转义字符"}},[s._v("#")]),s._v(" 显示转义字符")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("It is a test"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"It is a test"')]),s._v("\n")])])]),t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("h4",{attrs:{id:"变量类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量类型"}},[s._v("#")]),s._v(" 变量类型")]),s._v(" "),t("p",[s._v("运行shell时，会同时存在三种变量：")]),s._v(" "),t("ol",[t("li",[s._v("局部变量 局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。")]),s._v(" "),t("li",[s._v("环境变量 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。")]),s._v(" "),t("li",[s._v("shell变量 shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行")])]),s._v(" "),t("h4",{attrs:{id:"定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[s._v("#")]),s._v(" 定义变量")]),s._v(" "),t("ul",[t("li",[s._v("命名只能使用"),t("strong",[s._v("英文字母，数字")]),s._v("和"),t("strong",[s._v("下划线")]),s._v("，首个字符不能以数字开头。")]),s._v(" "),t("li",[s._v("中间不能有空格，可以使用下划线（_）。")]),s._v(" "),t("li",[s._v("不能使用标点符号。")]),s._v(" "),t("li",[s._v("不能使用bash里的关键字（可用help命令查看保留关键字）。")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("定义变量时")]),s._v("，变量名"),t("strong",[s._v("不加美元符号")]),s._v("（$，PHP语言中变量需要）")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bill"')]),s._v("\n或\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  将目录下的文件名循环出来。\n或\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("  将目录下的文件名循环出来。\n")])])]),t("h4",{attrs:{id:"使用变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用变量"}},[s._v("#")]),s._v(" 使用变量")]),s._v(" "),t("p",[s._v("使用一个定义过的变量，只要在变量名前面加美元符号即可，如：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bill"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$your_name")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your_name}")]),s._v("\n")])])]),t("p",[s._v("变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界")]),s._v(" "),t("h4",{attrs:{id:"只读变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只读变量"}},[s._v("#")]),s._v(" 只读变量")]),s._v(" "),t("blockquote",[t("p",[s._v("使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bill"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" your_name\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jack ma"')]),s._v("\n")])])]),t("h4",{attrs:{id:"删除变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除变量"}},[s._v("#")]),s._v(" 删除变量")]),s._v(" "),t("p",[t("code",[s._v("unset myUrl")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://lihx.top"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myUrl")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" myUrl\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myUrl")]),s._v("\n")])])]),t("h4",{attrs:{id:"变量运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量运算"}},[s._v("#")]),s._v(" 变量运算")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("result")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a+b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意等号两边不能有空格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result 为： '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("result 为： 11")]),s._v(" "),t("h2",{attrs:{id:"shell字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell字符串"}},[s._v("#")]),s._v(" Shell字符串")]),s._v(" "),t("blockquote",[t("p",[s._v("单引号里的任何字符都会原样输出，双引号里可以有变量")])]),s._v(" "),t("h4",{attrs:{id:"单引号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单引号"}},[s._v("#")]),s._v(" 单引号")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a string'")]),s._v("\n")])])]),t("p",[s._v("单引号字符串的限制：")]),s._v(" "),t("ul",[t("li",[s._v("单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；")]),s._v(" "),t("li",[s._v("单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。")])]),s._v(" "),t("h4",{attrs:{id:"双引号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双引号"}},[s._v("#")]),s._v(" 双引号")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'runoob'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, I know you are '),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$your_name")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("! "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$str")]),s._v("\nHello, I know you are "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" \n")])])]),t("h4",{attrs:{id:"拼接字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拼接字符串"}},[s._v("#")]),s._v(" 拼接字符串")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用双引号拼接")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$your_name")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" !"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your_name}")]),s._v(' !"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_1")]),s._v("\nhello, runoob "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hello, runoob "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用单引号拼接")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello, '")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$your_name")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' !'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello, "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your_name}")]),s._v(" !'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_3")]),s._v("\nhello, runoob "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hello, "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your_name}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),t("h4",{attrs:{id:"获取字符串长度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取字符串长度"}},[s._v("#")]),s._v(" 获取字符串长度")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcd"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("string}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出 4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),t("h4",{attrs:{id:"提取子字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取子字符串"}},[s._v("#")]),s._v(" 提取子字符串")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob is a great site"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("4}")]),s._v(" \nunoo\n")])])]),t("h4",{attrs:{id:"查找子字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找子字符串"}},[s._v("#")]),s._v(" 查找子字符串")]),s._v(" "),t("p",[s._v("查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob is a great site"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" index "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$string")]),s._v('"')]),s._v(" io"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),t("h2",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),t("p",[s._v("bash支持一维数组（不支持多维数组），并且没有限定数组的大小。")]),s._v(" "),t("h4",{attrs:{id:"定义数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义数组"}},[s._v("#")]),s._v(" 定义数组")]),s._v(" "),t("p",[s._v('在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：'),t("code",[s._v("数组名=(值1 值2 ... 值n)")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("array_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value0 value1 value2 value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n或者\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("array_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nvalue0\nvalue1\nvalue2\nvalue3\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n或者下标赋值\narray_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value0\narray_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1\narray_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("valuen\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以不使用连续的下标，而且下标的范围没有限制。")]),s._v("\n")])])]),t("h4",{attrs:{id:"读取数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取数组"}},[s._v("#")]),s._v(" 读取数组")]),s._v(" "),t("p",[s._v("读取数组元素值的一般格式是： "),t("code",[s._v("${数组名[下标]}")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取数组的长度")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取得数组单个元素的长度")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("h2",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),t("p",[s._v("以 # 开头的行就是注释，会被解释器忽略。")]),s._v(" "),t("p",[s._v("通过每一行加一个 # 号设置多行注释，像这样：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是一个注释")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###### 用户配置区 开始 ######")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里可以添加脚本描述信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###### 用户配置区 结束  ######")]),s._v("\n")])])]),t("h4",{attrs:{id:"多行注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多行注释"}},[s._v("#")]),s._v(" 多行注释")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n注释内容...\n注释内容...\n注释内容...\nEOF")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n\n:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n注释内容...\n注释内容...\n注释内容...\n'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n\n:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n注释内容"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n注释内容"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n注释内容"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);