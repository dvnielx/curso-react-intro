import React from 'react';
import { ToDoIcon } from './ToDoIcon';
import './ToDoItem.css';


function CompleteIcon() {
    return (
        <ToDoIcon 
        type="check"/>
      )
    }

export { CompleteIcon }