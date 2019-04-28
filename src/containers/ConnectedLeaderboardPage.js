import {connect} from 'react-redux';

import {loadUsers} from '../redux/actions/users';
import {LeaderboardPage} from '../pages/LeaderboardPage'
import {getUsers, getIsLoadingUsers} from '../redux/selectors/users';

const mapStateToProps = (state) => {
    return {
        activeUserId: state.activeUserId,
        users: getUsers(state),
        isLoading: getIsLoadingUsers(state),
    }
}

const mapDispatchToProps = {
    loadUsers,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardPage)