import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/main.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { setupAxios, loadState, saveState } from "./utils/utils";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const persistedState = loadState();
const store = configureStore({ auth: persistedState });

store.subscribe(() => {
  saveState(store.getState().auth);
});

setupAxios(axios, store);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
