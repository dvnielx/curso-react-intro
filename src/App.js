import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';

const defaultToDos = [
  {text: 'Meeting @ 5', completed: true},
  {text: 'Watch course', completed: true},
  {text: 'SQL course', completed: true},
  {text: 'Meeting @ 9', completed: true}
]

function App() {
  return (
    <React.Fragment>

      <ToDoCounter completed={16} total={25} />
      <ToDoSearch/>

      <ToDoList>
        {defaultToDos.map(ToDo => (
          <ToDoItem 
          key={ToDo.text} 
          text={ToDo.text}
          completed={ToDo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton/>

    </React.Fragment>
  );
}


export default App;
