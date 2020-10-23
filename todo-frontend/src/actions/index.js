import axios from 'axios';
import API_URL from '../constants/constants';

export const createUser = user => ({
  type: 'CREATE_USER',
  user: {
    name: user.attributes.name,
    tasks: user.attributes.tasks,
    id: user.id,
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
  }).then(response => {
    console.log(response.data.data);
    dispatch(createUser(response.data.data));
  }).catch(error => {
    console.log(error.message);
  });
});
