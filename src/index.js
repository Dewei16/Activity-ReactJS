import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import Form from "./Form";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form />
  </React.StrictMode>
);