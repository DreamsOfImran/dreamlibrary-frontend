import React, { useState, useEffect } from "react";
import axios from "axios";
import { addToCart, removeFromCart } from "../../crud/cart.crud";

const BookPage = (props) => {
  const [book, setBook] = useState({});
  const [cartStatus, setCartStatus] = useState(false);
  useEffect(() => {
    axios.get("/book/" + props.match.params.id).then((response) => {
      setBook(response.data.book);
      axios.get("/book/status/" + props.match.params.id).then((res) => {
        setCartStatus(res.data.cart);
      });
    });
  }, [props.match.params.id]);
  const addToCartHandler = () => {
    addToCart(book._id);
    setCartStatus(true);
  };
  const removeFromCartHandler = () => {
    removeFromCart(book._id);
    setCartStatus(false);
  };
  return (
    <div className="container my-5">
      <h1 className="py-4">{book.title}</h1>

      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={book.image_url} alt="" />
        </div>

        <div className="col-md-6">
          <h3 className="my-3">Summary</h3>
          <p>{book.summary}</p>
          <h3 className="my-3">Details</h3>
          <ul>
            <li>
              <b>Author: </b>
              {book.author}
            </li>
            <li>
              <b>Category: </b>
              {book.category}
            </li>
            <li>
              <b>ISBN: </b>
              {book.isbn}
            </li>
            <li>
              <b>Published on: </b>
              {book.published_on}
            </li>
          </ul>
          {cartStatus ? (
            <button className="btn btn-dark" onClick={removeFromCartHandler}>
              Remove from cart
            </button>
          ) : (
            <button className="btn btn-dark" onClick={addToCartHandler}>
              Add to cart
            </button>
          )}
        </div>
      </div>

      {/* <h3 className="my-4">Related Projects</h3>

      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default BookPage;
