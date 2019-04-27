import {fetchUsers} from '../api/users';

export const LOAD_USERS_REQUEST = 'get-users/requesting';
export const LOAD_USERS_SUCCESS = 'get-users/success';
export const LOAD_USERS_FAILURE = 'get-users/failure';

const requestUsers = () => ({
    type: LOAD_USERS_REQUEST,
})

const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    payload: users
})

const loadUsersFailure = (error) => ({
    type: LOAD_USERS_FAILURE,
    payload: error
})

export const loadUsers = () => (dispatch) => {
    dispatch(requestUsers())

    return fetchUsers().then((users) => (
        dispatch(loadUsersSuccess(users))
    )).catch((error) => (
        dispatch(loadUsersFailure(error))
    ))
}