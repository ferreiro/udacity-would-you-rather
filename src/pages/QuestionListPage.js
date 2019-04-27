import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {QuestionList} from '../components/questionsList/QuestionList';

export class QuestionListPage extends PureComponent {
    static propTypes = {
        displayAnsweredQuestions: PropTypes.bool.isRequired,
        activeUser: PropTypes.object,
        questions: PropTypes.object.isRequired,
    }

    static defaultProps = {
      users: {}
    }

    state = {
      isLoading: true,
    }

    componentDidMount() {
      Promise.all([
        this.props.loadQuestions(),
        this.props.loadUsers()
      ]).then(([questions, users]) => {
        console.log('Loaded!', questions, users)
      }).catch((error) => {
        console.log('errors... :(', error)
      }).finally(() => {
        this.setState({isLoading: false})
      })
      

      // this.props.loadQuestions().then(() => {
      //   this.props.loadUsers().then(() => {
      //     this.setState({isLoading: false})
      //   })
      // })
    }

    getQuestionsList = (questions = {}) => (
        Object.keys(questions).reduce((accum, nextQuestionKey) => (
            [...accum, questions[nextQuestionKey]]
        ), [])
    )

    getAnsweredQuestions = (questionsList = [], user = {}) => {
        return questionsList.filter((question) => user && user.answers && user.answers[question.id] !== undefined)
    }

    getUnansweredQuestions = (questionsList = [], user = {}) => {
        return questionsList.filter((question) => user && user.answers && user.answers[question.id] === undefined)
    }

    _handleOnShowUnanswered = () => {
      console.log('clicked!')
      this.props.onDisplayUnansweredQuestions()
    }

    _handleOnShowAnswered = () => {
      console.log('clicked!')

      this.props.onDisplayAnsweredQuestions()
    }

    render() {
        if (this.state.isLoading === true) {
          return <p>Is loading...</p>
        }

        const {activeUser, displayAnsweredQuestions, questions, users} = this.props;

        if (questions.length === 0) {
          return <p>Empty</p>
        }

        const questionsList = this.getQuestionsList(questions);
        const filteredQuestionsList = displayAnsweredQuestions === true
            ? this.getAnsweredQuestions(questionsList, activeUser)
            : this.getUnansweredQuestions(questionsList, activeUser)

        return (
            <div>
                {displayAnsweredQuestions === true ? (
                  <div>
                    <h1>Answered questions</h1>
                    <button onClick={this._handleOnShowUnanswered}>Show Unanswered</button>
                  </div>
                ) : (
                  <div>
                    <h1>Unanswered questions</h1>
                    <button onClick={this._handleOnShowAnswered}>Show Answered</button>
                  </div>
                )}

                <QuestionList
                  questions={filteredQuestionsList}
                  users={users}
                />
            </div>
        )
    }  
}