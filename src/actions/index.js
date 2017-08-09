

import Constant from './constants';
import 'whatwg-fetch'
//import axios from 'axios';
console.log(Constant.login)
export const login = userData => ({
  type: "LoginUser",
  payload: fetch(Constant.login , {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  }).then(function(response) {
      console.log(response)
    return response.json()
  }).then(function(json) {
      console.log(json)
      return json
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
});
     

