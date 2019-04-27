import {fetchUsers} from '../api/users';

export const GET_USERS_REQUEST = 'get-users/requesting';
export const GET_USERS_SUCCESS = 'get-users/success';
export const GET_USERS_FAILURE = 'get-users/failure';

export const requestUsers = () => ({
    type: GET_USERS_REQUEST,
})

export const loadUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users
})

export const loadUsersFailure = (error) => ({
    type: GET_USERS_FAILURE,
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