import { combineReducers } from "redux";
import auth from "./authReducer";
import cart from "./cartReducer";
import books from "./bookReducer";

const rootReducer = combineReducers({ auth, cart, books });

export default rootReducer;
