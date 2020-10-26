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
    case 'REMOVE_USER':
      return [
        ...state.slice(0, state.indexOf(action.user)),
        ...state.slice(state.indexOf(action.user) + 1),
      ];
    case 'SHOW_USER':
      return {
        id: action.user.id,
        name: action.user.attributes.name,
        tasks: action.user.attributes.tasks,
      };
    default:
      return state;
  }
};

export default users;
