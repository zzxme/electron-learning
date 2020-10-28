# electron-learning

#### 介绍
学习electron，分享electron

#### electron简介
electron -  [ɪˈlektrɑːn] - n. 电子
Electron 是由GitHub 发布的开源框架，官网-https://www.electronjs.org/

专注于桌面应用而不是 Web 服务器端

这不意味着 Electron 是某个图形用户界面（GUI）库的 JavaScript 版本。 相反，Electron 使用 web 页面作为它的 GUI，所以你能把它看作成一个被 JavaScript 控制的，精简版的 Chromium 浏览器。
使用Web技术构建跨平台的桌面应用

###### Electron = Chromium + Node.js + Native API
- Chromium： 为electron提供强大的UI能力，可以在不考虑兼容性的情况下利用web生态开发界面
- Node.js: 让electron有了底层的操作能力，比如文件读写，并且可以使用大量的开源npm包来完成开发需求
- Native API: Native API 让electron实现跨平台和桌面端原生能力

#### electron使用场景
- 没有专门的桌面应用开发者，而需要前端兼顾来进行开发时。
- 应用同时开发Web端和桌面端

有什么著名的应用程序是electron开发的，VSCode

#### 搭建Electron开发环境
1. 安装Node【最好使用v10以上版本】【Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。什么事情驱动、非阻塞式I/O，适合高并发应用使用。】
2. 检测node 和 npm 安装状态，【node -v， npm -v】
3. 新建文件夹-初始化 npm init
4. npm install --save-dev electron
5. 检测 electron 安装状态【1. npx electron -v 2. ./node_modules/.bin/electron -v】
6. ** 也可以直接运行 ./node_modules/.bin/electron 来查看执行效果

##### https://shimo.im/docs/TDtC6QCxpK36TGh8/ 《electron介绍和环境搭建》
##### https://shimo.im/docs/DYddJJwvQJCXPGkH/ 《electron hello world》
##### https://shimo.im/docs/Wx63gpjXqVdKpTpt/ 《electron enjoy demo》
##### https://shimo.im/docs/38TCw3kd6qDXDVKK/ 《electron remote demo》
##### https://shimo.im/docs/HxYdxwH8kVYp6pKv/ 《electron 自定义菜单创建和使用》