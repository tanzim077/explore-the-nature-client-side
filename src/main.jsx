import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router.jsx";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderWrapper>
        <CssBaseline />
        <Router>{/* <App /> */}</Router>
      </ThemeProviderWrapper>
    </Provider>
  </React.StrictMode>
);
