import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUserAsync } from '../actions/index';

class EditUserForm extends React.Component {
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
    const { editUser, userId } = this.props;
    editUser({ userId, name });
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
      <form onSubmit={this.onSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '2em' }}>Edit the user name: </p>
        <input type="text" value={name} onChange={this.handleNameChange} required placeholder="New User Name" />
        <input type="submit" value="Edit User" />
      </form>
    );
  }
}

EditUserForm.defaultProps = {
  userId: '',
};

EditUserForm.propTypes = {
  editUser: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

const mapStateToProps = state => ({
  userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  editUser: userData => {
    dispatch(editUserAsync(userData));
  },
});

const ConnectedEditUserForm = connect(mapStateToProps, mapDispatchToProps)(EditUserForm);

export default ConnectedEditUserForm;
