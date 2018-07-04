var fs = require('fs');
// fs.writeFile(file, data[, options], callback)
// 第一个参数    文件名
// 第二个参数    写的内容
// 第三个参数    编码格式
// 第四个        回调函数


//1.会覆盖原文件的内容
//2.文件如果不存在的时候，会创建这个文件，不会创建文件夹
// fs.writeFile('./06.txt','今天天气真好','utf8',(err) => {
// 	console.log(err);
// })
// fs.writeFile('./06.txt','今天天气真好haohaohao','utf8',(err) => {
// 	console.log(err);
// })

// fs.writeFileSync('./06.txt','aslkdfjlsadjf','utf8');



// 追加内容到文件，没有的时候会创建文件，但不会创建文件夹
// fs.appendFile(file, data[, options], callback)
// fs.appendFile('./06.txt','今天天气真好haohaohao','utf8',(err) => {
// 	console.log(err);
// })


// fs.readFile('./06.txt','utf8',(err,data)=>{
// 	console.log(data);
// })



// 先写后读    --->    一定是可以读到内容的
// 不一定    异步(谁先出结果，谁先执行)



// fs.appendFile('./06.txt','今天天气真好haohaohao','utf8',(err) => {
// 	console.log(err);
// })



// 10

console.time('abc');
for(var i = 0;i<100000000;i++){}
console.timeEnd('abc');