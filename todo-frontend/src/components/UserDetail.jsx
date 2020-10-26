import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserAsync } from '../actions/index';

const UserDetail = props => {
  const { id } = useParams();
  const { selectUser, user } = props;

  selectUser(id);

  return (
    <div>
      { user.name }
      { user.tasks}
    </div>
  );
};

UserDetail.propTypes = {
  selectUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(String).isRequired,
};

const mapStateToProps = state => (
  {
    user: state.users,
  }
);

const mapDispatchToProps = dispatch => ({
  selectUser: userId => {
    dispatch(selectUserAsync(userId));
  },
});

const connectedUserDetail = connect(mapStateToProps, mapDispatchToProps)(UserDetail);

export default connectedUserDetail;
