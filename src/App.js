import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import {
  _getQuestions,
  _getUsers
} from './_DATA';
import {Header} from './components/header/Header';
import {Layout} from './components/layout/Layout';

import {QuestionDetailPage} from './pages/QuestionDetailPage';

// <QuestionDetailPage
// activeUser={activeUser}
// question={question}
// />



const QuestionListPage = ({showAnswered}) => {
  
  return (
    <div>Hola</div>
  )
}

const CreatePage = ({}) => (
  <div>Create page</div>
)

const QuestionsPage = ({}) => (
  <div>Questions page</div>
)

const LeaderboardPage = ({}) => (
  <div>Leaderboard page</div>
)

const LogoutPage = ({}) => (
  <p>Logging out!</p>
)

const NotFoundPage = ({}) => (
  <p>Not found!</p>
)

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

    const withLayout = (WrappedComponent) => {
      class ComponentWithLayout extends PureComponent {
        render = () => (
            <Layout>
              <WrappedComponent />
            </Layout>
          )
      }

      return ComponentWithLayout;
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            <div className="App">
              <Header />

              <QuestionListPage
                questions={questions}
                showAnswered={showAnswered}
              />
            </div>
          )} />

          <Route path="/create" component={withLayout(CreatePage)} />
          <Route path="/questions/:question_id" component={withLayout(QuestionDetailPage)} />
          <Route path="/questions" component={withLayout(QuestionsPage)} />
          <Route path="/leaderboard" component={withLayout(LeaderboardPage)} />
          <Route path="/logout" component={withLayout(LogoutPage)} />
          <Route component={withLayout(NotFoundPage)} />
        </Switch>
      </Router>
    )
  };
}

export default App;
