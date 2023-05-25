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

function AppUI() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      
      <ToDoContext.Consumer> 
       {({
         loading,
         error,
         searchedToDos,
         completeToDo,
         deleteToDo,
       }) => (
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
       )}
      </ToDoContext.Consumer>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export { AppUI };
