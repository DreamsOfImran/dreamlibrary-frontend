import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../crud/user.crud";

const Register = (props) => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    register(values)
      .then(() => {
        toast.success("User created successfully");
        props.history.push("/login");
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.log(err);
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
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="First Name"
                  required
                  value={values.first_name}
                  onChange={(e) =>
                    setValues({ ...values, first_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  value={values.last_name}
                  onChange={(e) =>
                    setValues({ ...values, last_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
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
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-black">
                Register
              </button>
            </form>
          </div>
          <Link to="/login" className="text-decoration-none">
            Already have an account, Sign in
          </Link>
        </div>
      </div>
    </>
  );
};
export default Register;
