import { useEffect } from 'react';

import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import './App.css';
import { useGetUserByTokenQuery } from './redux/api/user.api.slice';
import { setNewNotification } from './redux/slices/notificationSlice';
import Router from './router/Router';
import socketHandlers from './socketHandlers';
export const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER_URL);

function App() {
  const dispatch = useDispatch();
  const { data: user, isLoading, isError } = useGetUserByTokenQuery();

  useEffect(() => {
    socketHandlers({
      socket,
      dispatch,
      setNewNotification,
    });
    const existed = Cookies.get('token');
    console.log(existed);
    return () => {};
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
