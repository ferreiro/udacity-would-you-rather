import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';

import './CreatePage.scss';

export class CreatePage extends PureComponent {

    state = {
        optionAText: '',
        optionBText: '',
    }

    static propTypes = {
        
    }

    static defaultProps = {
        
    }

    onSubmitForm = (event) => {
        console.log('On submit form')
        console.log(event)
    }

    onChangeOptionA = (event) => {
        this.setState({optionAText: event.target.value})
    }

    onChangeOptionB = (event) => {
        this.setState({optionBText: event.target.value})
    }

    render() {
        const {
            optionAText,
            optionBText,
        } = this.state;

        return (
            <div className="question-create">
                <h1 className="question-create__title">Create question</h1>
                <h3 className="question-create__intro">Would you rather...?</h3>
                <form
                    onSubmit={this.onSubmitForm}
                    className="question-create__wrapper"
                >
                    <input type="text" value={optionAText} onChange={this.onChangeOptionA} placeholder="Option a" />
                    <input type="text" value={optionBText} onChange={this.onChangeOptionB} placeholder="Option b" />
                    <input type="submit" value="Submit" onSubmit={this.onSubmitForm} />
                </form>
            </div>
        )
    }  
}