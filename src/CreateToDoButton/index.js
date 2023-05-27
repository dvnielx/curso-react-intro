import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CreateToDoButton.css';

function CreateToDoButton({setOpenModal}) {
 
  return (
    
    <button className="create-todo-button" onClick={
      () => {
        setOpenModal(state => !state)
      }
    } >
      <FontAwesomeIcon icon={faPlus}  />
    </button>
  );
}

export { CreateToDoButton }
