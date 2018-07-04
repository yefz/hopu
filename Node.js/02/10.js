// 封装读文件的方法



var fs = require("fs");

var rf = function (path,callback){      //function(err,data){console.log(data);} 
	fs.access(path,(err) => {
		if(err){
			// throw err;
			callback(err);   //undefined就让他继续undefined
		}
		fs.readFile(path,'utf8',(err,data)=>{
			// console.log(data);
			callback(null,data);
		})
	})
}



module.exports = rf;





