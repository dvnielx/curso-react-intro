import React from 'react';
import './ToDoItem.css';
import { CompleteIcon } from './CompleteIcon.js';
import { DeleteIcon } from './DeleteIcon.js';

function ToDoItem(props) {
  return (
    <li className="todo-item">
      {/* <CompleteIcon /> */}

      <span className={`todo-item-check ${props.completed && "icon-check-active"}`}
      onClick={props.onComplete} > 
      &#x2713;
      </span>
      <p className={`todo-item-text ${props.completed && "todo-item-completed"}`}
      >{props.text}
      </p>

      {/* <DeleteIcon /> */}

      <span 
      className="todo-item-delete"
      onClick={props.onDelete}
      >X</span>
    </li>
  );
}

export { ToDoItem };
