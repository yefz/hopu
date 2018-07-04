var fs = require('fs');
// fs.mkdir(path, [mode], [callback(err)]);
// path:创建文件夹的路径
// mode:权限，不用管
// callback ：回调

// fs.mkdir('./a/a',(err)=>{
// 	console.log(err)
// })




// fs.readdir(path[, options], callback)
// path:目录
// options ：编码   不用管
// callback：回调



// 读当前已选文件夹里面的文件，不会去管文件夹里面文件夹的文件
fs.readdir('./a',(err,files)=>{
	console.log(files);
})


// 异步的过程