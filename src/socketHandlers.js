/*
 * File           : socketHandlers.js
 * Project        : explore-the-nature-client-side
 * Created Date   : Mo 12 Feb 2024 12:44:55
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Mon Feb 12 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

const socketHandlers = ({ socket, dispatch, setNewNotification }) => {
  const handleNotification = (notification) => {
    console.log("🚀 ~ handleNotification ~ notification:", notification)
    dispatch(setNewNotification(notification));
  };

  socket.on("notification", handleNotification);
  socket.on("test", handleNotification);

  return () => {
    socket.off("notification", handleNotification);
    socket.off("test", handleNotification);
  };
};

export default socketHandlers;
