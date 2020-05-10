import actionTypes from "./actionTypes";

export function loginUser(payload) {
  return { type: actionTypes.Login, payload };
}

export function logoutUser() {
  return { type: actionTypes.Logout };
}
