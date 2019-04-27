import {connect} from 'react-redux';

import {QuestionListPage} from '../pages/QuestionListPage';

const mapStateToProps = (state) => {
    console.log(state);

    return ({
        
    })
}

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionListPage);

