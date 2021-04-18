function reducer(state, action) {
  switch (action.type) {
    case 'slicedUsers':
      return {
        slicedUsers: [...action.users],
        moreCounter: state.moreCounter + action.counter,
      };
    case 'firstLoad':
      return {
        slicedUsers: [...action.users],
        moreCounter: state.moreCounter + action.counter,
      };
    default:
      return {
        slicedUsers: [],
        moreCounter: 0,
      };
  }
}

export default reducer;
