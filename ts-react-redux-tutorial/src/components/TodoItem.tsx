import React from 'react'
import './TodoInsert';
import { Todo } from '../modules/todos';
import '../css/TodoItem.css'
import useTodoActions from '../hooks/useTodoActions';

export type TodoItemProps = {
    todo: Todo;
};

function TodoItem({ todo } : TodoItemProps) {
    const { onToggle, onRemove } = useTodoActions(todo.id);

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>{todo.text}</span>
            <span className="remove" onClick={onRemove}>(X)</span>
        </li>
    );
} 
export default TodoItem;