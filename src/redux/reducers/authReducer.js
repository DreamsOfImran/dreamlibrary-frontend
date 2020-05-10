import actionTypes from "../actions/actionTypes";

const intialAuthState = {
  user: undefined,
  token: undefined,
};

export default function authReducer(state = intialAuthState, action) {
  switch (action.type) {
    case actionTypes.Login:
      return { token: action.payload.token, user: action.payload.user };
    case actionTypes.Logout:
      return { token: undefined, user: undefined };
    default:
      return state;
  }
}
