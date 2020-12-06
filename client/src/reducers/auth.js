import  update   from 'immutability-helper';
import { AUTH_ON_OFF } from '../actions/types';


const initialState = {
    login: ''
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    console.log('ACTION', action.payload);

    switch (type){
        case AUTH_ON_OFF:
            return update(state, {
                login: { $set: action.payload.login },
            });
        default:
            return state;
    }
       
}

export default reducer;