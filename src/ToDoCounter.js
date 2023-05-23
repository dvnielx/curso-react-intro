import React from 'react'
import './ToDoCounter.css';

function ToDoCounter ({total, completed}) {
    return (
        <h1> You have completed {completed} out ot {total} To-Do's</h1>
    );
}

export { ToDoCounter };