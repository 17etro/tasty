import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./context/provideContext";

import "./index.scss";

const app = (
  <StateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
);

ReactDOM.render(app, document.getElementById("root"));
