import React from 'react';
import Profile from './components/profile';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Register from './register';
function App() {
  return (
 
    <div className="App">
<<<<<<< HEAD
      <Register />
=======
      
        <Routes>
        <Route path = "/" element = {<Profile/>}/>
        <Route path = "/profile" />
        </Routes>
     
      
      
>>>>>>> 002cc7fd2613e8bff486e5c1d8ad5875976cd635
    </div>
    
  );
}

export default App;
