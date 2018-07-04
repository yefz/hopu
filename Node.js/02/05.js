// 读文件
var a = require("./05read");
console.log(a);



// 不仅仅只可以读js
// txt html  ...

// 代码优化：如果require不加后缀名，会自动补全，补全的顺序为 .js .node .json
// 手动加上，提高工作效率
// 优化思想：能自己做的就自己做，别让机器整



// 加载的问题
// node本身就是高效的
// 加载一次以后会形成缓存文件                 再次加载读取的是缓存
// common.js         
// AMD规范           require.js
// CMD规范           sea.js
