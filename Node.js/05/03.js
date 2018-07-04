'use strict'; //使用严格模式

// 导入http的模块
const http = require('http');

// 创建一个服务的实例，server就是一个对象
const server = http.createServer();


// 监听request事件，当有请求发送到服务器的时候，就会触发request事件
// 触发完成以后，执行callback
// 回调函数参数里面是请求(request),响应(response)
// 设置请求文接收到响应的头


server.on('request',function(request,response){
	// 参数1 ： 状态码     参数2： 报头中的详细内容
	response.writeHead(200,{'Content-Type' : 'text/html;charset=utf-8'});    //设置报头，里面有响应的内容格式，编码



	if(request.url !== '/favicon.ico'){
		// response.write('hello');    //以前没有响应结束的时候可以输出
		// response.write('<h1>hello world</h1>');
		// response.write('<h1>你好</h1>');
		// response.write('<h1>hello world</h1>');
		// response.end('');    //表示结束
		// response.end('hello');    //只能有一个结束
		console.log(request.httpVersion);    //http的版本
		console.log(request.method);      //请求的方法
		console.log(request.url);          //输出的是地址   ，路由地址
		// 根据路由的改变，可以改变不同的界面
		if(request.url == '/' && request.method == 'GET'){
			response.end('<h1>首页</h1>');
		}else if(request.url == '/login' && request.method == 'GET'){
			response.end('登录页');
		}else if(request.url == '/zuche' && request.method == 'GET'){
			response.end('注册页');
		}


	}


});



server.listen('8899');    //监听的是端口号