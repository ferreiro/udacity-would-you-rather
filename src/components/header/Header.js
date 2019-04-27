import React from 'react';

import './Header.scss';

export const Header = ({}) => {
    const userName = 'Jorge Ferreiro';
    const avatar = 'http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111';
    const isLoggedIn = true;
  
    return (
      <header className="header">
        <h1 className="header__logo">
            WYR
        </h1>
  
        <ul className="header__menu">
          <li><a href="/">Questions</a></li>
          <li><a href="/leaderboard">Leaderboard</a></li>
        </ul>
  
        <ul className="header__actions">
          <li className="header__create">
            <a href="/create">New question</a>
          </li>
  
          {isLoggedIn && (
            <li className="header__user">
              <img src={avatar} alt="my avatar" />
              <span>Hello {userName}</span>
            </li>
          )}
  
          <li>
            {isLoggedIn === true ? (
              <a href="/logout">(Logout)</a>
            ) : (
              <a href="/login">(Login)</a>
            )}
          </li>
        </ul>
      </header>
    );
  }