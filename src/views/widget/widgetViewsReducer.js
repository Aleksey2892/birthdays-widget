function reducer(state, action) {
  const usersLength = action.allUsers.length;
  const moreCounter = state.moreCounter + action.counter;

  switch (action.type) {
    case 'firstLoad':
      return {
        slicedUsers: [...action.users],
        moreCounter: usersLength > moreCounter ? moreCounter : usersLength,
      };
    case 'slicedUsers':
      return {
        slicedUsers: [...action.users],
        moreCounter: usersLength > moreCounter ? moreCounter : usersLength,
      };
    default:
      return {
        slicedUsers: [],
        moreCounter: 6,
      };
  }
}

export default reducer;
