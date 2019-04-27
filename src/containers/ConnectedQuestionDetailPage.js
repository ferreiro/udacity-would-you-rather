import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {QuestionDetailPage} from '../pages/QuestionDetailPage';

const mapStateToProps = (state) => {
    console.log(state)
    
    return ({
        users: state.users
    })
}

const mapDispatchToProps = () => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionDetailPage)
