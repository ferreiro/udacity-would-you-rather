import {connect} from 'react-redux';

import {QuestionListPage} from '../pages/QuestionListPage';
import { getDisplayAnsweredQuestions } from '../redux/selectors/settings';
import { displayAnsweredQuestions, displayUnansweredQuestions } from '../redux/actions/settings';
import { getUsers, getIsLoadingUsers, getActiveUser } from '../redux/selectors/users';
import { loadUsers } from '../redux/actions/users';
import { loadQuestions } from '../redux/actions/questions';
import { getQuestions, getIsLoadingQuestions } from '../redux/selectors/questions';

const mapStateToProps = (state) => {
    console.log('ConnectedQuestionlistPage');
    console.log(state);

    return ({
        activeUser: getActiveUser(state),
        users: getUsers(state),
        displayAnsweredQuestions: getDisplayAnsweredQuestions(state),
        questions: getQuestions(state),
        isLoading: getIsLoadingQuestions(state) && getIsLoadingUsers(state)
    })
}

const mapDispatchToProps = {
    loadUsers,
    loadQuestions,
    onDisplayAnsweredQuestions: displayAnsweredQuestions,
    onDisplayUnansweredQuestions: displayUnansweredQuestions,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionListPage);

