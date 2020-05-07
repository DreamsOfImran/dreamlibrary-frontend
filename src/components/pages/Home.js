import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Carousel";
import BookList from "../BookList";

const Home = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("/book/list").then((response) => {
      setBooks(response.data.books);
    });
  }, []);
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1 className="text-center">Latest Collections</h1>
        <BookList books={books} />
      </div>
    </div>
  );
};

export default Home;
