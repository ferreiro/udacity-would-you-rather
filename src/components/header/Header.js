import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

export const Header = () => {
    const userName = 'Jorge Ferreiro';
    const avatar = 'http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111';
    const isLoggedIn = true;
  
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
          <li className="header__create">
            <Link to="/create">New question</Link>
          </li>
  
          {isLoggedIn && (
            <li className="header__user">
              <img src={avatar} alt="my avatar" />
              <span>Hello {userName}</span>
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