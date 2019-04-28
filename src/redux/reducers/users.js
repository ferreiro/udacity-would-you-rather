import {
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILURE
} from '../actions/users';
import {
    SAVE_ANSWER
} from '../actions/questions';

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
        case SAVE_ANSWER:
            const {answer, userId, questionId} = payload;

            const user = state.items[userId]
            user.answers[questionId] = answer;

            return {
                ...state,
                items: {
                    ...state.items,
                    ...user
                }
            }
        default:
            return state;
    }
}