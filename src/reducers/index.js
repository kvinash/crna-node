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
    case "loginUser_PENDING": {
      return {...state};
      break;
    }
    case "loginUser_FULFILLED": {
      let userResponse = action.payload["data"];
     
      return {...state, userResponse};
      break;
    }
   
    default :return state
  }
    
};
export default reducer;
