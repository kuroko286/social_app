import { store } from "@/reducers";
import { addMessage } from "@/reducers/chatReducer";
import { setConnectedUser } from "@/reducers/friendReducer";
import { addNotification } from "@/reducers/notificationReducer";
import { useDispatch } from "react-redux";
import io from "socket.io-client";

let socket = null;

export const connectSocketServer = (user) => {
  socket = io("http://localhost:8000", {
    auth: {
      token: user.token,
    },
  });

  socket.on("connect", () => {
    console.log("connected to socket server");
    console.log(socket.id);
  });
  socket.on("receive message", (data) => {
    store.dispatch(addMessage(data));
  });
  socket.on("receive reaction", (data) => {
    // handle reaction
    store.dispatch(addNotification(data));
  });
  socket.on("receive comment", (data) => {
    // handle comments
    store.dispatch(addNotification(data));
  });
  socket.on("online users", ({ onlineUsers }) => {
    store.dispatch(setConnectedUser(onlineUsers));
  });
};

export const disconnectSocketServer = () => {
  if (socket) {
    socket.disconnect();
  }
};

export const handleSendMessage = (data) => {
  socket.emit("send message", data);
};

export const handleSendReaction = (data) => {
  socket.emit("send reaction", data);
};

export const socketSendComment = (data) => {
  socket.emit("send comment", data);
};

export default socket;
