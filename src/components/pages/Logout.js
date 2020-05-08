import React, { useEffect } from "react";
import axios from "axios";
import { removeState } from "../../utils/utils";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";

const Logout = (props) => {
  useEffect(() => {
    const runOnMount = async () => {
      await axios.delete("/auth/logout");
      props.dispatch(authActions.logoutUser());
      await removeState();
    };
    runOnMount();
  });
  return <Redirect to="/login" />;
};

export default connect(null)(Logout);
