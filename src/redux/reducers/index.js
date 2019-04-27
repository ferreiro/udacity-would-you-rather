import {combineReducers} from 'redux';

import activeUserId from './activeUserId';
import users from './users';
import questions from './questions';

export default combineReducers({
    activeUserId,
    questions,
    users,
})