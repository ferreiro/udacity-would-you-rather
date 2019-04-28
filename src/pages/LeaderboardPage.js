import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, size, sortBy, reverse} from 'lodash';

import './LeaderboardPage.scss';


export class LeaderboardPage extends PureComponent {
    static propTypes = {
        // displayAnsweredQuestions: PropTypes.bool.isRequired,
        // activeUser: PropTypes.object,
        // questions: PropTypes.object.isRequired,
    }

    static defaultProps = {
      users: {}
    }

    state = {
      isLoading: true,
    }

    componentDidMount() {
      const {loadUsers, users} = this.props;

      if (isEmpty(users)) {
        loadUsers()
      }
    }

    getUsersList(users) {
      const usersList = Object.keys(users).map((userKey) => {
        const user = users[userKey]
        const updatedUser = {
          ...user,
          ...{points: size(user.answers) + size(user.questions)}
        }

        return updatedUser
      })

      return reverse(sortBy(usersList, ['points']))
    }

    render() {
        const {users, isLoading} = this.props;

        if (isLoading === true) {
          return <p>Is loading...</p>
        }

        if (isEmpty(users)) {
          return <p>No users :)</p>
        }

        const usersList = this.getUsersList(users)

        return (
            <div>
                <div style={{textAlign: "center"}}>
                    <h1>Leaderboard</h1>

                    <ul className="leaderboard">
                      {usersList.map((user) => {
                        const answeredQuestions = size(user.answers)
                        const createdQuestions = size(user.questions)
                
                        return (
                          <li key={user.id} className="leaderboard__item">
                            <img src={user.avatarURL} alt="Avatar" />
                            <p className="leaderboard__title">{user.name}</p>

                            <div className="leaderboard__data">
                              <p>
                                Answered questions: {answeredQuestions}
                              </p>
                              <p>
                                Created Questions: {createdQuestions}
                              </p>
                            </div>

                            <div className="leaderboard__points">
                              <span>Points</span>
                              <span className="points">{user.points}</span>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                </div>
            </div>
        )
    }  
}
