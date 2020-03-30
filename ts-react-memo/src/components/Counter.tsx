import * as React from 'react';

export interface CounterProps {
    name : string;
}

export interface CounterState {
    count : number;
}

const Counter: React.FC<CounterProps> = props => {
    const { name } = props;
return <p>{name} counter</p>
}

export default Counter;