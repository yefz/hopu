var express = require('express');
var app = express();


// app.get('/',function(req,res,next){
// 	console.log('1');
// 	next()   //中间件，完全违背MVC思想
// })
// app.get('/',function(req,res){
// 	console.log('2');
// 	// res.send
// })


// 1.换位置
app.get("/:username/:id",function(req,res,next){
	var username = req.params.username;
	// 检索数据库
	if (true) {

	}else{
		next()
	}
})
app.get("/admin/login",function(req,res){
	console.log('2');
	res.send("管理员登录")
})





app.listen(3000);