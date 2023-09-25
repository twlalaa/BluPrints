import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Router
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
