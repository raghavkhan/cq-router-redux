const initialStateUser = { users: [] };
export const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
