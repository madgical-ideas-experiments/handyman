import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AppTest from "./App/AppTest";
import { Provider } from "react-redux";
import myStore from "./redux/store";
import "../node_modules/font-awesome/css/font-awesome.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <AppTest />
    </Provider>
  </React.StrictMode>
);
