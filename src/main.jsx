import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./component/shared/NavBar/NavBar.jsx";
import "./index.css";
import Router from "./router/Router.jsx";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <CssBaseline />

      <NavBar />
      <Router>{/* <App /> */}</Router>
    </ThemeProviderWrapper>
  </React.StrictMode>
);
