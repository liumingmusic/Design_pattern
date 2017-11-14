//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;
    this.container = container;
};

LoopImages.prototype = {
    //创建轮播图片
    createImage: function () {
        "use strict";
        console.log('LoopImages createImage function');
    },
    //切换下一张图片
    changeImage: function () {
        "use strict";
        console.log('LoopImages changeImage function');
    }
};

//上下滑动图片类
var SlideLoopImg = function (imgArr, container) {
    //构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
};

//继承基本的方法
SlideLoopImg.prototype = new LoopImages();

//方法扩展或者重写
SlideLoopImg.prototype = {
    changeImage: function () {
        console.log('SlideLoopImg changeImage function');
    }
};

//渐隐渐现图片类
var FadeLoopImg = function (imgArr, container, arrow) {
    //构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
    //切换箭头私有变量
    this.arrow = arrow;
};

//继承基本的方法
FadeLoopImg.prototype = new LoopImages();

//方法扩展或者重写
FadeLoopImg.prototype = {
    changeImage: function () {
        console.log('FadeLoopImg changeImage function');
    }
};

//实例化一个SlideLoopImg类
var fadeImg = new FadeLoopImg([
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png',
    '06.png'
], 'fadeSlide', ['left.png', 'right.png']);