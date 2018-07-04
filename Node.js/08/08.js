var http = require('http');



var a = 100;    //中间件


http.createServer(function(req,res){
	a ++;
	res.end(a.toString());
}).listen(8888);

