// npm     https://www.npmjs.com/
// 管理node的包



// 全局安装淘宝镜像，以后可以使用cnpm
// npm install -g cnpm --registry=https://registry.npm.taobao.org    
// 
npm init     生成package.json文件    方便管理node的包
npm install 包名 --save       安装包并且会更新的package.json文件中
npm install     会直接根据package.json中的内容进行下载 



var sd = require("silly-datetime");
var str = sd.format(new Date(), 'YYYYMMDDHHmmss');
console.log(str);



var fs = require('fs');
fs.readFile('./01.txt',function(err,data){
	console.log(data);
})






