import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, NavLink, Redirect } from 'react-router-dom';

const OPTION_A = 'a';
const OPTION_B = 'b';

export class Question extends PureComponent {
    render() {
        const {option, onSelectQuestion, question} = this.props;

        const wrapperClassname = classNames(
            'question-option',
            {'question-option__a': (option === OPTION_A)},
            {'question-option__b': (option === OPTION_B)},
        );

        return (
            <div className={wrapperClassname}>
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
        activeUserId: PropTypes.string,
        question: PropTypes.object,
        users: PropTypes.object,
    }

    static defaultProps = {
        activeUserId: 'sarahedo',
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
        users: {
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
            tylermcginnis: {
              id: 'tylermcginnis',
              name: 'Tyler McGinnis',
              avatarURL: 'http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111',
              answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
              },
              questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
            },
            johndoe: {
              id: 'johndoe',
              name: 'John Doe',
              avatarURL: 'http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111',
              answers: {
                "xj352vofupe1dqz9emx13r": 'optionOne',
                "vthrdm985a262al8qx3do": 'optionTwo',
                "6ni6ok3ym7mf1p33lnez": 'optionTwo'
              },
              questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
            }
          }
    }

    selectQuestion = (event) => {
        console.log('Select question!!!')
        console.log(event)
        // If user has already voted... Don't allow to change the vote...
        // else, dispatch new vote!
    }

    isAnsweredQuestion = (question = {}, activeUser = {}) => {
        const {id: userId} = activeUser;
        const {author: questionUserId} = question;

        console.log('isAnsweredQuestion');
        console.log(userId);
        console.log(questionUserId);
    
        return userId && questionUserId && userId === questionUserId;
    }

    render() {
        console.log(this.props);
        const {match, activeUserId, question = {}, users} = this.props;

        const activeUser = users[activeUserId]

        const isAnswered = this.isAnsweredQuestion(question, activeUser)
        const {optionOne = {}, optionTwo = {}} = question;
        const {
            params: {
                id: questionId,
            } = {}
          } = match;

        console.log('match');
        console.log(match);

        console.log(questionId)
        // const questionId = '123';

        console.log(question)
        console.log(optionOne)
        console.log(optionTwo)

        const authorName = 'Jorge Ferreiro';
        const authorPic = 'http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111';

        return (
            <div>
                <p>Question {questionId}</p>

                <div className="">
                    <h1>Would You Rather</h1>
                    <div className="">
                        <span>Author: {authorName}</span>
                        <img src={authorPic} />
                    </div>
                    <ul>
                        <li>
                            <Question
                                option={OPTION_A}
                                question={optionOne}
                                onSelectQuestion={this.selectQuestion}
                            />
                        </li>
                        <li>
                            <Question
                                option={OPTION_B}
                                question={optionTwo}
                                onSelectQuestion={this.selectQuestion}
                            />
                        </li>
                    </ul>

                    {isAnswered === true && (
                        <div>
                            
                        </div>
                    )}
                </div>
            </div>
        )
    }  
}