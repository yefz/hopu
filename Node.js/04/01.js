1.什么是IO？
2.进程和线程
	进程是为运行中的运用提供运行环境
	线程是执行应用程序里面的代码的
	node是单线程，通过异步达到多线程的效果
	多线程的处理特别复杂
3.同步和异步
4.事件驱动模型
	主线程
	1.执行node代码，把代码放在队列中
	2.把队列中的同步代码全部执行
	3.同步代码执行完成，再去执行异步代码
	4.异步分为2种
		1.异步io    会从线程池取一条线程来帮助主线程执行
		2.异步非io  判断能否执行，能执行就执行了，不能执行就跳过     settimeout  setinterval
	5.主线程会一直循环，直到队列中没有代码了，主线程才会退出

	子线程:（可以理解成主线程的儿子）  一直放在线程池中休息的，主要用来执行异步的io操作
	1.放在线程池中休息
	2.异步的io操作来了，执行异步的io操作
	3.执行完成以后子线程会把异步的io操作中的callback函数，扔回给队列
	4.子线程事情做完继续回线程池中休息
5.文件操作
	fs.readFile(path[, options], callback)              读文件
	fs.access(path[, mode], callback)                   判断路径
	fs.writeFile(file, data[, options], callback)       写文件
	fs.appendFile(file, data[, options], callback)      追加内容
	fs.mkdir(path[, mode], callback)                    穿件文件夹
	fs.Stat                                             判断文件/文件夹存在，文件/文件夹的一些属性
	fs.readdir(path[, options], callback)
6.path 
	path.join([...paths])