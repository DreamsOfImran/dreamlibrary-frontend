import axios from "axios";

export function bookList() {
  return axios.get("/book/list");
}
