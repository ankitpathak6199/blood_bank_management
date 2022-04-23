
import {createStore, compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {userInfo} from './reducers/userReducers.js';
import {bloodBankList,bloodBankInfo} from './reducers/bloodBankReducer.js';



const reducer = combineReducers({
  userInfo: userInfo,
  bloodBankList: bloodBankList,
  bloodBankInfo:bloodBankInfo
})
const initialstate = {
  userInfo:{
    userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):false,
    loading: false,
    error: false,
  },
  bloodBankInfo:{
      bloodBankslist:false,
      loading: false,
      error: false,
  }  
} 
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer,initialstate,composeEnhancer(applyMiddleware(thunk))); 

export default store;