import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store/store.js";
import Router from "./router/Router.jsx";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProviderWrapper>
          <CssBaseline />
          <Router>{/* <App /> */}</Router>
        </ThemeProviderWrapper>
      </Provider>
    </React.StrictMode>
  </HelmetProvider>
);
