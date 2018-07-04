var express = require('express');
var app = express();


app.set('views','aaaa');//如果你不想放在views文件夹中，可以自己去制定文件夹，加上此句

app.set('view engine','ejs');   //直接去views文件夹中去读取
app.get('/',function(req,res){
	res.render('form')
})
app.post('/',function(req,res){
	res.send("成功");
})



app.listen("3000")