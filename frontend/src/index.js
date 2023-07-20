import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
