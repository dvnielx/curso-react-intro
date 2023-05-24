
import { useLocalStorage } from './useLocalStorage.js';
import React from 'react';
import { AppUI } from './AppUI'

// const defaultToDos = [
//   {text: 'Meeting @ 5', completed: false},
//   {text: 'Watch course', completed: false},
//   {text: 'SQL course', completed: false},
//   {text: 'Meeting @ 9', completed: false},
//   {text: 'Run errands', completed: true},
//   {text: 'Interview', completed: true},
//   {text: 'Finish React.js course', completed: true},
//   {text: 'Install new MacOS', completed: true},
//   {text: 'Learn states and hooks', completed: true},
// ]

// localStorage.setItem(itemName, JSON.stringify(defaultToDos))
// localStorage.removeItem(itemName)


function App() {
  const [ToDos, saveToDos] = useLocalStorage
  ('ToDos_v1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = ToDos.filter(ToDo => !!ToDo.completed).length;
  const totalToDos = ToDos.length;

  const searchedToDos = ToDos.filter( //estado derivado
    (ToDo) => {
     return ToDo.text.toLowerCase().includes(searchValue)
    }
  );

  const completeToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(
      (ToDo) => ToDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos)
  };

  const deleteToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(
      (ToDo) => ToDo.text === text
    );
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  };
   
    
  return (
    <AppUI 
    completedToDos={completedToDos}
    totalToDos={totalToDos}
    searchedToDos={searchedToDos}
    completeToDo={completeToDo}
    deleteToDo={deleteToDo}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
  );

}


export default App;
