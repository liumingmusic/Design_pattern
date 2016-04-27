/**
 * Created by liumingming on 16/4/26.
 */
var LoginAlert = function (text) {
    this.text = text;
};
LoginAlert.prototype.show = function () {
    window.alert(this.text);
};

var LoginConfirm = function (text) {
    this.text = text;
};
LoginConfirm.prototype.show = function () {
    window.alert(this.text);
};

//类太多了，无法处理，使用简单工厂
var Basketball = function () {
    this.intro = "篮球盛行于美国";
};
Basketball.prototype = {
    getMember: function () {
        console.log("每个队需要五个人");
    },
    getBallSize: function () {
        console.log("篮球很大");
    }
};

var FootBall = function () {
    this.intro = "足球在全世界都很流行";
};
FootBall.prototype = {
    getMember: function () {
        console.log("每个队需要十一个人");
    },
    getBallSize: function () {
        console.log("足球很大");
    }
};

var Tennis = function () {
    this.intro = "每年的网球赛很多";
};
Tennis.prototype = {
    getMember: function () {
        console.log("每个队需要一个人");
    },
    getBallSize: function () {
        console.log("网球很小");
    }
};

//运动工厂
var SportsFactory = function (name) {
    switch (name) {
        case 'NBA':
            return new Basketball();
        case 'wordCup':
            return new FootBall();
        case 'FrenchOpen':
            return new Tennis();
    }
};











