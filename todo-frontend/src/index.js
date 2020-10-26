import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import combinedReducers from './reducers/index';
import { fetchUsersAsync } from './actions/index';

const store = createStore(combinedReducers, {
  users: [],
}, applyMiddleware(thunk));

store.dispatch(fetchUsersAsync());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
