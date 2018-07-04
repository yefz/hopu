var fs = require('fs');


// access  不仅可以判断文件，还可以判断文件夹
// fs.access('./a',(err)=>{
// 	console.log(err)
// })

fs.stat('./01.js',(err,stats)=>{
	// if(stats.isDirectory())
	console.log(stats.isDirectory())
})

stats.isFile()   //判断是否是文件
stats.isDirectory()    //判断是否是文件夹



