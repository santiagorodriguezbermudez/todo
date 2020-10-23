const users = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      console.log(action.users);
      return action.users.map(user => ({
        id: user.id,
        name: user.attributes.name,
        tasks: user.attributes.tasks,
      }));
    default:
      return state;
  }
};

export default users;
