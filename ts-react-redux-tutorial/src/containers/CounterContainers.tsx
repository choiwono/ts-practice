import React from 'react'
//import { useSelector, useDispatch } from 'react-redux';
//import { RootState } from '../modules'
//import { increase, decrease, increaseBy } from '../modules/counter'
import Counter from '../components/Counter'
import useCounter from '../hooks/useCounter'

function CounterContainer() {
    /*const count = useSelector((state : RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }*/
    const { count, onDecrease, onIncrease, onIncreaseBy } = useCounter();

    return (
        <Counter 
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
}

export default CounterContainer;