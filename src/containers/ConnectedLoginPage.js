import {connect} from 'react-redux';

import {loadUsers} from '../redux/actions/users';
import {loginUser} from '../redux/actions/login';
import {getUsers} from '../redux/selectors/users';
import {LoginPage} from '../pages/LoginPage';

const mapStateToProps = (state) => {
    return {
        activeUserId: state.activeUserId,
        users: getUsers(state)
    }
}

const mapDispatchToProps = {
    loadUsers,
    loginUser,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

