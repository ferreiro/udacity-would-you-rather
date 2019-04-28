import React, {PureComponent} from 'react';
import {isEmpty} from 'lodash';
import {Link} from 'react-router-dom'

import './Header.scss';

export class Header extends PureComponent {
  componentDidMount() {
    const {user, loadUsers} = this.props;

    if (isEmpty(user)) {
      loadUsers()
    }
  }

  render() {
    const {user} = this.props;
    const {name, avatarURL} = user;

    const isLoggedIn = !isEmpty(user) 

    return (
      <header className="header">
        <h1 className="header__logo">
            <Link to="/">
                WYR
            </Link>
        </h1>
  
        <ul className="header__menu">
          <li><Link to="/">Questions</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
  
        <ul className="header__actions">
          {isLoggedIn && (
            <li className="header__create">
              <Link to="/create">New question</Link>
            </li>
          )}

          {isLoggedIn && (
            <li className="header__user">
              <img src={avatarURL} alt="my avatar" />
              <span>Hello {name}</span>
            </li>
          )}
  
          <li className="header__logout">
            {isLoggedIn === true ? (
              <Link to="/logout">(Logout)</Link>
            ) : (
              <Link to="/login">(Login)</Link>
            )}
          </li>
        </ul>
      </header>
    );
  }
}
