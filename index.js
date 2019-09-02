import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./src/app";
import { Provider } from "react-redux";
import { Store } from "./src/store";
require("dotenv").config();

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  root
);
