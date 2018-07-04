var express = require('express');

var app = express();

app.use(express.static("./app"));    //一句话完成静态页面伺服




//接口
app.get('/haha',function(req,res){
	res.send('hahahah')
})



app.listen(3000);