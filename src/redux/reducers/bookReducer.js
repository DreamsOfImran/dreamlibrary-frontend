import actionTypes from "../actions/actionTypes";

const initialBookList = [];

export default function bookReducer(state = initialBookList, action) {
  switch (action.type) {
    case actionTypes.LoadBooks:
      return action.payload;
    case actionTypes.AddBook:
      return [...state.book, action.payload.book];
    case actionTypes.RemoveBook:
      return state.book.filter((book) => book._id !== action.payload.id);
    default:
      return state;
  }
}
