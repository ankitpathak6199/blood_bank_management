import React from 'react';
import Profile from './components/profile';
import UserProfile from './components/UserProfile';
import { Routes ,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
 
    <div className="App">
      
        <Routes>
        <Route path = "/" element = {<Profile/>}/>
        
        <Route path="/user/:user_id" element = {<UserProfile Name = {"Ankit"} Phone_no={6203984762} email = {"ankit.pathak.1500@gmail.com"} Age = {"21"} Blood_group = {"B+"} location = "abcd" />}/>
        </Routes>
     
      
      
    </div>
    
  );
}

export default App;
