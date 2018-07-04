// 模板引擎
// ejs  
// 安装
// npm install ejs --save 
// cnpm install ejs --save

var ejs = require('ejs');
//模板
var str = "今天天气真好，今天是星期 <%= day %>";
//数据
var data = {
	day : 4
}
//数据绑定
var html = ejs.render(str,data);

console.log(html)






