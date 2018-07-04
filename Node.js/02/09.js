var fs = require("fs");


fs.access('./01.js',(err) => {
	// console.log(err ? 'no access' : 'can read');
	if(err) throw err;
	fs.readFile('./01.js','utf8',(err,data)=>{
		console.log(data);
	})
})