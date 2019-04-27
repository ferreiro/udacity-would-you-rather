import {fetchQuestions} from '../api/questions';

export const LOAD_QUESTIONS_REQUEST = 'questions/load-questions-request';
export const LOAD_QUESTIONS_SUCCESS = 'questions/load-questions-success';
export const LOAD_QUESTIONS_FAILURE = 'questions/load-questions-failure';

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

export const loadQuestions = () => (dispatch) => {
    dispatch(loadQuestionsRequest);

    return fetchQuestions().then((questions) => (
        dispatch(loadQuestionsSuccess(questions))  
    )).catch((error) => (
        dispatch(loadQuestionsFailure(error))
    ))
}