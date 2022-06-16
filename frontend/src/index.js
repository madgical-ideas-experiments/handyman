import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AppRouting from "./App/AppRouting.jsx";
import { Provider } from "react-redux";
import myStore from "./redux/store";
import "../node_modules/font-awesome/css/font-awesome.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <AppRouting />
    </Provider>
  </React.StrictMode>
);
