import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
} from '../actions/users';

const initialState = {
    error: null,
    isLoading: false,
    items: {},
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS_REQUEST:
            return {...state, isLoading: true}
        case GET_USERS_SUCCESS:
            return {...state, isLoading: false, items: payload} 
        case GET_USERS_FAILURE:
            return {...state, isLoading: false, error: payload}
        default:
            return state;
    }
}