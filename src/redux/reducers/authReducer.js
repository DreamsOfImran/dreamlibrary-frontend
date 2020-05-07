const intialAuthState = {
  user: undefined,
  token: undefined,
};

export default function userReducer(state = intialAuthState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { token: action.payload.token, user: action.payload.user };
    default:
      return state;
  }
}
