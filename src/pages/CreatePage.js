import React, {PureComponent} from 'react';
import {isEmpty} from 'lodash';
// import PropTypes from 'prop-types';

import './CreatePage.scss';

export class CreatePage extends PureComponent {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    static propTypes = {
        
    }

    static defaultProps = {
        
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        console.log('On submit form')
        console.log(event)

        const {optionOneText, optionTwoText} = this.state;

        if (isEmpty(optionOneText) || isEmpty(optionTwoText)) {
            return window.alert('You must fill both possible answers')
        }

        const {submitQuestion, activeUserId} = this.props;

        submitQuestion({optionOneText, optionTwoText, author: activeUserId})
    }

    onChangeOptionOne = (event) => {
        this.setState({optionOneText: event.target.value})
    }

    onChangeOptionTwo = (event) => {
        this.setState({optionTwoText: event.target.value})
    }

    render() {
        const {
            optionOneText,
            optionTwoText,
        } = this.state;

        return (
            <div className="question-create">
                <h1 className="question-create__title">Create question</h1>
                <h3 className="question-create__intro">Would you rather...?</h3>
                <form
                    onSubmit={this.onSubmitForm}
                    className="question-create__wrapper"
                >
                    <input
                        type="text"
                        value={optionOneText}
                        onChange={this.onChangeOptionOne}
                        placeholder="Option One"
                        required
                    />
                    <input
                        type="text"
                        value={optionTwoText}
                        onChange={this.onChangeOptionTwo}
                        placeholder="Option Two"
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        onSubmit={this.onSubmitForm}
                    />
                </form>
            </div>
        )
    }  
}