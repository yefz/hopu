// express是后台node框架
// 企业级的标准
// 原生的node开发   ，express
// 代码量大，逻辑不好处理，请求不好处理  304     ctrl + F5(强制刷新) -->  清浏览器缓存


// 安装express
// http://www.expressjs.com.cn/ 官网
// 1.导入express 模块
var express = require('express');
// 2.构造出对象
var app = express();
app.get("/",function(req,res){
	res.send('今天天气不错');    //只能出现一个
})
app.get('/haha',function(req,res){
	res.send('这个是haha界面');
})
app.get(/^\/student\/([\d]{6})$/,function(req,res){    //正则
	res.send('学生的编号：' + req.params[0]);
})
app.get("/teacher/:gonghao",function(req,res){     //冒号的形式 推荐
	res.send("老师的工号是" + req.params.gonghao)
})





// 3.监听端口
app.listen(3000);



