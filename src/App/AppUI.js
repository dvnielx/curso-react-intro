import React from "react";
import { ToDoCounter } from "../ToDoCounter/index.js";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton/index.js";

function AppUI({
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
