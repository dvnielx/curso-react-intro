import React from 'react'
import './ToDoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ToDoSearch = () => {
  return (
    <div>
      <input type="text" className="todo-search-input" placeholder="Meeting with the team @ 5" />
      <FontAwesomeIcon icon={faSearch} className="todo-search-icon" />
    </div>
  );
};

export { ToDoSearch};
