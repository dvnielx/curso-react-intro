import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

function ToDoForm() {
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    };

    return (

        <form onSubmit={onSubmit} class="Modal-form">
            <label class="create-to-do">Create a To-Do</label>
            <textarea 
                class="modal-textarea" 
                placeholder="Meeting with the team @5pm."
                value={newToDoValue}  
                onChange={onChange}
                >  
                </textarea>
            <div class="close-button-container">
                <button type="button" class="modal-close-button" onClick={onCancel}></button>
            </div>
            <div class="buttons-container">
                <button class="modal-button create-todo">Create</button>
            </div>
        </form>




    )
};

export { ToDoForm }

// onclick={!openModal}>