/**
 * Created by liumingming on 16/4/27.
 */
var Java = function (content) {
    this.content = content;
    (function (content) {
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = 'green';
        document.getElementById('container').appendChild(div);
    })(content);
};

var Php = function (content) {
    this.content = content;
    (function (content) {
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = 'yellow';
        document.getElementById('container').appendChild(div);
    })(content);
};

var Javascript = function (content) {
    this.content = content;
    (function (content) {
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = 'yellow';
        document.getElementById('container').appendChild(div);
    })(content);
};

var JobFactory = function (type, content) {
    switch (type) {
        case 'Java':
            return new Java(content);
        case 'php':
            return new Php(content);
        case 'JavaScript':
            return new Javascript(content);
    }
};

//安全工厂模式
var Factory = function (type, content) {
    if (this instanceof  Factory) {
        var s = new this[type](content);
    } else {
        return new Factory(type, content);
    }
};

Factory.prototype = {
    Java: function
        (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = 'green';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    Php: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = 'yellow';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    JavaScript: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = 'yellow';
            document.getElementById('container').appendChild(div);
        })(content);
    }
};

var data = [
    {type: 'JavaScript', content: 'Javascript哪家强'},
    {type: 'Java', content: 'Java哪家强'},
    {type: 'Php', content: 'Php哪家强'}
];

for (var i = 0; i < data.length; i++) {
    Factory(data[i].type, data[i].content);
}

















