function sum(x:number, y:number) : number {
    return x+y;
}

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);

// 리턴할 값이 없는 경우
function nothingReturnValue() : void {
    console.log(" i am just saying hello world");
}

// interface
// Shape 인터페이스를 구현 하는 클래스는 
// 반드시, getArea라는 함수를 가지고 있어야 하며, 리턴값은 넘버입니다.
interface Shape {
    getArea() : number;
}

class Circle implements Shape {
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
//console.log(rectangle.width);

const shapes : Shape[] = [new Circle(5), new Rectangle(10,5)]

shapes.forEach(shape => console.log(shape.getArea()))