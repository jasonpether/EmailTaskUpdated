import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice 'client' here
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root and use `createRoot` instead of `render`
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
