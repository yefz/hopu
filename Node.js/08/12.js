// post请求获得参数

var express = require('express');
// body-parser    post请求必须依赖这个模块
var bodyParser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
	res.render('form')
})

app.use(bodyParser.urlencoded({ extended: false }));//通过中间件形式

app.post('/',function(req,res){
	console.log(req.body);
})

app.listen(3000)
