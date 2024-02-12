import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import io from "socket.io-client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store/store.js";
import ThemeProvider from "./theme/index.jsx";

export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        {/* <ThemeProviderWrapper> */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
        {/* </ThemeProviderWrapper> */}
      </Provider>
    </React.StrictMode>
  </HelmetProvider>
);
