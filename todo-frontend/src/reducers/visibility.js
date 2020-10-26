const visibility = (state = false, action) => {
  switch (action.type) {
    case 'TOOGLE':
      return !state;
    case 'HIDE':
      return false;
    default:
      return state;
  }
};

export default visibility;
