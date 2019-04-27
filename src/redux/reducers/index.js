import {combineReducers} from 'redux';

import activeUserId from './activeUserId';
import questions from './questions';
import settings from './settings';
import users from './users';

export default combineReducers({
    activeUserId,
    questions,
    users,
    settings,
})