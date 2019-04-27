import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {QuestionList} from '../components/questionsList/QuestionList';

export class QuestionListPage extends PureComponent {
    static propTypes = {
        displayAnsweredQuestions: PropTypes.bool.isRequired,
        activeUser: PropTypes.object,
        questions: PropTypes.object,
    }

    static defaultProps = {
      users: {},
      questions: {}
    }

    getQuestionsList = (questions = {}) => (
        Object.keys(questions).reduce((accum, nextQuestionKey) => (
            [...accum, questions[nextQuestionKey]]
        ), [])
    )

    getAnsweredQuestions = (questionsList = [], user = {}) => {
        return questionsList.filter((question) => user.answers[question.id] !== undefined)
    }

    getUnansweredQuestions = (questionsList = [], user = {}) => {
        return questionsList.filter((question) => user.answers[question.id] === undefined)
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
        const {
            activeUserId,
            displayAnsweredQuestions,
            questions,
            users,
        } = this.props;

        if (!questions || questions.length === 0) {
          return null;
        }

        console.log('QuestionlistPage props');
        console.log(this.props);

        const questionsList = this.getQuestionsList(questions);

        const user = users[activeUserId];

        const filteredQuestionsList = displayAnsweredQuestions === true
            ? this.getAnsweredQuestions(questionsList, user)
            : this.getUnansweredQuestions(questionsList, user)

        //   <QuestionList
        //     questions={filteredQuestionsList}
        //     users={users}
        //  />
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


            </div>
        )
    }  
}