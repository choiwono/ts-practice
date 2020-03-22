// Generics

/*
제네릭은 타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때 여러종류의 타입에 대하여 
호환을 맞춰야 하는 상황에서 유용한 문법입니다.
*/

function merge<A, B>(a : A, b: B) : A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar : 1 });

function wrap<T>(param: T) {
    return {
        param
    }
}

const Wrapped = wrap(10);

interface Items<T> {
    list : T[];
}

const items : Items<string> = {
    list : ['a','b','c']
};

// type에서 generic 선언

type typeItems<T> = {
    list : T[];
}

const typeitems : typeItems<string> = {
    list : ['a', 'b', 'c']
}

// 클래스에서 generic 선언하기

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }
    
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

