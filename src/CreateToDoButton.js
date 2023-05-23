import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CreateToDoButton.css';

function CreateToDoButton() {
  return (
    <button className="create-todo-button"
    onClick={
      ()=> console.log("1989")
    }>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export { CreateToDoButton };
