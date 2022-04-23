import Axios from 'axios';
import { user_register_failure,user_register_loading,user_register_success } from '../../constants';


const signIn =(email,password)=>async (dispatch,getstate)=>{
    dispatch({type: 'user_info_loading'});
  try
  {
   
    const {data}= await Axios.post('/users/login',{email, password}); //maybe some change in URL

    if(data)
    {
       dispatch({type: 'user_info_success', payload: data}) 
       localStorage.setItem('userInfo',JSON.stringify(data));
    }
    else{
        dispatch({type: 'user_info_failure', payload:'User Not found'});
    }

  }
catch(e){
    dispatch({type: 'user_info_failure',payload: e.message});
}
}

const register =(email,password,name,age,blood_group,city,state,pincode)=>async (dispatch,getstate)=>{
  dispatch({type: user_register_loading});
try
{
  const {data}= await Axios.post('http://localhost:4000/register',{name,age,blood_group,password,email,location : {
    state : state,
    city:city,
    pincode: pincode,
  },});
  console.log(data);

     dispatch({type: user_register_success, payload: data});
     localStorage.setItem('userInfo',JSON.stringify(data));

}
catch(e){
  dispatch({type: user_register_failure,payload: e.message});
}
} 
export {signIn,register};