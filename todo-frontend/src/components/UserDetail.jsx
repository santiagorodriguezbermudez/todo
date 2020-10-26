import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserAsync } from '../actions/index';
import NewTaskForm from './NewTaskForm';

const UserDetail = props => {
  const { id } = useParams();
  const { selectUser, user } = props;

  React.useEffect(() => {
    selectUser(id);
  }, []);

  const renderTasks = () => (
    user.tasks.map((task, index) => (
      <div key={task.id}>
        <h4>
          {`Task Number ${index}`}
        </h4>
        <p>
          {task.description}
        </p>
        <p>
          Status:
          {task.status === 1 ? ' Done' : ' Pending' }
        </p>
      </div>
    ))
  );

  return (
    <div>
      <h1>{ user.name }</h1>
      <NewTaskForm />
      { user.tasks ? renderTasks() : null }
    </div>
  );
};

const userItemShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  tasks: PropTypes.array,
};

UserDetail.propTypes = {
  selectUser: PropTypes.func.isRequired,
  user: PropTypes.shape(userItemShape).isRequired,
};

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => ({
  selectUser: userId => {
    dispatch(selectUserAsync(userId));
  },
});

const connectedUserDetail = connect(mapStateToProps, mapDispatchToProps)(UserDetail);

export default connectedUserDetail;
