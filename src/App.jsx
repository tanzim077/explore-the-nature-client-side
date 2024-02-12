import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import "./App.css";
import { setNewNotification } from "./redux/slices/notificationSlice";
import Router from "./router/Router";
import { useEffect } from "react";
export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);
import socketHandlers from "./socketHandlers";

function App() {
  const dispatch = useDispatch();
  // useSelector((state) => console.log(state));
  useEffect(() => {
    socketHandlers({
      socket,
      dispatch,
      setNewNotification,
    });
    return () => {};
  }, []);
  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
