import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';

import {loadUsers} from './redux/actions/users';

import ConnectedQuestionListPage from './containers/ConnectedQuestionListPage';
import ConnectedQuestionDetailPage from './containers/ConnectedQuestionDetailPage';

import {CreatePage} from './pages/CreatePage';

import {Layout} from './components/layout/Layout';
import { getActiveUser, getUsers } from './redux/selectors/users';

const QuestionsPage = () => (
    <div>Questions page</div>
)

const LeaderboardPage = () => (
    <div>Leaderboard page</div>
)

const LogoutPage = () => (
    <p>Logging out!</p>
)

const NotFoundPage = () => (
    <p>Not found!</p>
)
  
const withLayout = (WrappedComponent) => {
    class ComponentWithLayout extends PureComponent {
        componentDidMount() {
            this.props.loadInitialData()
        }

        render = () => (
            <Layout>
                <WrappedComponent
                {...this.props}
                />
            </Layout>
        )
    }

    const mapStateToProps = (store) => ({
        users: getUsers(store),
        questions: store.questions,
        activeUser: getActiveUser(store)
    })
    
    const mapDispatchToProps = (dispatch) => ({
        loadInitialData: () => {
            dispatch(loadUsers())
        }
    })

    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ComponentWithLayout);
}

// NB: You can pass extra props to this
export const getRoutes = ({props}) => (
    <Router>
        <Switch>
            <Route exact path="/" component={withLayout(ConnectedQuestionListPage)} />
            <Route path="/create" component={withLayout(CreatePage)} />
            <Route path="/questions/:id" component={withLayout(ConnectedQuestionDetailPage)} />
            <Route path="/questions" component={withLayout(QuestionsPage)} />
            <Route path="/leaderboard" component={withLayout(LeaderboardPage)} />
            <Route path="/logout" component={withLayout(LogoutPage)} />
            <Route component={withLayout(NotFoundPage)} />
        </Switch>
    </Router>
);
