import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { toast } from "react-toastify";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import BooksPage from "./components/pages/admin/BooksPage";
import NavBar from "./components/NavBar";
import AddBook from "./components/pages/admin/AddBook";
import BookPage from "./components/pages/BookPage";

toast.configure();

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const { isAuthorized, user } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.token != null,
      user: auth.user,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (
      isAuthorized &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      history.push("/");
    }
  }, [isAuthorized, history, location.pathname]);
  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <NavBar user={user} />
      )}
      <Switch>
        {!isAuthorized ? (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        ) : null}
        <Route path="/" exact component={Home} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/admin/books/new" component={AddBook} />
        <Route path="/admin/books" component={BooksPage} />
      </Switch>
    </>
  );
};

export default App;
