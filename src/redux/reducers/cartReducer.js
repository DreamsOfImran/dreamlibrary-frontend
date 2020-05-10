import actionTypes from "../actions/actionTypes";

const initialCartStatus = [];

export default function cartReducer(state = initialCartStatus, action) {
  switch (action.type) {
    case actionTypes.LoadCart:
      return action.payload;
    case actionTypes.AddToCart:
      return [...state.cart, action.payload.cart];
    case actionTypes.RemoveFromCart:
      return state.cart.filter((cart) => cart._id !== action.payload.id);
    default:
      return state;
  }
}
