1.node和JavaScript什么关系？
	node是技术
	JavaScript语言
2.node是基于什么引擎的？
	V8引擎    没有兼容性的问题
3.nodejs的特点
	非阻塞的IO模型
	事件驱动
	优点：轻量，高效
4.node只能在window上运行吗


cmd

path全局变量
repl 交互式运行环境  类似于控制台，可以做一些常用的API测试
global
	__dirname    __filename
console 
	assert()     断言
	time()
	timeEnd()
模块系统
	什么是模块？      一个文件就是一个模块
	模块作用域        在这一个模块中，变量、函数、对象都是属于这个模块的，对外是不可见的
	require           require('路径')     里面放的是相对路径
	exports           就是module.exports的别名，引用。exports能做的module.exports都能完成
	module.exports    最终想要暴露出去的对象，属性，函数，都挂载在moudle.exports底下






