// boolean
let isDone : boolean = false;

// 숫자형
// type 스크립트는 10진수 및 16진수와 함께 2진수 및 8진수 문자를 지원한다
let decimal : number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;

// 문자열
let Color : string = "blue";
Color = 'red';

// 템플릿 문자열 또한 사용이 가능하다
let fullName : string = `Bob Bobbington`;
let age : number = 37;
let sentence : string = `Hello, my name is ${fullName}`;

// 배열

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

// 튜플
// 고정된 개수의 요소타입을 알고있지만, 반드시 같을 필요는 없을 경우

let x : [string,number];
x = ['hello', 10];

//x = [10, 'hello'];

enum w {Red = 1, Green = 2, Blue = 3}

let c : w = w.Green;

let notSure : any = 4;

// Never

// never타입은 절대로 발생하지 않는 값의 타입을 나타냅니다.
/*function f(should : boolean) {
    if (should) {
        var x = 10;
    }

    return x;
}

for (var i = 0; i < 10; i++ ) {
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

function f(input : boolean) {
    let a = 100;

    if(input) {
        let b = a + 1;
        return b;
    }

    return b;
}*/

/*function fc(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}*/




