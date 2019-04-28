import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ConnectedCreatePage from './containers/ConnectedCreatePage';
import ConnectedQuestionListPage from './containers/ConnectedQuestionListPage';
import ConnectedQuestionDetailPage from './containers/ConnectedQuestionDetailPage';

import {Layout} from './components/layout/Layout';

const QuestionsPage = () => (
    <div>Questions page</div>
)

const LeaderboardPage = () => (
    <div>Leaderboard page</div>
)

const LoginPage = () => (
    <p>Sign in</p>
)

const LogoutPage = () => (
    <p>Logging out!</p>
)

const NotFoundPage = () => (
    <p>Not found!</p>
)

const withRequiredAuthentication = (WrappedComponent) => {
    class ComponentWithLayout extends PureComponent {
        render() {
            // const {activeUser} = this.props;
            // const currentUrl = get(this.props.history, 'location.pathname', '')

            // if (!activeUser || isEmpty(activeUser)) {
            //     return <Redirect to={`/login?redirectTo=${currentUrl}`} />
            // }

            // return (
            //     <WrappedComponent
            //         {...this.props}
            //     />
            // )

            return (
                <WrappedComponent
                    {...this.props}
                />
            )
        }
    }

    return ComponentWithLayout;
}
  
const withLayout = (WrappedComponent) => {
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

// NB: You can pass extra props to this
export const getRoutes = ({props}) => (
    <Router>
        <Switch>
            <Route
                exact path="/"
                component={withRequiredAuthentication(withLayout(ConnectedQuestionListPage))}
            />
            <Route
                path="/create"
                component={withRequiredAuthentication(withLayout(ConnectedCreatePage))}
            />
            <Route
                path="/questions/:id"
                component={withRequiredAuthentication(withLayout(ConnectedQuestionDetailPage))}
            />
            <Route
                path="/questions"
                component={withRequiredAuthentication(withLayout(QuestionsPage))}
            />
            <Route
                path="/leaderboard"
                component={withRequiredAuthentication(withLayout(LeaderboardPage))}
            />
            <Route
                path="/login"
                component={withLayout(LoginPage)}
            />
            <Route
                path="/logout"
                component={withLayout(LogoutPage)}
            />
            <Route
                component={withLayout(NotFoundPage)}
            />
        </Switch>
    </Router>
);
