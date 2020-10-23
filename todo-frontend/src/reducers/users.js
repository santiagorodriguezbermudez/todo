const users = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.users.map(user => ({
        id: user.id,
        name: user.attributes.name,
        tasks: user.attributes.tasks,
      }));
    case 'CREATE_USER':
      return [
        ...state,
        action.user,
      ];
    default:
      return state;
  }
};

export default users;
