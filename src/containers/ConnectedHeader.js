import {connect} from 'react-redux';

import {loadUsers} from '../redux/actions/users';
import {logoutUser} from '../redux/actions/login';
import {getActiveUser} from '../redux/selectors/users';
import {Header} from '../components/header/Header';

const mapStateToProps = (state) => {
    return {
        user: getActiveUser(state)
    }
}

const mapDispatchToProps = {
    loadUsers,
    logoutUser,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

