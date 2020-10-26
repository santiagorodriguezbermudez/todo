import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserAsync, removeTaskAsync } from '../actions/index';
import NewTaskForm from './NewTaskForm';

const UserDetail = props => {
  const { id } = useParams();
  const { selectUser, user, removeTask } = props;

  React.useEffect(() => {
    selectUser(id);
  }, []);

  const handleDeleteClick = task => {
    removeTask(task);
  };

  const handleKeyDown = (e, task) => {
    if (e.keyCode === 13) {
      removeTask(task);
    }
  };

  const renderTasks = () => (
    user.tasks.map(task => (
      <div key={task.id}>
        <h4 style={{ display: 'flex', alignItems: 'center' }}>
          {`Task: ${task.description}  `}
          <span onClick={() => handleDeleteClick(task)} onKeyDown={e => handleKeyDown(e, task)} role="button" tabIndex="0" className="material-icons">
            delete
          </span>
        </h4>
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
  removeTask: PropTypes.func.isRequired,
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
  removeTask: taskId => {
    dispatch(removeTaskAsync(taskId));
  },
});

const connectedUserDetail = connect(mapStateToProps, mapDispatchToProps)(UserDetail);

export default connectedUserDetail;
