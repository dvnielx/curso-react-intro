import React from 'react';
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import './ToDoItem.css';

const iconTypes = {
    "check": <CheckSVG />,
    "delete": <DeleteSVG />,
};

function ToDoIcon({ type }) {
  return (
    <span
    className={`icon-svg icon-${type}`}
    > 
     {iconTypes[type]}
    </span>
  )
}

export { ToDoIcon } 