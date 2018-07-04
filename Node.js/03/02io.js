var http = require('http');




var count  = 0;
http.createServer(function(req,res){


	count ++;
	res.writeHead(200,{"Content-Type" : "text/html;charset=utf8"});
	res.end('这是一个响应的结果:' + count + '次请求');
}).listen(3000);
