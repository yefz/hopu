// fs.readFile(path[, options], callback)
// fs.readFileSync(path[, options])

var fs = require('fs');



//异步的读文件
// fs.readFile('./01.js','utf8',function(err,data){
// 	console.log(data);
// })


// 同步的读文件
var data = fs.readFileSync('./01.js','utf8');
console.log(data);



