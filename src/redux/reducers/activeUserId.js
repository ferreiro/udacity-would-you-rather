import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../actions/login';

const initialState = null;

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_SUCCESS:
            const {id: userId} = payload;

            return userId
        case LOGOUT_SUCCESS:
            return null;
        default:
            return state;
    }
}