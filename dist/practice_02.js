"use strict";
function sum(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// 리턴할 값이 없는 경우
function nothingReturnValue() {
    console.log(" i am just saying hello world");
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius);
//console.log(rectangle.width);
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) { return console.log(shape.getArea()); });
