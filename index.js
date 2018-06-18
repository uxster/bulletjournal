import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

// main routes
import AppRoutes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById("app")
);
