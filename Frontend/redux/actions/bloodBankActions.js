import Axios from 'axios';


const bloodBankList =(location)=>async (dispatch,getstate)=>{
    dispatch({type: 'bloodBankList_loading'});
  try
  {
   
    const {data}= await Axios.get('/bloodBankList',{location}); //maybe some change in URL

    if(data)
    {
       dispatch({type: 'bloodBankList_success', payload: data});
    }
    else{
        dispatch({type: 'bloodBankList_failure', payload:'BloodBank not found'});
    }

  }
  catch(e){
    dispatch({type: 'bloodBankList_failure',payload: e.message});
  }
 }
const bloodBankInfo=(id)=>async(dispatch,getstate)=>{
  dispatch({type:'bloodBankInfo_loading'});
  try{
      const {data}=await Axios.get(`/bloodBankInfo/:${id}`);
      if(data)
      {
         dispatch({type: 'bloodBankInfo_success', payload: data}); 
      }
      else{
          dispatch({type: 'bloodBankInfo_failure', payload:'BloodBank not found'}); 
      }
  }
  catch(e)
  {
      dispatch({type: 'bloodBankInfo_failure',payload: e.message});
  }
}

export {bloodBankList,bloodBankInfo};