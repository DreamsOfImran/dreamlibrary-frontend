import React, { useState } from "react";
import axios from "axios";

const AddBook = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [published_on, setPublishedOn] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [image_url, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [quantity, setQuantity] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("/book/new", {
        title,
        author,
        isbn,
        published_on,
        image_url,
        category,
        summary,
        quantity,
      })
      .then((response) => {
        props.history.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container my-5">
      <h1>Add New Book Page</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="bookTitle">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="bookTitle"
              placeholder="Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookAuthor">Author Name</label>
            <input
              type="text"
              name="author"
              className="form-control"
              id="bookAuthor"
              placeholder="Author Name"
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookISBN">ISBN</label>
            <input
              type="text"
              name="isbn"
              className="form-control"
              id="bookISBN"
              placeholder="ISBN"
              value={isbn}
              required
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookPublishedOn">Published On</label>
            <input
              type="date"
              name="published_on"
              className="form-control"
              id="bookPublishedOn"
              placeholder="Published On"
              value={published_on}
              required
              onChange={(e) => setPublishedOn(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookImage">Cover Image URL</label>
            <input
              type="url"
              name="image_url"
              className="form-control"
              id="bookImage"
              placeholder="Cover Image URL"
              value={image_url}
              required
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookCategory">Category</label>
            <select
              className="form-control"
              id="bookCategory"
              name="category"
              required
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option disabled value="">
                Select Category
              </option>
              <option value="Fiction">Fiction</option>
              <option value="Non-fiction">Non-fiction</option>
              <option value="Action">Action</option>
              <option value="Autobiography">Autobiography</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bookSummary">Summary</label>
            <textarea
              className="form-control"
              name="summary"
              id="bookSummary"
              rows="3"
              value={summary}
              required
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="bookQuantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              id="bookQuantity"
              placeholder="Quantity"
              value={quantity}
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddBook;
