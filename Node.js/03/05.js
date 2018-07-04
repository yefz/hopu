var fs = require('fs');

// fs.readFile('./01.js',(err,data)=>{
// 	console.log(data);
// })
//不加编码格式的时候回出现buffer，机器认识的编码


// try catch
// 在node中有用到，但是用的时候要注意



// try {
// 	fs.accessSync('./0asdfasdfsadf1.js');
// } catch(err) {
// 	console.log(err);
// }



// fs.access('./asdfasdf01.js',(err)=>{
// 	try {
// 		if(err) throw err
// 	} catch(err) {
// 		console.log(err);
// 	}
// })

// try catch   只能捕获同步的异常


// 什么是异常？
// 机器不能够正常处理的状况较异常
var err = new Error('这是一个错误');
console.log(err);
console.log(123)

