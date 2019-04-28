import { SAVE_ANSWER, SUBMIT_QUESTION_SUCCESS, LOAD_QUESTIONS_REQUEST, LOAD_QUESTIONS_SUCCESS, LOAD_QUESTIONS_FAILURE } from "../actions/questions";
import { OPTION_ONE, OPTION_TWO } from "../../components/question/Question";

const initialState = {
    isLoading: false,
    items: {},
    error: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_QUESTIONS_REQUEST:
            return {...state, isLoading: true};
        case LOAD_QUESTIONS_SUCCESS:
            return {...state, isLoading: false, items: payload};
        case LOAD_QUESTIONS_FAILURE:
            return {...state, isLoading: false, error: payload};
        case SUBMIT_QUESTION_SUCCESS:
            const {id} = payload;

            return {
                ...state,
                items: {
                    ...state.items,
                    ...{[id]: payload}
                }
            }
        case SAVE_ANSWER:
            const {answer, userId, questionId} = payload;
            const question = state.items[questionId]

            // NB: Prevent first duplicates or changing votes
            if (question[OPTION_ONE].votes.includes(userId)
                || question[OPTION_TWO].votes.includes(userId)) {
                return state;
            }

            question[answer].votes = [...question[answer].votes, userId]

            return {
                ...state,
                items: {
                    ...state.items,
                    ...{questionId: question}
                }
            }
        default:
            return state;
    }
}