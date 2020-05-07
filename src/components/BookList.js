import React from "react";
import Book from "./Book";

const BookList = (props) => {
  return (
    <div className="container">
      <div className="row my-4">
        {props.books.map((book) => (
          <Book key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
