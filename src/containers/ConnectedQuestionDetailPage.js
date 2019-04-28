import {connect} from 'react-redux';

import {QuestionDetailPage} from '../pages/QuestionDetailPage';
import {submitAnswer} from '../redux/actions/questions';
import {getUsers, getIsLoadingUsers, getActiveUser} from '../redux/selectors/users';
import {getQuestions, getIsLoadingQuestions} from '../redux/selectors/questions';
import {loadDetatilPageInitialData} from '../redux/actions/initialData';


const mapStateToProps = (state) => {    
    return ({
        activeUser: getActiveUser(state),
        users: getUsers(state),
        questions: getQuestions(state),
        isLoading: getIsLoadingQuestions(state) && getIsLoadingUsers(state)
    })
}

const mapDispatchToProps = {
    loadInitialData: loadDetatilPageInitialData,
    submitAnswer,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionDetailPage)
