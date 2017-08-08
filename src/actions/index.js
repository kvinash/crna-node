

import Constant from './constants';
import axios from 'axios';

export const login = (userData) =>({
    type:'loginUser',
    payload : axios.post(Constant.login, userData)
    }).then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    });
