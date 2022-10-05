import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import { GoToTop } from "./store";

import { LoginStateContext } from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <GoToTop />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
