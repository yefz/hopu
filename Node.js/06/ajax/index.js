'use strict';
// 导入模块
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
const path = require('path');
// 创建服务
const server = http.createServer();
// var dataall = [{},{}];
//监听事件
server.on('request',(req,res)=>{
	let urlObj = url.parse(req.url,true);    //获取url的路由以及地址，并转换成对象
	// console.log(urlObj);
	let pathname = urlObj.pathname;   //获取路由
	let query = urlObj.query;         //获取参数
	// 配置路由
	if((pathname == '/'|| pathname =='/index.html') && req.method == 'GET'){
		fs.readFile(path.join(__dirname,'index.html'),"utf8",(err,data) => {    //拼成了绝对路径
			if(err){throw err};
			res.end(data);
		})
	}
	else if(pathname == '/jquery-1.11.3.js' && req.method == "GET"){
		fs.readFile(__dirname + "/jquery-1.11.3.js","utf8",(err,data) => {    //拼成了绝对路径
			if(err){throw err};
			res.end(data);
		})
	}
	// 开始配置接口
	else if(pathname == '/getData' && req.method == 'POST'){  //post请求
		let data = "";
		req.on('data',(chunk) => {
			data += chunk;
		})
		req.on('end',()=>{
			let obj = querystring.parse(data);
			console.log(obj);
			let send = {
				'message' : 'POSTsuccess'
			}
			let sendStr = JSON.stringify(send);
			let sendBuf = new Buffer(sendStr);
			res.end(sendBuf);

		})
	}
	else if(pathname == '/getData' && req.method == 'GET'){   //GET请求
		console.log(query);



		let send = {
			'message' : 'GETsuccess'
		}
		let sendStr = JSON.stringify(send);
		let sendBuf = new Buffer(sendStr);
		res.end(sendBuf);
	}
	else {   //其余全部404
		res.writeHead(200,{
			'Content-Type' : 'utf-8'
		});
		res.write('<h1>404</h1>');
		res.end('')
	}




	// res.end('hello');
})
server.listen('3000');





