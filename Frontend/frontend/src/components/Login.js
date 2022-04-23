import React,{useEffect, useState} from 'react';
import { signIn } from '../redux/actions/userActions';

import { Routes ,Route } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  



   
  
  
  return (
 
    <div className="Login">




<<<<<<< HEAD
	 	

<html>
<head>
	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="slide navbar style.css"/>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"/>
</head>
<body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
            
			<div class="signup">
				<form>
                    
					<label for="chk" aria-hidden="true">Register</label>
                    <div class='signup_form'>
                    <input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                    </div>
                    <button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
</body>
</html>
	


=======
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
>>>>>>> 8ce1e86ebb6c5e40e911fa808d23b036560fbf77
      
      

        </div>
     
      
      
  );
}

export default Login;
