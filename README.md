## even-antd-dva
学习使用antd+dva，本demo用于了解dva组件间的参数传递.
## 如有不对的地方，请指教
在这里感谢各位网友的开源代码以及博客。初次接触react，由于项目上马上就要使用，所以我选择使用antd+dva（阿里的那套）开始。希望少走点弯路，至于react基础后面回头再来加强吧！
### 开发工具:webstorm 

- 下载后 npm install
- 运行 npm start

made in china

## 开发流程
先安装 dva-cli，并确保版本是 0.7 或以上。
	$ npm i dva-cli -g
	$ dva -v
	0.7.0
然后创建应用：
	$ dva new user-dashboard
	$ cd user-dashboard 
babel-plugin-import 用于按需引入 antd 的 JavaScript 和 CSS，这样打包出来的文件不至于太大。
	$ npm i antd --save
	$ npm i babel-plugin-import --save-dev
修改 .roadhogrc，在 "extraBabelPlugins" 里加上：
	["import", { "libraryName": "antd", "style": "css" }]
/**	
 * dva 有一个管理 effects 执行的 hook，并基于此封装了 dva-loading 插件。通过这个插件，我们可以
 * 不必一遍遍地写 showLoading 和 hideLoading，当发起请求时，插件会自动设置数据里的 loading 状
 * 态为 true 或 false 。然后我们在渲染 components 时绑定并根据这个数据进行渲染。
 */

 先安装 dva-loading ：
	$ npm i dva-loading --save
然后启动应用：(这个命令一直开着，后面不需要重启)
	$ npm start
浏览器会自动开启，并打开 http://localhost:8000 。


用 dva-cli 生成路由：
$ dva g route users

用 dva-cli 生成 component：
$ dva g component Users/Users
