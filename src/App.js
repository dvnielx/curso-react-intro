import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import './App.css';

function App() {
  return (
    <div className="App">

      <ToDoCounter/>
      <ToDoSearch/>

      <ToDoList>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ToDoList>

    <CreateToDoButton/>

    </div>
  );
}

function ToDoItem (){
  return (
    <li> 
      <span> V </span>
      <p> Completar curso de React </p>
      <span> X </span>
    </li>
  )
}
export default App;
