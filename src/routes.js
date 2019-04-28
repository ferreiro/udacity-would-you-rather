import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {get, isEmpty} from 'lodash';

import ConnectedLoginPage from './containers/ConnectedLoginPage';
import ConnectedLeaderboardPage from './containers/ConnectedLeaderboardPage';
import ConnectedCreatePage from './containers/ConnectedCreatePage';
import ConnectedQuestionListPage from './containers/ConnectedQuestionListPage';
import ConnectedQuestionDetailPage from './containers/ConnectedQuestionDetailPage';

import {Layout} from './components/layout/Layout';
import {connect} from 'react-redux';

const QuestionsPage = () => (
    <div>Questions page</div>
)

const NotFoundPage = () => (
    <p>Not found!</p>
)

const withRequiredAuthentication = (WrappedComponent) => {
    class ComponentWithLayout extends PureComponent {
        render() {
            const {activeUserId} = this.props;
            const currentUrl = get(this.props.history, 'location.pathname', '')

            console.log('withRequiredAuthentication')
            console.log('activeUserId')
            console.log(activeUserId)
            console.log(this.props)

            if (!activeUserId || isEmpty(activeUserId)) {
                return <Redirect to={{
                    pathname: `/login`,
                    state: {
                        redirectUrl: currentUrl
                    }
                }} {...this.props} />
            }

            return (
                <WrappedComponent
                    {...this.props}
                />
            )
        }
    }

    const mapStateToPros = (state) => ({
        activeUserId: state.activeUserId
    })

    const mapDispatchToPros = {}

    return connect(
        mapStateToPros,
        mapDispatchToPros
    )(ComponentWithLayout);
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
                path="/add"
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
                component={withRequiredAuthentication(withLayout(ConnectedLeaderboardPage))}
            />
            <Route
                path="/login"
                component={withLayout(ConnectedLoginPage)}
            />
            <Route
                component={withLayout(NotFoundPage)}
            />
        </Switch>
    </Router>
);
