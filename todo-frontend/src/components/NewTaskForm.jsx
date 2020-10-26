import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTaskAsync } from '../actions/index';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { description } = this.state;
    const { createTask, userId } = this.props;
    createTask({ description, userId });
    this.setState({ description: '' });
  }

  handleNameChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  render() {
    const { description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <p>Add a new Task</p>
        <div>
          <input type="text" value={description} onChange={this.handleNameChange} required placeholder="New Task" />
          <input type="submit" value="Add new task" />
        </div>
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  userId: '',
};

NewTaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

const mapStateToProps = state => ({
  userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  createTask: taskData => {
    dispatch(createTaskAsync(taskData));
  },
});

const ConnectedNewTaskForm = connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);

export default ConnectedNewTaskForm;
