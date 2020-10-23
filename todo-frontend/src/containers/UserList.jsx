import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';

const UserList = ({ userList }) => {
  const renderUsers = () => userList.map(user => (
    <User key={user.id} user={user} />
  ));

  const handleCreateUser = () => {
    
  }

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
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

const connectedUserList = connect(mapStateToProps)(UserList);

export default connectedUserList;
