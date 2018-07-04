// 参数


// get请求参数问题
var express = require('express');
var app = express();


app.get('/',function(req,res){
	console.log(req.query);   //全部自动帮你转换成了对象
	res.send('')
})





app.listen(3000);