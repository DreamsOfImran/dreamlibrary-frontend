import actionTypes from "./actionTypes";

export function loadCartList(payload) {
  return { type: actionTypes.LoadCart, payload };
}

export function addToCart(item) {
  return { type: actionTypes.AddToCart, item };
}

export function removeFromCart(id) {
  return { type: actionTypes.RemoveFromCart, id };
}
