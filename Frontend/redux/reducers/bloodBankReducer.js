const bloodBankList =(state={bloodBankList: false ,loading: false, error: false}, actions)=>{

  switch(actions.type)
  {
      case 'bloodBankList_loading':
          {
               return {...state, loading: true,error: false};
          }
      case 'bloodBankList_success':
          {
              return {...state, loading: false , error: false , bloodBankList: actions.payload};
          }
      case 'bloodBankList_failure':
          {
               return {...state, loading: false, error: actions.payload}
          }
      default:
              return state;
  }
}
const bloodBankInfo =(state={bloodBankInfo:false,loading: false, error:false},actions)=>{
  switch(actions.type)
  {
      case 'bloodBankInfo_loading':
          {
              return {...state,loading: true,error:false};
          }
     case 'bloodBankInfo_success':
         {
             return {loading: false,error:false, bloodBankInfo:actions.payload};
         }
    case 'bloodBankInfo_failure':
        {
            return {...state,loading: false,error:true};
        }
        default:
            return state;
  }
}
export {bloodBankList,bloodBankInfo};