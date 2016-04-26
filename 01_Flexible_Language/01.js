/**
 * Created by liumingming on 16/4/24.
 */
//1、最简单的方式
function checkName() {
    console.log("checkname");
}
function checkEmail() {
    console.log("checkEmail");
}

var checkName_1 = function () {
    console.log("checkname");
};
var checkEmail_1 = function () {
    console.log("checkEmail");
};

//2、使用对象进行收编
var CheckObject = {
    checkName: function () {
        console.log("checkname");
    },
    checkEmail: function () {
        console.log("checkEmail");
    }
};

var CheckObject_1 = function () {
};
CheckObject_1.checkEmail = function () {
    console.log("checkname");
};

checkEmail_1.checkName = function () {
    console.log("checkName");
};

var CheckObject_2 = function () {
    return {
        checkName: function () {
            console.log("checkname");
        },
        checkEmail: function () {
            console.log("checkEmail");
        }
    }
};

//3、类也可以
var CheckObject_3 = function () {
    this.checkName = function () {
        console.log("checkname");
    };
    this.checkEmail = function () {
        console.log("checkEmail");
    }
};

var CheckObject_4 = function () {
};
CheckObject_4.prototype = {
    checkName: function () {
        console.log("checkname");
    },
    checkEmail: function () {
        console.log("checkEmail");
    }
};

//4、链式调用
var CheckObject_5 = function () {
};
CheckObject_5.prototype = {
    checkName: function () {
        console.log("checkname");
        return this;
    },
    checkEmail: function () {
        console.log("checkEmail");
        return this;
    }
};

//5、特殊用法
Function.prototype.addMethod = function (name, fn) {
    this[name] = fn;
    return this;
};

var Angular = function () {
};
Angular.prototype = {
    controller: function (controllerName, param, fn) {
        if (!controllerName) {
            return Error("控制器必须以 ctr 字符串开始");
        }
        if (!(param instanceof Array)) {
            return Error("参数必须是数组类型");
        }
        var result = param.join("_");
        return fn.call(this, result);
    }
};













