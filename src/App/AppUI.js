import React from "react";
import { ToDoCounter } from "../ToDoCounter/index.js";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { LoadingToDos } from '../LoadingToDos/index';
import { ToDosError } from '../ToDosError';
import { NoToDos } from '../NoToDos/NoToDos';
import { CreateToDoButton } from "../CreateToDoButton/index.js";
import { ToDoContext } from '../ToDoContext';
import { ToDoForm } from "../ToDoForm/index.js";
import { Modal } from '../Modal';


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
          <ToDoForm />
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };
