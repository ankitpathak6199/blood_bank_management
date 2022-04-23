import React from 'react';
import Profile from './components/profile';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Register from './register';
import Login from './components/Login';
function App() {
  return (
 
    <div className="Login">
      <Register />
      
        <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/profile" />
        </Routes>
     
      
      
    </div>
    
  );
}

export default Login;
