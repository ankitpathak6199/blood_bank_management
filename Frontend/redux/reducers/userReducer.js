
const userInfo =(state={userInfo: false ,loading: false, error: false}, actions)=>{

  switch(actions.type)
  {
      case 'user_info_loading':
          {
               return {...state, loading: true,error: false};
          }
      case 'user_info_success':
          {
              return {...state, loading: false , error: false , userInfo: actions.payload};
          }
      case 'user_info_failure':
          {
               return {...state, loading: false, error: actions.payload}
          }
      case 'user_register_success':
            {
                return {...state, loading: false , error: false , userInfo: actions.payload};
            }
      case 'user_register_failure':
            {
                 return {...state, loading: false, error: actions.payload};
            }
      default:
              return state;
  }
}
export {userInfo};