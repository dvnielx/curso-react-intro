import React from 'react';
import './ToDoForm.css';

function ToDoForm() {
    return (

        <form class="Modal-form">
        <label class="create-to-do">Create a To-Do!</label>
        <textarea class="modal-textarea" placeholder="Create a To-Do!"></textarea>
        <div class="close-button-container">
            <button class="modal-close-button"></button>
        </div>
        <div class="buttons-container">
            <button class="modal-button create-todo">Create</button>
        </div>
    </form>
    



    )
};

export { ToDoForm }

// onclick={!openModal}>