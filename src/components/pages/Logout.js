import React, { useEffect } from "react";
import { removeState } from "../../utils/utils";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { logout } from "../../crud/auth.crud";

const Logout = (props) => {
  useEffect(() => {
    logout().then(() => {
      props.logoutUser();
      removeState();
    });
  });
  return <Redirect to="/login" />;
};

export default connect(null, authActions)(Logout);
