import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({children}) {

    const {
        item: ToDos,
        saveItem: saveToDos,
        loading,
        error }
        = useLocalStorage('ToDos_v1', []);

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
    <ToDoContext.Provider value={{
        loading,
        error,
        completedToDos,
        totalToDos,
        searchedToDos,
        completeToDo,
        deleteToDo,
        searchValue,
        setSearchValue
    }}>
        {children}
    </ToDoContext.Provider>
    );
};

export { ToDoContext, ToDoProvider };