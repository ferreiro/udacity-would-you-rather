import {connect} from 'react-redux';

import {submitQuestion} from '../redux/actions/questions';
import {CreatePage} from '../pages/CreatePage'

const mapStateToProps = (state) => ({
    activeUserId: state.activeUserId
})

const mapDispatchToProps = {
    submitQuestion,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage)