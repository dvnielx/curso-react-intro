import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// we create the const root that calls reactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // render is a method that allows us to renderize the app
