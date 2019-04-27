import {SET_SETTINGS_DISPLAY_ANSWERED_QUESTIONS} from "../actions/settings";

const initialState = {
    displayAnsweredQuestions: false,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_SETTINGS_DISPLAY_ANSWERED_QUESTIONS:
            return {...state, displayAnsweredQuestions: payload}
        default:
            return state
    }
}

