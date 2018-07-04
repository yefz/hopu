// 下拉菜单
$('.dropdown').dropdown({
    css3: false,
    js: false
});

// 全屏切换
var swiperFull = new Swiper('.swiper-full', {

    direction: 'vertical',
    pagination: '.swiper-pagination',
    paginationElement : 'span',

    paginationClickable: true,
    preventClicks: true,
    keyboardControl : true,
    mousewheelControl : true
});

// 旋转木马轮播图
var swiperRotate = new Swiper('.swiper-rotate', {
    loop : true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 'auto',
    coverflow: {
        rotate: 0,// 旋转的角度
        stretch: 0,// 拉伸   图片间左右的间距和密集度
        depth: 150,// 深度   切换图片间上下的间距和密集度
        modifier: 5,// 修正值 该值越大前面的效果越明显
        slideShadows : false// 页面阴影效果
    }
});

// 粒子动画 1
particlesJS.load('particle1', 'static/data/particles.json', function() {
  console.log('loaded1');
});

// 粒子动画 2
$('#particle2').particleground({
 	particleRadius: 3,       // 粒子大小
    dotColor: '#ffffff',     // 粒子颜色
    density: 5000,          // 粒子密度

    lineColor: '',    // 连接线颜色
    lineWidth: 0.01,            // 连接线宽度
    curvedLines: false,      // 连接线设置为曲线

    minSpeedX: 0.1,          // X 轴 最低速
    maxSpeedX: 0.7,          // X 轴 最高速
    minSpeedY: 0.1,          // Y 轴 最低速
    maxSpeedY: 0.7,          // Y 轴 最高速

    directionX: 'center',    // 粒子运动方向 X 轴, center(边缘反弹)、left、right
    directionY: 'up',    // 粒子运动方向 Y 轴, center(边缘反弹)、up、down
    proximity: 100,          // 粒子互动抓取距离

    parallax: true,          // 开启视差效果
    parallaxMultiplier: 1,   // 视差乘数

    onInit: function() {},   // 初始化后执行
    onDestroy: function() {} // 解绑元素后执行
});


