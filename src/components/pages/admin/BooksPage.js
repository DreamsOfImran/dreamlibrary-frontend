import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BooksPage = () => {
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    axios.get("/book/list").then((response) => {
      setBooksList(response.data.books);
    });
  }, []);

  const onEditHandler = (book_id) => {
    console.log(book_id);
  };

  const onDeleteHandler = (book_id) => {
    axios.delete("/book/remove/" + book_id).then((response) => {
      if (response.data?.success) {
        setBooksList(booksList.filter((book) => book._id !== book_id));
        toast.warn("Book is removed from database!");
      }
    });
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h2 className="pt-4">Books List</h2>
        <Link to="/admin/books/new" className="btn btn-black my-auto">
          + Add Book
        </Link>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book, index) => (
            <tr key={book._id}>
              <th scope="row">{index + 1}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={() => onEditHandler(book._id)}
                >
                  Edit
                </button>
                {" | "}
                <button
                  className="btn btn-link text-decoration-none text-danger"
                  onClick={() => onDeleteHandler(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksPage;
