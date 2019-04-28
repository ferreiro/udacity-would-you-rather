import {connect} from 'react-redux';

import {QuestionListPage} from '../pages/QuestionListPage';
import {getDisplayAnsweredQuestions} from '../redux/selectors/settings';
import {displayAnsweredQuestions, displayUnansweredQuestions} from '../redux/actions/settings';
import {getUsers, getIsLoadingUsers, getActiveUser} from '../redux/selectors/users';
import {getQuestions, getIsLoadingQuestions} from '../redux/selectors/questions';
import {loadListPageInitialData} from '../redux/actions/initialData';

const mapStateToProps = (state) => {
    return ({
        activeUser: getActiveUser(state),
        users: getUsers(state),
        displayAnsweredQuestions: getDisplayAnsweredQuestions(state),
        questions: getQuestions(state),
        isLoading: getIsLoadingQuestions(state) && getIsLoadingUsers(state)
    })
}

const mapDispatchToProps = {
    loadInitialData: loadListPageInitialData,
    onDisplayAnsweredQuestions: displayAnsweredQuestions,
    onDisplayUnansweredQuestions: displayUnansweredQuestions,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionListPage);

