// 导入模块
const http = require('http');
const fs = require('fs');

// 创建 http 服务
const server = http.createServer();

// 坚挺请求事件
server.on('request',(request,response)=>{

	// 设置请求头
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

	// 排除多余响应
	if(request.url !== '/favicon.ico'){

		if(request.url == '/' && request.method == 'GET'){
			response.end(fs.readFileSync('./home.html'));
		}else if(request.url == '/login' && request.method == 'GET'){
			response.end(fs.readFileSync('./login.html'));
		}else if(request.url == '/register' && request.method == 'GET'){
			response.end(fs.readFileSync('./register.html'));
		}

	}

})

server.listen('80');
