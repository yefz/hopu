// express对模板引擎支持的程度还不错
var express = require('express');
var app = express();

app.set('view engine','ejs');    //自动去导入ejs，ejs并不是集成在express包里面


app.get('/',function(req,res){
	res.render("haha",{news:["胡浩轩喜欢睡觉","胡浩轩喜欢打游戏","胡浩轩喜欢吃鸡"
		]})
})



app.listen(3000)






