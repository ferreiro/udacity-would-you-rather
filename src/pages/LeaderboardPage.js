import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, size, sortBy, reverse} from 'lodash';

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

        return {
          ...user,
          ...{points: size(user.answers) + size(user.questions)}
        }
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

        console.log(usersList)

        return (
            <div>
                <div style={{textAlign: "center"}}>
                    <h1>Leaderboard</h1>

                    <ul>
                      {usersList.map((user) => {
                        const answeredQuestions = size(user.answers)
                        const createdQuestions = size(user.questions)
                
                        return (
                          <li key={user.id}>
                            <p>{user.name}</p>
                            <img src={user.avatarURL} alt="Avatar" />
                            <p>
                              Answered questions: {answeredQuestions}
                            </p>
                            <p>
                              Created Questions: {createdQuestions}
                            </p>
                            <p>
                              Points: {user.points}
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                </div>
            </div>
        )
    }  
}
