import React from 'react';
import PropTypes from 'prop-types';

const UserDetail = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <ul>
      {user.tasks}
    </ul>
  </div>
);

UserDetail.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default UserDetail;
