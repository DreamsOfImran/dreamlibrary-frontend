import axios from "axios";

export function cartList() {
  return axios.get("/cart/list");
}

export const addToCart = (book_id) => {
  return axios.post("/cart/add", { book_id });
};

export const removeFromCart = (book_id) => {
  return axios.delete("/cart/remove/" + book_id);
};
