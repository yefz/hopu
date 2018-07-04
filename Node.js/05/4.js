'use strict';

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

const server = http.createServer();

server.on('request',(req,res)=>{

	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	var query = urlObj.query;

	var body = "";

	req.on('data',function(chunk){
		body += chunk;
		console.log('chunk:',chunk);
	})

	req.on('end',function(){
		body = querystring.parse(body);
		console.log("body:",body);

		if(body.name && body.url) { // 输出提交的数据
      res.write("网站名：" + body.name);
      res.write("<br>");
      res.write("网站 URL：" + body.url);
    } else {  // 输出表单
      res.write(postHTML);
    }
    res.end();
	})

	res.writeHead(200,{'Content-Type' : 'text/html;charset=utf-8'});

	if(pathname !== 'favicon.ico' && req.method == 'GET'){

		if(pathname == '/' && req.method == 'GET'){
			fs.readFile('./home.html','utf8',(err,data)=>{
				if(err) throw err;
				res.end(data);
			})
		}else if(pathname == '/login' && req.method == 'GET'){
			fs.readFile('./login.html','utf8',(err,data)=>{
				if(err) throw err;
				res.end(data);
			})
		}else if(pathname == '/register' && req.method == 'GET'){
			fs.readFile('./register.html','utf8',(err,data)=>{
				if(err) throw err;
				res.end(data);
			})
		}

	}

})

server.listen('80');
