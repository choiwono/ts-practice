import React from 'react';
import './App.css';
import Counter from './containers/CounterContainers'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'

function App() {
  return (
    <>
    <Counter />
    <TodoInsert/>
    <TodoList/>
    </>
  );
}

export default App;
