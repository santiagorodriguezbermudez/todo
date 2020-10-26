const visibility = (state = false, action) => {
  switch (action.type) {
    case 'TOOGLE':
      return !state;
    default:
      return state;
  }
};

export default visibility;
