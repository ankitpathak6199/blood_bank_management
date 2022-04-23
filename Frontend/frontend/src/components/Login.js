import React,{useEffect, useState} from 'react';
import { signIn } from '../redux/actions/userActions';

import { Routes ,Route } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  



   
  
  
  return (
 
    <div className="Login">



<div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required onChange={e=>{setemail(e.target.value)}}/>

    <div class="pw">
    <label for="psw"><b>Password</b></label>
    <input type="text" placeholder="Enter Password" name="psw" required onChange = {e => {setpassword(e.target.value)}}/>
    </div>
    
    
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
    
    

    <div class="clearfix">
      <button type="button" class="cancelbtn" onClick={e=>{console.log({email,password})}}>Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
      
      

        </div>
        
      

    
    

    


     
      
      
  );
}

export default Login;
