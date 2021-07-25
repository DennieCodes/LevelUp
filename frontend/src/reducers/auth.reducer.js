const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return [
        {
          user_id: action.id,
          username: action.username,
          isAuthenticated: true,
        },
      ];
    case "REGISTER":
      return state;
    case "LOGOUT":
      return state;
    default:
      return state;
  }
};

export default reducer;

// const defaultUser = {
//   user_id: "",
//   username: "",
//   isAuthenticated: false,
// };
