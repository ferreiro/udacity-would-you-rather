import {
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILURE,
} from '../actions/users';
import {
    SAVE_ANSWER,
    SUBMIT_QUESTION_SUCCESS
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
        case SUBMIT_QUESTION_SUCCESS:
            const {author, id} = payload;

            // NB: Adding one more question into the user.
            const copiedUser = state.items[author]
            copiedUser.questions = [...copiedUser.questions, id]

            return {
                ...state,
                ...{
                    items: {
                        ...state.items,
                        ...{[author]: copiedUser}
                    }
                }
            }
        case SAVE_ANSWER:
            const {answer, userId, questionId} = payload;
            const user = state.items[userId]

            // NB: Prevent first duplicates or changing votes
            if (user.answers[questionId] !== undefined) {
                return state;
            }

            user.answers[questionId] = answer;

            return {
                ...state,
                items: {
                    ...state.items,
                    ...{[userId]: user}
                }
            }
        default:
            return state;
    }
}