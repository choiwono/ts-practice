// Type Alias 사용하기

/*

type은 특정 타입에 별칭을 붙이는 용도로 사용한다. 이를 사용하면 객체를 위한 타입을 설정할 수 도 있고, 
배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.

*/

type Human = {
    name : string;
    age ? : number;
}

type FrontDeveloper = Person & {
    skills: string[]
}

const human : Person = {
    name : '김사랑'
}

const frontExpert : Developer = {
    name : '김개발',
    age : 31,
    skills : ['javascript', 'react']
}

// Person[]을 이제 People 이라는 타입으로 사용할 수 있습니다.
type People = Person[];
const peoples : People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const newColor : Color = 'red';
const newColors : Color[] = ['red','orange'];

