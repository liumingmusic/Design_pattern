/**
 * Created by liumingming on 16/5/9.
 */
//创建一个人
var Human = function (param) {
    //技能
    this.skill = param && param.skill || "保密";
    //爱好
    this.hobby = param && param.hobby || "保密";
};

//人类原型方法
Human.prototype = {
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    }
};

//实例化姓名类
var Named = function () {
    var that = this;
    (function (name, that) {
        that.wholeName = name;
        if (name.indexOf(" ") > -1) {
            that.FirstName = name.silce(0, name.indexOf(' '));
            that.SecondName = name.silce(name.indexOf(' '));
        }
    })(name, that);
};

//工作
var Work = function (work) {
    var that = this;
    (function (work, that) {
        switch (work) {
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天成醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = '这是一种艺术';
                break;
            case 'Teacher':
                that.work = '教师';
                that.workDescript = '很圣神的职位';
                break;
            default :
                that.work = '未知';
                that.workDescript = '没有职位信息';
        }
    })(work, that);
};

Work.prototype = {
    changeWork: function (work) {
        this.work = work;
    },
    changeDescript: function (serence) {
        this.workDescript = serence;
    }
};

var Person = function (name, work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
};

var person = new Person('xiao ming', 'code');
console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.name.SecondName);
console.log(person.work.workDescript);
console.log(person.work.work);

















