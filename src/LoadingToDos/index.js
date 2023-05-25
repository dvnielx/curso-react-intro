import React from 'react';
import './LoadingToDos.css';

function LoadingToDos() {
  return (
    <div className="loading-container">
      <p className="loading-text">Loading</p>
      <div className="loading-spinner"></div>
    </div>
  );
}

export { LoadingToDos };
