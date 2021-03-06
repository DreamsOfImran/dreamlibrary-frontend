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
import Logout from "./components/pages/Logout";

toast.configure();

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const { isAuthorized, user, cart } = useSelector(
    ({ auth, cart }) => ({
      isAuthorized: auth.token != null,
      user: auth.user,
      cart: cart,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (!isAuthorized && location.pathname !== "/register") {
      history.push("/login");
    }
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
        <NavBar user={user} cart={cart} />
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
        <Route path="/logout" component={Logout} />
        <Route path="/admin/books/new" component={AddBook} />
        <Route path="/admin/books" component={BooksPage} />
      </Switch>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
          <div class="container text-center">
            <small>Copyright &copy; DreamsOfImran</small>
          </div>
        </footer>
      )}
    </>
  );
};

export default App;
