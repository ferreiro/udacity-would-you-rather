import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Question extends PureComponent {
    render() {
        const {onSelectQuestion, question} = this.props;

        return (
            <div className={classNames('question-option')}>
                <button
                    className="question-option"
                    onClick={onSelectQuestion}
                >
                    <h1>{question.text}</h1>
                </button>

                <div className="question-option__results">
                    <span style={{
                        width: '50%',
                        height: '20px',
                        display: 'block',
                        borderRadius: '60px',
                        backgroundColor: 'red'
                    }}></span>
                    <span>1 of 2 questions</span>
                </div>
            </div>
        )
    }
}
  
export class QuestionDetailPage extends PureComponent {
    static propTypes = {
        activeUser: PropTypes.object,
        question: PropTypes.object,
    }

    static defaultProps = {
        activeUser: {
            sarahedo: {
                id: 'sarahedo',
                name: 'Sarah Edo',
                avatarURL: 'http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111',
                answers: {
                    "8xf0y6ziyjabvozdd253nd": 'optionOne',
                    "6ni6ok3ym7mf1p33lnez": 'optionTwo',
                    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                    "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
        },
        question: {
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'sarahedo',
            timestamp: 1467166872634,
            optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory',
            },
            optionTwo: {
                votes: [],
                text: 'have horrible long term memory'
            }
        },
    }

    selectQuestion = (event) => {
        console.log('Select question!!!')
        console.log(event)
    }

    isAnsweredQuestion = (question = {}, activeUser = {}) => {
        const {id: userId} = activeUser;
        const {author: questionUserId} = question;
    
        return userId && questionUserId && userId === questionUserId;
    }

    render() {
        const {match, activeUser = {}, question = {}} = this.props;


        const isAnswered = this.isAnsweredQuestion(question, activeUser)
        const {optionOne = {}, optionTwo = {}} = question;
        // const {
        //     params: {
        //       question_id: questionId,
        //     } = {}
        //   } = match;
        const questionId = '123';

        console.log(question)
        console.log(optionOne)
        console.log(optionTwo)

        return (
            <div>
              <p>Question {questionId}</p>
        
              <div>
                  <h1>Would You Rather</h1>
                  <ul>
                    <li>
                      <Question
                        question={optionOne}
                        onSelectQuestion={this.selectQuestion}
                      />
                    </li>
                    <li>
                      <Question
                        question={optionTwo}
                        onSelectQuestion={this.selectQuestion}
                      />
                    </li>
                  </ul>
                </div>

              {isAnswered === true ? (
                <div>
                  <h1>Would You Rather</h1>
                  <ul>
                    <li>
                      <Question
                        question={optionOne}
                      />
                    </li>
                    <li>
                      <Question
                        question={optionTwo}
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
        
                </div>
              )}
            </div>
          )
    }  
}