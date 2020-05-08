export function loginUser(payload) {
  return { type: "LOGIN_USER", payload };
}

export function logoutUser() {
  return { type: "LOGOUT_USER" };
}
