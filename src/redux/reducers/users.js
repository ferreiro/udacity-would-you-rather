import {
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILURE
} from '../actions/users';

const initialState = {
    error: null,
    isLoading: false,
    items: {},
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_USERS_REQUEST:
            return {...state, isLoading: true}
        case LOAD_USERS_SUCCESS:
            return {...state, isLoading: false, items: payload} 
        case LOAD_USERS_FAILURE:
            return {...state, isLoading: false, error: payload}
        default:
            return state;
    }
}