import {get} from 'lodash';

export const getDisplayAnsweredQuestions = (state) =>
    get(state, 'settings.displayAnsweredQuestions')