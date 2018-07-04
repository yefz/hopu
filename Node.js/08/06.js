// get请求

var express = require('express');
var app = express();



app.get("/AAb",function(req,res){   //不区分大小写，自动无视# ？
	res.send('你好')
})

app.get("/student/:id",function(req,res){
	var id = req.params.id;
	// console.log(id);
	var reg = /^\d{6}$/;
	if(reg.test(id)){
		res.send("学生编号:" + id);
	}else{
		res.send("请检查格式")
	}
})
app.get("/:username/:oid",function(req,res){
	var username = req.params['username'];
	var oid = req.params.oid;
	// console.log(username);
	// console.log(oid);


	res.send(username + ":" + oid);
})





app.listen(3000);