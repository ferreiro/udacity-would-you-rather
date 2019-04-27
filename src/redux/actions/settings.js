export const SET_SETTINGS_DISPLAY_ANSWERED_QUESTIONS = 'settings/set-display-answered-questions'

export const setDisplayAnsweredQuestions = (payload) => ({
    type: SET_SETTINGS_DISPLAY_ANSWERED_QUESTIONS,
    payload,
})

export const displayAnsweredQuestions = () => (dispatch) => {
    dispatch(setDisplayAnsweredQuestions(true))
}

export const displayUnansweredQuestions = () => (dispatch) => {
    dispatch(setDisplayAnsweredQuestions(false))
}