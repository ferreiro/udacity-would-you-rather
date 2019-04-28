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
        case SAVE_ANSWER:
            const {
                userId,
                questionId,
                answer
            } = payload;

            console.log('SAVE_ANSWER')

            let user = state.items[userId]
            console.log(user)
            user.answers[questionId] = answer;

            console.log(user)

            return {
                ...state,
                items: {
                    ...state.items,
                    ...user
                }
            }
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