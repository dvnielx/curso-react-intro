import React from "react";

function useLocalStorage(itemName, initialValue) { //custom hook

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true); //estado, el cual es por defecto verdadero
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem
          (itemName);

        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }, 2000);
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };


// localStorage.removeItem('ToDos_v1')
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

// localStorage.setItem('ToDos_v1' JSON.stringify(defaultToDos))