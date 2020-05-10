import React, { useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "../Carousel";
import BookList from "../BookList";
import { bookList } from "../../crud/book.crud";
import * as cartActions from "../../redux/actions/cartActions";
import * as bookActions from "../../redux/actions/bookActions";
import { cartList } from "../../crud/cart.crud";

const Home = (props) => {
  useEffect(() => {
    cartList().then((response) => {
      props.loadCartList(response.data.cartList);
    });
    bookList().then((response) => {
      props.loadBookList(response.data.books);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1 className="text-center">Latest Collections</h1>
        <BookList books={props.state.books} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { ...cartActions, ...bookActions })(
  Home
);
