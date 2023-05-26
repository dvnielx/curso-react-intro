import React from 'react'
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter ({}) {
    const {  
        completedToDos,
        totalToDos,
    } = React.useContext (ToDoContext)

    return (
        <h1 className='To-Do-Counter'> You have completed <span> {completedToDos}</span> out of <span> {totalToDos} </span> To-Do's</h1>
    );
}

export { ToDoCounter };