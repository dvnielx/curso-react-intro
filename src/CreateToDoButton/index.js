import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToDoContext } from '../ToDoContext';
import './CreateToDoButton.css';

function CreateToDoButton({setOpenModal}) {
// const {openModal, setOpenModal} = React.useContext(ToDoContext);
    
// const toggleModal = () => {
//   console.log('Clic en el botón');
//   setOpenModal(!openModal);
 
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
