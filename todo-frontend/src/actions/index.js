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

export const addTask = data => ({
  type: 'ADD_TASK',
  data,
});

export const removeTask = task => ({
  type: 'REMOVE_TASK',
  task,
});

export const toogleUpdate = () => ({
  type: 'TOOGLE',
});

export const hideUpdate = () => ({
  type: 'HIDE',
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
      dispatch(setUsers(response.data.data));
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
    dispatch(createUser(response.data.data));
  });
});

export const removeUserAsync = user => (dispatch => {
  axios({
    method: 'DELETE',
    url: `${API_URL}/users/${user.id}`,
    headers: {
      Accept: 'application/json',
    },
  }).then(() => {
    dispatch(removeUser(user));
  });
});

export const selectUserAsync = id => (dispatch => {
  axios({
    method: 'GET',
    url: `${API_URL}/users/${id}`,
    headers: {
      Accept: 'application/json',
    },
  }).then(response => {
    dispatch(showUser(response.data.data));
    dispatch(hideUpdate());
  });
});

export const createTaskAsync = ({ description, userId }) => (dispatch => {
  axios({
    method: 'POST',
    url: `${API_URL}/tasks`,
    headers: {
      Accept: 'application/json',
    },
    data: {
      description,
      user_id: userId,
      state: 0,
    },
  }).then(response => {
    dispatch(addTask(response.data.data));
  });
});

export const removeTaskAsync = task => (dispatch => {
  axios({
    method: 'DELETE',
    url: `${API_URL}/tasks/${task.id}`,
    headers: {
      Accept: 'application/json',
    },
  }).then(() => {
    dispatch(removeTask(task));
  });
});

export const editUserAsync = ({ name, userId }) => (dispatch => {
  axios({
    method: 'PATCH',
    url: `${API_URL}/users/${userId}`,
    headers: {
      Accept: 'application/json',
    },
    data: {
      name,
    },
  }).then(response => {
    dispatch(showUser(response.data.data));
    dispatch(toogleUpdate());
  });
});
