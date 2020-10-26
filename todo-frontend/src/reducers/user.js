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
    case 'REMOVE_TASK':
      console.log('THIS IS THE ACTION FOR DELETE');
      console.log(action);
      console.log('THIS IS THE STATE FOR DELETE');
      console.log(state);
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, state.tasks.indexOf(action.task)),
          ...state.tasks.slice(state.tasks.indexOf(action.task) + 1),
        ],
      };
    default:
      return state;
  }
};

export default user;
