import React, {PureComponent} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk';

import {Provider} from 'react-redux';
import {getRoutes} from './routes';
import rootReducer from './redux/reducers';

import './App.scss';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


class App extends PureComponent {
  constructor(props) {
    super(props);

    const initialState = {};

    this._store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunkMiddleware)),
    )
  }

  render() {
    // const {showAnsweredQuestions} = this.state;
    const routes = getRoutes(this.props);

    return (
      <Provider store={this._store}>
          {routes}
      </Provider>
    )
  };
}

export default App;