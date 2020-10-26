import { combineReducers } from 'redux';
import users from './users';
import user from './user';
import visibility from './visibility';

const combinedReducers = combineReducers({
  users,
  user,
  visibility,
});

export default combinedReducers;
