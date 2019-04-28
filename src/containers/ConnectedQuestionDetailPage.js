import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {QuestionDetailPage} from '../pages/QuestionDetailPage';
import { getDisplayAnsweredQuestions } from '../redux/selectors/settings';
import { displayAnsweredQuestions, displayUnansweredQuestions } from '../redux/actions/settings';
import { getUsers, getIsLoadingUsers, getActiveUser } from '../redux/selectors/users';
import { getQuestions, getIsLoadingQuestions } from '../redux/selectors/questions';
import { loadDetatilPageInitialData } from '../redux/actions/initialData';


const mapStateToProps = (state) => {
    console.log(state)
    
    return ({
        activeUser: getActiveUser(state),
        users: getUsers(state),
        questions: getQuestions(state),
        isLoading: getIsLoadingQuestions(state) && getIsLoadingUsers(state)
    })
}

const mapDispatchToProps = {
    loadInitialData: loadDetatilPageInitialData,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionDetailPage)
