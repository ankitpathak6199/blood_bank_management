import React from 'react';

import { Routes ,Route } from 'react-router-dom';
import '../App.css';

function Login() {
  return (
 
    <div className="Login">



<div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <div class="pw">
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    </div>
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
    
    

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
      
      

        </div>
        
      

    
    

    


     
      
      
  );
}

export default Login;
