import { 
    createAction,
    ActionType,
    createReducer
 } from 'typesafe-actions'

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
//() => ({ type : INCREASE })
export const decrease = createAction(DECREASE)();
//= () => ({ type : DECREASE })
export const increaseBy = createAction(INCREASE_BY)<number>(); 
/*(diff : number) => ({
    type : INCREASE_BY,
    payload : diff
})*/

const actions = { increase, decrease, increaseBy };
/*
ActionType을 사용 할 때에는 이렇게 actions 라는 객체에 
모든 액션 생성함수를 넣은 다음에, ActionType로 감싸주시면 됩니다.
*/
type CounterAction = ActionType<typeof actions>;

type CounterState = {
    count : number;
};

const initialState: CounterState = {
    count : 0
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE] : state => ({ count : state.count + 1 }),
    [DECREASE] : state => ({ count : state.count - 1 }),
    [INCREASE_BY] : (state, action) => ({ count : state.count + action.payload })
});

export default counter;
