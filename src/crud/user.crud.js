import axios from "axios";

export function register(payload) {
  return axios.post("/user/new", { ...payload });
}
