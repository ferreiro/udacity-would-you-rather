import {fetchQuestions, saveQuestion} from '../api/questions';

export const LOAD_QUESTIONS_REQUEST = 'questions/load-questions-request';
export const LOAD_QUESTIONS_SUCCESS = 'questions/load-questions-success';
export const LOAD_QUESTIONS_FAILURE = 'questions/load-questions-failure';
export const SAVE_ANSWER = 'questions/save-answer';
export const SUBMIT_QUESTION_REQUEST = 'questions/submit-question-request';
export const SUBMIT_QUESTION_SUCCESS = 'questions/submit-question-success';
export const SUBMIT_QUESTION_FAILURE = 'questions/submit-question-failure';

const loadQuestionsRequest = () => ({
    type: LOAD_QUESTIONS_REQUEST
})

const loadQuestionsSuccess = (questions) => ({
    type: LOAD_QUESTIONS_SUCCESS,
    payload: questions
})

const loadQuestionsFailure = (error) => ({
    type: LOAD_QUESTIONS_FAILURE,
    payload: error,
})

const saveAnswer = (userId, questionId, answer) => ({
    type: SAVE_ANSWER,
    payload: {
        userId,
        questionId,
        answer
    }
})

const submitQuestionRequest = () => ({
    type: SUBMIT_QUESTION_REQUEST
})

const saveQuestionSuccess = (formattedQuestion) => ({
    type: SUBMIT_QUESTION_SUCCESS,
    payload: formattedQuestion
})

const saveQuestionFailure = (error) => ({
    type: SUBMIT_QUESTION_FAILURE,
    payload: error
})

// TODO: Use the API that they give us...

export const loadQuestions = () => (dispatch) => {
    dispatch(loadQuestionsRequest)
    
    return fetchQuestions().then((questions) => (
        dispatch(loadQuestionsSuccess(questions))  
    )).catch((error) => (
        dispatch(loadQuestionsFailure(error))
    ))
}

export const submitAnswer = (user, questionId, answer) => (dispatch) => (
    dispatch(saveAnswer(user.id, questionId, answer))
)

export const submitQuestion = ({
    optionOneText,
    optionTwoText,
    author
}) => (dispatch) => {
    dispatch(submitQuestionRequest())

    return saveQuestion({
        optionOneText,
        optionTwoText,
        author,
    }).then((formattedQuestion) => {
        dispatch(saveQuestionSuccess(formattedQuestion))
    }).catch((error) => {
        dispatch(saveQuestionFailure(error))
    })       
}
