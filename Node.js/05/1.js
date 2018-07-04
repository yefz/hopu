// 下载进度提示

const fs = require('fs');

const rs = fs.createReadStream('./A.psd');
const ws = fs.createWriteStream('./B.psd');

const count = fs.statSync('./A.psd').size;

var data = 0;
rs.on("data",function(chunk){
	data += chunk.length;
	console.log(parseInt((data/count)*100)+'%');
	ws.write(chunk);
})

rs.on("end",function(){
	console.log('下载完成');
	ws.end();
})

console.log(count);
