// 传文件的时候显示百分比
'use strict'; //使用严格模式
// 导入文件的模块
const fs = require('fs');
// 传输的流和导入的流
const rs = fs.createReadStream('./abc.ASF');   //读文件的流
const ws = fs.createWriteStream('./abc1.ASF'); //写文件的流



var stats = fs.statSync('./abc.ASF');    //异步过程

// 获取文件的大小
var count = stats.size;    //为了能够正常的得到文件的大小，使用同步获取
// console.log(count);

var data = 0;
rs.on('data',function(chunk){
	data += chunk.length;
	console.log('传输的进度为：' + parseInt(data/count*100) + '%');
	ws.write(chunk);
})
rs.on('end',function(){
	console.log('传输完成');
	ws.end();
})



