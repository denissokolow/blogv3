import { AUTH_ON_OFF } from './types';

const status = (stat) => (dispatch) =>{
    dispatch({
    type: AUTH_ON_OFF,
    payload: {
        login: stat,
        username: ''
    }        
    });

}

export {status}