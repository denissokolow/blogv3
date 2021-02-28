import update from 'immutability-helper';
import { AUTH_ON_OFF } from '../actions/types';


const initialState = {
    login: '',
    user: '',
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case AUTH_ON_OFF:
            return update(state, {
                login: { $set: action.payload.login },
                user: { $set: action.payload.user },
            });
        default:
            return state;
    }

}

export default reducer;