var path = require('path');



console.log(path.basename('C:\\Users\\Administrator\\Desktop\\node03\\09.js'));    //输出文件的名字
console.log(path.basename('C:\\Users\\Administrator\\Desktop\\node03\\09.html','.html'));   //删掉后罪名



console.log(path.dirname('Administrator/Desktop/node03/09.html'));   //当前文件所在的路径
console.log(path.extname('Administrator/Desktop/node03/09.html.js.css'))

