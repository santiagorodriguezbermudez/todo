import axios from 'axios';
import { v4 as generateId } from 'uuid';
import API_URL from '../constants/constants';

export const createUser = ({ name }) => ({
  type: 'CREATE_USER',
  user: {
    name,
    id: generateId(),
  },
});

const setUsers = users => ({
  type: 'SET_USERS',
  users,
});

export const removeUser = user => ({
  type: 'REMOVE_USER',
  user,
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user,
});

export const showUser = user => ({
  type: 'SHOW_USER',
  user,
});

export const fetchUsersAsync = () => (
  dispatch => {
    axios({
      method: 'GET',
      url: `${API_URL}/users`,
      headers: {
        Accept: 'application/json',
      },
    }).then(response => {
      console.log(response);
      dispatch(setUsers(response.data.data));
    }).catch(error => {
      console.log(`This is the error: ${error}`);
    });
  }
);

export const createUserAsync = ({ name }) => (dispatch => {
  axios({
    method: 'POST',
    url: `${API_URL}/users`,
    headers: {
      Accept: 'application/json',
    },
    data: {
      name,
    },
  }).then(() => {
    dispatch(createUser({ name }));
  }).catch(error => {
    console.log(error.message);
  });
});
