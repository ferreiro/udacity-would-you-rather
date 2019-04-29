import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import {isEmpty, get} from 'lodash';

import {Author} from '../components/author/Author';
import {Question} from '../components/question/Question';
import {OPTION_ONE, OPTION_TWO} from '../components/question/Question';

import './QuestionDetailPage.scss';


export class QuestionDetailPage extends PureComponent {
    static propTypes = {
        activeUserId: PropTypes.string,
        question: PropTypes.object,
        users: PropTypes.object,
    }

    state = {
        isLoading: true,
    }
  
    static defaultProps = {
    }

    componentDidMount() {
        if (isEmpty(this.props.questions) || isEmpty(this.props.users)) {
            this.setState({isLoading: true});
            this.props.loadInitialData().finally(() => {
                this.setState({isLoading: false})
            })
        } else {
            this.setState({isLoading: false})
        }
    }

    selectQuestion = (answer) => {
        const {activeUser, submitAnswer} = this.props;
        const {id: questionId} = this.getQuestion();

        submitAnswer(activeUser, questionId, answer)
    }

    getUserAnswered = (question, activeUser) => {
        const {id: questionId} = question;
        const answer = activeUser.answers[questionId] || null;

        return answer;
    }

    hasAnsweredQuestion = (question, activeUser) => {
        const {id: questionId} = question;

        return activeUser.answers[questionId] !== undefined;
    }

    getQuestion() {
        const {questions} = this.props;  
        const questionId = get(this.props.match, 'params.id', null);

        return questions[questionId] || null;
    }

    render() {
        if (this.state.isLoading) {
            return <p>Is loading...</p>
        }

        const {activeUser, questions, users} = this.props;

        if (!activeUser || !questions || !users) {
            return <p>No message found</p>
        }
        
        const question = this.getQuestion();

        if (!question) {
            return <Redirect to="/404" />
        }

        const {optionOne = {}, optionTwo = {}} = question;
        const author = users[question.author];
        const totalVotes = optionOne.votes.length + optionTwo.votes.length

        const userAnswered = this.getUserAnswered(question, activeUser)
        const hasAnswered = userAnswered !== null

        return (
            <div className="question-detail-page">

                <Author
                    author={author}
                />

                <h1>Would You Rather</h1>

                <div className="question-detail-page__wrapper">
                    <ul className="question-detail-page__options">
                        <li>
                            <Question
                                option={OPTION_ONE}
                                question={optionOne}
                                onSelectQuestion={this.selectQuestion}
                                isSelected={true}
                                totalVotes={totalVotes}
                                hasAnswered={hasAnswered}
                                userAnswered={userAnswered}
                            />
                        </li>
                        <li>
                            <Question
                                option={OPTION_TWO}
                                question={optionTwo}
                                onSelectQuestion={this.selectQuestion}
                                isSelected={false}
                                totalVotes={totalVotes}
                                hasAnswered={hasAnswered}
                                userAnswered={userAnswered}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }  
}