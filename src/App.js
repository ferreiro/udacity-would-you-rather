import React, {PureComponent} from 'react';
import {createStore, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';

import {Provider} from 'react-redux';
import {getRoutes} from './routes';
import rootReducer from './redux/reducers';

import './App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    const initialState = {};

    this._store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
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