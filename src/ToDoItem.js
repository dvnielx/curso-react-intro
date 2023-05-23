import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {
  return (
    <li className="todo-item">
      <span className="todo-item-check">&#x2713;</span>
      <p className="todo-item-text">{props.text}</p>
      <span className="todo-item-delete">X</span>
    </li>
  );
}

export { ToDoItem };
