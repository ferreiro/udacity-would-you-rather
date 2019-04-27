import React, {PureComponent} from 'react';
import './App.css';

import {
  _getQuestions,
  _getUsers
} from './_DATA';
import {Header} from './components/header/Header';


const selectQuestion = () => {
  console.log('yay!')
}

const Question = ({question = {}}) => {
  return (
    <button onClick={selectQuestion}>
      <h1>{question.text}</h1>
    </button>
  )
} 

const QuestionDetailPage = ({activeUser = {}, question = {}}) => {
  const isAnsweredQuestion = (question = {}, activeUser = {}) => {
    const {id: userId} = activeUser;
    const {author: questionUserId} = question;

    return userId && questionUserId && userId === questionUserId;
  }

  const isAnswered = isAnsweredQuestion(question, activeUser)

  const {optionOne = {}, optionTwo = {}} = question;
  
  return (
    <div>
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

const QuestionListPage = ({showAnswered}) => {
  
  return (
    <div>Hola</div>
  )
}

class App extends PureComponent {
  // TODO: Move into a global state
  state = {
    questions: {},
    showAnswered: false,
    users: {}
  }

  componentDidMount() {
    _getQuestions().then((questions) => {
      this.setState({questions})
    });

    _getUsers().then((users) => {
      this.setState({users})
    });
  }

  render() {
    const {
      questions,
      showAnswered,
      users
    } = this.state;

    const question = questions['8xf0y6ziyjabvozdd253nd']
    const activeUser = users['sarahedo']

    return (
      <div className="App">
        <Header />
        <QuestionDetailPage
          activeUser={activeUser}
          question={question}
        />

        <QuestionListPage
          questions={questions}
          showAnswered={showAnswered}
        />
      </div>
    )
  };
}

export default App;
