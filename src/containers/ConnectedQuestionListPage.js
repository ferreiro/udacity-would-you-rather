import {connect} from 'react-redux';

import {QuestionListPage} from '../pages/QuestionListPage';
import { getDisplayAnsweredQuestions } from '../redux/selectors/settings';
import { displayAnsweredQuestions, displayUnansweredQuestions } from '../redux/actions/settings';

const mapStateToProps = (state) => {
    console.log(state);

    return ({
        displayAnsweredQuestions: getDisplayAnsweredQuestions(state)
    })
}

const mapDispatchToProps = {
    onDisplayAnsweredQuestions: displayAnsweredQuestions,
    onDisplayUnansweredQuestions: displayUnansweredQuestions,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionListPage);

