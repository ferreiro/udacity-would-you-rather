import { _getQuestions, _saveQuestion } from "../../_DATA";

export const fetchQuestions = () => (
    _getQuestions()
)

export const saveQuestion = (question) => (
    _saveQuestion(question)
)