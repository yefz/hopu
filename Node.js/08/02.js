var ejs = require('ejs');
var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request',(req,res)=>{
	fs.readFile('./views/index.ejs',(err,data)=>{
		// 模板开始绑定
		// console.log(data.toString());
		var template = data.toString();   //获取模板

		var dataAll = {
			day : 4,
			news : [
				{'title' : '胡浩轩又在睡觉' ,'count' : 10},
				{'title' : '胡浩轩今天又在睡觉' ,'count' : 20},
				{'title' : '胡浩轩明天还在睡觉' ,'count' : 30}
			]
		}

		var html = ejs.render(template,dataAll);



		//输出到页面
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		res.end(html)

	})
})







server.listen(3000);


