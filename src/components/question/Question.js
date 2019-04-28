import React, {PureComponent} from 'react';
import classNames from 'classnames';

import './Question.scss';

export const OPTION_ONE = 'optionOne';
export const OPTION_TWO = 'optionTwo';

export class Question extends PureComponent {
    handleSubmitResponse = () => {
        const {option, hasAnswered, onSelectQuestion} = this.props;

        if (hasAnswered) {
            return;
        }

        onSelectQuestion(option);
    }

    render() {
        const {option, question, totalVotes, hasAnswered, userAnswered} = this.props;

        const votes = question.votes.length;
        const percentage = (votes / totalVotes) * 100;

        const isSelected = userAnswered === option;

        const wrapperClassname = classNames(
            'question-option',
            {'question-option--selected': isSelected === true},
            {'question-option--disabled': hasAnswered === true},
            {'question-option--no-answered': hasAnswered === false},
        );

        const buttonClassname = classNames(
            {'question-option__a': (option === OPTION_ONE)},
            {'question-option__b': (option === OPTION_TWO)},
        )

        return (
            <div className={wrapperClassname}>
                <button
                    className={`question-option__item ${buttonClassname}`}
                    onClick={this.handleSubmitResponse}
                    disabled={hasAnswered === true}
                >
                    <h1>{question.text}</h1>
                </button>


                {hasAnswered === true && (
                    <div className="question-option__results">
                        <div
                            className="question-option__percentage"
                        >
                            <div
                                style={{
                                    width: `${percentage}%`,
                                    height: '20px',
                                    display: 'block',
                                    borderRadius: '60px',
                                    backgroundColor: '#04b11d'
                                }}
                            />
                        </div>

                        <span className="question-option__votes">
                            {votes} of {totalVotes} all the votes<br />
                            <i>({percentage} %)</i>
                        </span>
                    </div>
                )}
            </div>
        )
    }
}
  