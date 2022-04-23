import React from 'react';
import Profile from './components/profile';
import { Routes ,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
 
    <div className="App">
      
        <Routes>
        <Route path = "/" element = {<Profile/>}/>
        <Route path = "/profile" />
        </Routes>
     
      
      
    </div>
    
  );
}

export default App;
