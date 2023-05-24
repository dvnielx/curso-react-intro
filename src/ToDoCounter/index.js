import React from 'react'
import './ToDoCounter.css';

function ToDoCounter ({total, completed}) {
    return (
        <h1 className='To-Do-Counter'> You have completed <span> {completed}</span> out of <span> {total} </span> To-Do's</h1>
    );
}

export { ToDoCounter };