import {get} from 'lodash';

export const getQuestions = (state = {}) => (
    get(state, 'questions.items', {})
)

export const getIsLoadingQuestions = (state) => (
    get(state, 'questions.isLoading', false)
)

export const getIsLoadingSavingQuestion = (state) => (
    get(state, 'questions.isLoadingSavingQuestion', false)
)
