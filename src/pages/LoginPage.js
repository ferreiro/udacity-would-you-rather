import React, {PureComponent} from 'react'
import {isEmpty, get} from 'lodash';

import './Login.scss';

export class LoginPage extends PureComponent {
    componentDidMount() {
        const {loadUsers, users} = this.props;

        if (isEmpty(users)) {
            loadUsers()
        }
    }

    clickUser = (user) => {
        const {location, loginUser} = this.props;
        const redirectUrl = get(location, 'state.redirectUrl', '/')

        loginUser(user)
        this.props.history.push(redirectUrl)
    }
 
    render() {
        const {users} = this.props;

        return (
            <div className="login">
                <h1>Sign in</h1>
                <ul>
                    {Object.keys(users).map((userKey) => {
                        const user = users[userKey];

                        return (
                            <li
                                className="login__item"
                                key={user.id}
                                onClick={(event) => this.clickUser(user)}
                            >
                                <img src={user.avatarURL} alt="avatar" />
                                <span>{user.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}