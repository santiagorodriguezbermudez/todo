const user = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_USER':
      return {
        id: action.user.id,
        name: action.user.attributes.name,
        tasks: action.user.attributes.tasks,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.data.id,
            description: action.data.attributes.description,
            status: action.data.attributes.state,
          },
        ],
      };
    default:
      return state;
  }
};

export default user;
