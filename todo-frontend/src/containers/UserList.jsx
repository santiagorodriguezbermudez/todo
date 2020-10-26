import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';
import { fetchUsersAsync } from '../actions/index';

const UserList = ({ userList }) => {
  const renderUsers = () => userList.map(user => (
    <User key={user.id} user={user} />
  ));

  return (
    <div>
      <div>
        {renderUsers()}
      </div>
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => (
  {
    userList: state.users,
  }
);

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(fetchUsersAsync);
  },
});

const connectedUserList = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default connectedUserList;
