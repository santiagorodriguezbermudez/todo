import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <h4>
      User:
      {` ${user.name}`}
    </h4>
    <div>
      
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default User;
