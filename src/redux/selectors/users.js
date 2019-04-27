import {get} from 'lodash';

export const getUsers = (state = {}) => {
    console.log('getUsers');
    console.log(state);
    
    return get(state, 'users.items', {})
}

export const getIsLoadingUsers = (state) => {
    get(state, 'users.isLoading')
}

// TODO
export const getActiveUser = (state) => {
    const {activeUserId} = state;
    const users = getUsers(state)
    
    return users[activeUserId] || {}
}