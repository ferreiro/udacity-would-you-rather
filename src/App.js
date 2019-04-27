import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.scss';

import {
  _getQuestions,
  _getUsers
} from './_DATA';
import {Layout} from './components/layout/Layout';

import {QuestionDetailPage} from './pages/QuestionDetailPage';
import {QuestionListPage} from './pages/QuestionListPage';

// <QuestionDetailPage
// activeUser={activeUser}
// question={question}
// />

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
    const withLayout = (WrappedComponent, ...rest) => {
      class ComponentWithLayout extends PureComponent {
        render = () => (
            <Layout>
              <WrappedComponent
                {...this.props}
              />
            </Layout>
          )
      }

      return ComponentWithLayout;
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={withLayout(QuestionListPage)} />
          <Route path="/create" component={withLayout(CreatePage)} />
          <Route path="/questions/:id" component={withLayout(QuestionDetailPage)} />
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
