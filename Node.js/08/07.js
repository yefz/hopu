var express = require('express');

var app = express();

app.set('view engine','ejs'); 


app.get('/',function(req,res){
	res.render('form')
})

app.post('/',function(req,res){
	res.send("成功");
})



app.listen("3000")


//同一个路由，但是method 不同，对一个页面也是有用的

// 路由设计    RESTful



