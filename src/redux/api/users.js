import {_getUsers} from '../../_DATA';

export const fetchUsers = () => {
    return new Promise((resolve, reject) => {
        _getUsers().then((users) => {
            resolve(users)
        }).catch((error) => {
            reject(error)
        })
    })
}