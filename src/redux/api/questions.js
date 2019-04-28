import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../../_DATA";

export const fetchQuestions = () => (
    _getQuestions()
)

export const saveQuestion = (question) => (
    _saveQuestion(question)
)

export const saveAnswer = (authedUser, qid, answer) => (
    _saveQuestionAnswer({authedUser, qid, answer})
)

