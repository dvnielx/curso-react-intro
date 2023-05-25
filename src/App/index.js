import React from 'react';
import { AppUI } from './AppUI'
import { ToDoProvider } from '../ToDoContext/index.js';

function App() {
return (
   <ToDoProvider> 
     <AppUI />
   </ToDoProvider>
  );
}

export default App;
