import { combineReducers } from 'redux';
import users from './users';

const combinedReducers = combineReducers({
  users,
});

export default combinedReducers;
