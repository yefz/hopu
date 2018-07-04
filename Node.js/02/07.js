var fs = require("fs");     


fs.readFile('./021521.js','utf8', (err, data) => {
	// 当错误的时候，err是一个对象
  	// console.log(err);
  	// console.log(123);
  	if(err){
  		throw err;
  	}
  	console.log(data);
});



// 路径：
// 相对
// 绝对
// 盘符根