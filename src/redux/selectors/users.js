import {get} from 'lodash';

export const getUsers = (state = {}) => (
    get(state, 'users.items', {})
)

export const getIsLoadingUsers = (state) => (
    get(state, 'users.isLoading', false)
)

export const getActiveUser = (state) => {
    const {activeUserId} = state;
    const users = getUsers(state)
    
    return users[activeUserId] || {}
}