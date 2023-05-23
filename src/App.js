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
  {text: 'Learn states and hooks', completed: true},
]

function App() {
  const [ToDos, setToDos] = React.useState
  (defaultToDos)
  const [searchValue, setSearchValue] = React.
  useState('');

  const completedToDos = ToDos.filter(ToDo => !!ToDo.completed).length;
  const totalToDos = ToDos.length;

  const searchedToDos = ToDos.filter( //estado derivado
    (ToDo) => {
     return ToDo.text.toLowerCase().includes(searchValue)
    }
  );

  console.log('You searched ' + searchValue)

  const completeToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(
      (ToDo) => ToDo.text == text
    );
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos)
  };

  const deleteToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(
      (ToDo) => ToDo.text == text
    );
    newToDos.splice(toDoIndex, 1)
    setToDos(newToDos)
  };

  return (
    <React.Fragment>

      <ToDoCounter 
      completed={completedToDos} 
      total={totalToDos} />

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

      <ToDoList>
        {searchedToDos.map(ToDo => (
          <ToDoItem 
          key={ToDo.text} 
          text={ToDo.text}
          completed={ToDo.completed}
          onComplete={() => completeToDo(ToDo.text)}
          onDelete={() => deleteToDo(ToDo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton/>

    </React.Fragment>
  );
}


export default App;
