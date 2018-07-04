'use strict';


// 引入模块
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');



const server = http.createServer();
server.on('request',(req,res) => {
	let pathname = url.parse(req.url).pathname;   //获取用户输入的路径


	if(pathname == '/'){
		pathname = '/index.html'
	}

	var extname = path.extname(pathname);
	fs.readFile('.' + pathname,(err,data) => {
		// console.log(err);
		if(err){
			fs.readFile('./views/404.html',(err,data) => {
				res.writeHead(200,{'Content-Type' : 'text/html;charset=utf8'});
				res.end(data);
			});
			return;
		}

		var mime = getMime(extname);
		console.log(mime)
		res.writeHead(200,{'Content-Type' : mime});
		res.end(data);
	})

})
server.listen('3000');



function getMime(extname){
	switch (extname) {
		case ".html":
			return "text/html";
			break;
		case ".jpg":
			return "image/jpg";
			break;
		case ".css":
			return "text/css";
			break;
		// default:
		//     return "text/html"
	}
}

