import io from "socket.io-client";

export const connectSocketServer = (user) => {
  const socket = io("http://localhost:8000", {
    auth: {
      token: user.token,
    },
  });
  socket.on("connect", () => {
    console.log("connected to socket server");
    console.log(socket.id);
  });
};
