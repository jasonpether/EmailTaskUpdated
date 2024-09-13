import './App.css'
import React from 'react'
import HomePage from './routes/HomePage'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import NavigationBar from './routes/NavigationBar';
import SignUpTest from './routes/SignUpTest';

function App() {
  return (
    <Routes>
    <Route path='/' element={<NavigationBar/>}>
      <Route index element={<HomePage/>} />
      <Route path='/Login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpTest/>} />
    </Route>
    
    </Routes>
  );
}
export default App;
