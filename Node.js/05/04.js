// ajax 请求     前后台的传值，string
'use strict';

// 导入http服务
const http = require('http');     //服务模块
const fs = require('fs');          //文件模块
const querystring = require('querystring');    //参数模块
const url = require('url');     //导入url模块

// 创建服务
const server = http.createServer();



// 监听
server.on('request',(req,res)=>{

	var urlObj = url.parse(req.url,true);    //获取路由后面的
	var pathname = urlObj.pathname;    //路由
	console.log(pathname);
	var query = urlObj.query;        //参数
	// console.log(query);
	if (pathname == '/login.html' && req.method == "GET") {
		// res.end('你好')
		// 把文件给读进来
		fs.readFile('./login.html','utf8',(err,data)=>{
			res.end(data);
		})
	}else if(pathname == '/zhuce.html' && req.method == "GET"){
		fs.readFile('./zhuce.html','utf8',(err,data)=>{
			res.end(data);
		})
	}else if(pathname == '/logina' && req.method == "GET"){






		res.end('{"name" : "jack"}')
	}






	// res.end('')
})




server.listen('3000');



console.log('这个服务跑在127.0.0.1:3000');



