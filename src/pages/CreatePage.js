import React, {PureComponent} from 'react';
import {isEmpty} from 'lodash';

import './CreatePage.scss';

const initialFormState = {
    optionOneText: '',
    optionTwoText: ''
}

export class CreatePage extends PureComponent {

    state = initialFormState

    onSubmitForm = (event) => {
        event.preventDefault();

        const {optionOneText, optionTwoText} = this.state;

        if (isEmpty(optionOneText) || isEmpty(optionTwoText)) {
            return window.alert('You must fill both possible answers')
        }

        const {submitQuestion, activeUserId} = this.props;

        submitQuestion({optionOneText, optionTwoText, author: activeUserId}).then(() => {
            // Success! Reset form (we can avoid that...) and redirect home
            this.setState(initialFormState)
            this.props.history.push('/')
        }).catch((error) => (
            window.alert('Can not save the question', error)
        ));
    }

    handleOptionChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {isLoadingSavingQuestion} = this.props;
        const {
            optionOneText,
            optionTwoText,
        } = this.state;

        return (
            <div className="question-create">
                <h1 className="question-create__title">Create question</h1>
                <h3 className="question-create__intro">Would you rather...?</h3>

                {isLoadingSavingQuestion === true ? (
                    <p>Is saving question...</p>
                ) : (
                    <form
                        onSubmit={this.onSubmitForm}
                        className="question-create__wrapper"
                    >
                        <input
                            type="text"
                            value={optionOneText}
                            onChange={this.handleOptionChange}
                            name="optionOneText"
                            placeholder="Option One"
                            required
                        />
                        <input
                            type="text"
                            value={optionTwoText}
                            onChange={this.handleOptionChange}
                            name="optionTwoText"
                            placeholder="Option Two"
                            required
                        />
                        <input
                            type="submit"
                            value="Submit"
                            onSubmit={this.onSubmitForm}
                            className="question-create__submit"
                        />
                    </form>
                )}
            </div>
        )
    }  
}