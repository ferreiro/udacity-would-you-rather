import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import './QuestionListCard.scss';

export class QuestionListCard extends PureComponent {
    render() {
        const {question, questionOwner} = this.props;
        
        const wrapperClassname = classNames(
            'question-card',
        );

        return (
            <div className={wrapperClassname}>
                <Link to={`/questions/${question.id}`}>
                    <div className="question-card__author">
                        <img src={questionOwner.avatarURL} alt="Avatar" />
                        {questionOwner.name}
                    </div>

                    <h3 className="question-card__title">
                        Would you rather
                    </h3>

                    <ul className="question-card__options">
                        <li>{question.optionOne.text}</li>
                        <li>...or...</li>
                        <li>{question.optionTwo.text}</li>
                    </ul>
                </Link>
            </div>
        )
    }
}
