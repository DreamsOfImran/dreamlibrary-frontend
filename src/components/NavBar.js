import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Dream Library
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/book" activeClassName="active">
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="/authors"
                activeClassName="active"
              >
                Authors
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            {props.user?.is_admin ? (
              <li className="nav-item active dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Admin Panel
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/admin/books">
                    Books
                  </NavLink>
                  <a className="dropdown-item" href="#">
                    Categories
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Users
                  </a>
                </div>
              </li>
            ) : null}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/cart">
                <FaShoppingCart /> Cart
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                {props.user?.first_name}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
