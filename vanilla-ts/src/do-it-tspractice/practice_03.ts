// 일반 객체를 interface 타입을 지정하기
interface Person {
    name : string;
    age ? : number; // 물음표를 지정하면 값이 들어가도 되고 안들어가도 됨
}

// 형태가 비슷할 경우 extends(상속)이 가능하다.

/*interface Developer {
    name : string;
    age ? : number;
    skills : string[];
}*/

interface Developer extends Person {
    skills : string[];
}

const person : Person =  {
    name : '김사랑',
    age : 20
}

const expert : Developer = {
    name : '최원오',
    age : 31,
    skills : ['javascript', 'react', 'css']
}

const people : Person[] = [person, expert];

