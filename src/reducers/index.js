import { combineReducer } from "redux";

const State = {
  products :[],
  delete_bool: false
};

export const getEntityByKey = (state, key) => {
  if(state && state[key]){
    return state[key];
  }
  return null;
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LoginUser_PENDING": {
      break;
    }
    case "LoginUser_FULFILLED": {
      let userResponse = action.payload;
     
      return {...state, userResponse};
      break;
    }
   
    default :return state
  }
    
};
export default reducer;
