import { LOAD_QUESTIONS_REQUEST, LOAD_QUESTIONS_SUCCESS, LOAD_QUESTIONS_FAILURE } from "../actions/questions";

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
        default:
            return state;
    }
}