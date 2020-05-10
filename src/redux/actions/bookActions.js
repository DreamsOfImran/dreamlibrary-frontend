import actionTypes from "./actionTypes";

export function loadBookList(payload) {
  return { type: actionTypes.LoadBooks, payload };
}

export function addToBookList(item) {
  return { type: actionTypes.AddBook, item };
}

export function removeFromBookList(id) {
  return { type: actionTypes.RemoveBook, id };
}
