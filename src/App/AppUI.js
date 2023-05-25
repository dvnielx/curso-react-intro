import React from "react";
import { ToDoCounter } from "../ToDoCounter/index.js";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { LoadingToDos } from '../LoadingToDos/index';
import { ToDosError } from '../ToDosError';
import { NoToDos } from '../NoToDos/NoToDos';
import { CreateToDoButton } from "../CreateToDoButton/index.js";

function AppUI({
  loading,
  error,
  completedToDos,
  totalToDos,
  searchedToDos,
  completeToDo,
  deleteToDo,
  searchValue,
  setSearchValue
}) {
  return (
    <React.Fragment>
      <ToDoCounter completed={completedToDos} total={totalToDos} />

      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {loading && <LoadingToDos />}
        {error && <ToDosError />}
        {(!loading && searchedToDos.length === 0) && <NoToDos/>}

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

      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUI };
