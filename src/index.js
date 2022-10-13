import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import { GoToTop } from "./store";

import { LoginStateContext } from "./components/context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <LoginStateContext.Provider value={sessionStorage.getItem("token")}>
        <RecoilRoot>
          <BrowserRouter>
            <GoToTop />
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </LoginStateContext.Provider>
    </DndProvider>
  </React.StrictMode>
);
