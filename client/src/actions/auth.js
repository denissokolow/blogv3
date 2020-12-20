//import { startSession } from 'mongoose';
import { AUTH_ON_OFF } from './types';

const status = (stat) => (dispatch) =>{
    dispatch({
    type: AUTH_ON_OFF,
    payload: {
        login: stat.login,
        user: stat.user,
    }        
    });

}

export {status}