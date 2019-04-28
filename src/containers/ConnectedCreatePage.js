import {connect} from 'react-redux';

import {submitQuestion} from '../redux/actions/questions';
import {CreatePage} from '../pages/CreatePage'
import { getIsLoadingSavingQuestion } from '../redux/selectors/questions';

const mapStateToProps = (state) => ({
    activeUserId: state.activeUserId,
    isLoadingSavingQuestion: getIsLoadingSavingQuestion(state)
})

const mapDispatchToProps = {
    submitQuestion,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage)