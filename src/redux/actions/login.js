export const LOGIN_SUCCESS = 'login/success';
export const LOGOUT_SUCCESS = 'logout/success';

const submitLogin = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

const submitLogout = () => ({
    type: LOGOUT_SUCCESS
})

export const loginUser = (user) => (dispatch) => {
    dispatch(submitLogin(user))
}

export const logoutUser = () => (dispatch) => {
    dispatch(submitLogout())
}