import {connect} from 'react-redux';

import {loadUsers} from '../redux/actions/users';
import {getActiveUser} from '../redux/selectors/users';
import {Header} from '../components/header/Header';

const mapStateToProps = (state) => {
    console.log('ConnectedQuestionlistPage');
    console.log(state);

    return {
        user: getActiveUser(state)
    }
}

const mapDispatchToProps = {
    loadUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

