import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-4">
      <div className="hovereffect">
        <img
          className="img-responsive"
          src={props.image_url}
          alt=""
          style={{ height: "350px" }}
        />
        <div className="overlay">
          <Link to={"/book/" + props._id}>
            <h2>{props.title}</h2>
          </Link>
          {props.status ? (
            <a className="info" href={"/book/" + props._id}>
              Remove from cart
            </a>
          ) : (
            <a className="info" href={"/book/" + props._id}>
              Add to cart
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
