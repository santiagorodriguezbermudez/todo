import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserAsync } from '../actions/index';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { createUser } = this.props;
    createUser({ name });
    this.setState({ name: '' });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <p>Add new User</p>
        <div>
          <input type="text" value={name} onChange={this.handleNameChange} required placeholder="User name" />
          <input type="submit" value="Add new user" />
        </div>
      </form>
    );
  }
}

NewUserForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createUser: userData => {
    dispatch(createUserAsync(userData));
  },
});

const ConnectedNewUserForm = connect(null, mapDispatchToProps)(NewUserForm);

export default ConnectedNewUserForm;
