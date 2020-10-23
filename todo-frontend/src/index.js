import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import App from './components/App';
import combinedReducers from './reducers/index';

const store = createStore(combinedReducers, {
  books: [],
  filter: 'All',
}, applyMiddleware(thunk));

store.dispatch(fetchBooksAsync());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
