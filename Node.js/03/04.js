// 点餐炸鸡腿


// 1.点餐员做啥      1.配餐   2.盯着鸡腿熟
// 2.我去电完餐       坐着等吃  


// 点餐员的函数
var doSometing = function(callback){
	setTimeout(function(){
		var food = "炸鸡腿";

		callback(food);
	}, 5000)


	console.log('配餐');
	console.log('配餐');
	console.log('配餐');
}       
//吃的函数
var eat = function(food){
	console.log('吃' + food);
}


doSometing(eat)


doSometing(function(food){
	console.log('吃' + food);
})


