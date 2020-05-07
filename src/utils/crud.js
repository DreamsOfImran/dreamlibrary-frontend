import axios from "axios";
import { toast } from "react-toastify";

export const addToCart = (book_id) => {
  axios.post("/cart/add", { book_id }).then((response) => {
    toast.success(response.data?.message);
    return response.data?.success;
  });
};

export const removeFromCart = (book_id) => {
  axios.delete("/cart/remove/" + book_id).then((response) => {
    toast.success(response.data?.message);
    return response.data?.success;
  });
};
