import React from "react";
import { ToDoCounter } from "../ToDoCounter/index.js";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { LoadingToDos } from '../LoadingToDos/index';
import { ToDosError } from '../ToDosError';
import { NoToDos } from '../NoToDos/NoToDos';
import { CreateToDoButton } from "../CreateToDoButton/index.js";
import { Modal } from '../Modal';
import '../Modal/Modal.css';
import { ToDoContext } from '../ToDoContext';


function AppUI() {

  const {
    loading,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        {loading && <LoadingToDos />}
        {error && <ToDosError />}
        {(!loading && searchedToDos.length === 0) && <NoToDos />}

        {searchedToDos.map((ToDo) => (
          <ToDoItem
            key={ToDo.text}
            text={ToDo.text}
            completed={ToDo.completed}
            onComplete={() => completeToDo(ToDo.text)}
            onDelete={() => deleteToDo(ToDo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton 
      setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
          <p className="create-to-do" >Create a To-Do!</p>
          <button className="close-modal" onClick={closeModal}>Close</button>
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };
