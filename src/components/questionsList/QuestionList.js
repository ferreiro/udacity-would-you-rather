import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {QuestionListCard} from './QuestionListCard';

import './QuestionList.scss';

export class QuestionList extends PureComponent {
    static propTypes = {
        questions: PropTypes.arrayOf(PropTypes.object),
    }

    render() {
        const {questions, users} = this.props;

        return (
            <ul className="question-list">
                {questions.map((question) => {
                    const questionOwner = users[question.author];

                    return (
                        <li
                            className="question-list__item"
                            key={question.id}
                        >
                            <QuestionListCard
                                question={question}
                                questionOwner={questionOwner}
                                key={question.id}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}
