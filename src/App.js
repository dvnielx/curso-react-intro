import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';

const defaultToDos = [
  {text: 'Meeting @ 5', completed: false},
  {text: 'Watch course', completed: false},
  {text: 'SQL course', completed: false},
  {text: 'Meeting @ 9', completed: false},
  {text: 'Run errands', completed: true},
  {text: 'Interview', completed: true},
  {text: 'Finish React.js course', completed: true},
  {text: 'Install new MacOS', completed: true},
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
