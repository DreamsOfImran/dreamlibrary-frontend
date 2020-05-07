import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    axios
      .post("/auth/login", { email, password })
      .then((response) => {
        props.dispatch(authActions.loginUser(response.data));
        props.history.push("/");
      })
      .catch((error) => {
        if (!!error.response) {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      });
  };
  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Application
            <br /> Login Page
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-black">
                Login
              </button>
            </form>
          </div>
          <Link to="/register" className="text-decoration-none">
            Don't have an account, Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(Login);
