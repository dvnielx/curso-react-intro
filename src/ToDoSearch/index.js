import React from 'react';
import './ToDoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToDoContext } from '../ToDoContext';


function ToDoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(ToDoContext);

  return (
    <div>
      <input
        type="text"
        className="todo-search-input"
        placeholder="Meeting with the team @ 5"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
      <FontAwesomeIcon icon={faSearch} className="todo-search-icon" />
    </div>
  );
};

export { ToDoSearch };
