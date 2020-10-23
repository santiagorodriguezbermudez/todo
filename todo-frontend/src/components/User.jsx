import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeUserAsync } from '../actions/index';

const User = props => {
  const { user, deleteUser } = props;

  const handleDeleteClick = () => {
    deleteUser(user);
  };

  return (
    <div>
      <h4 style={{ display: 'inline-block', marginRight: '4rem' }}>
        User:
        {` ${user.name}`}
      </h4>
      <button type="button" onClick={handleDeleteClick}>Remove user</button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteUser: user => {
    dispatch(removeUserAsync(user));
  },
});

const ConnectedUser = connect(null, mapDispatchToProps)(User);

export default ConnectedUser;
