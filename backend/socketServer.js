const { Server } = require("socket.io");
const { authSocket } = require("./middlewares/authSocket");
const serverStore = require("./serverStore");

const registerSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  io.use((socket, next) => {
    authSocket(socket, next);
  });
  const emitOnlineUsers = () => {
    const onlineUsers = serverStore.getOnlineUsers();
    io.emit("online users", { onlineUsers });
  };
  io.on("connection", (socket) => {
    console.log("a user connected");
    console.log(socket.id);
    serverStore.addNewConnectedUser({
      socketId: socket.id,
      userId: socket.user.id,
    });
    socket.join(socket.user.id);

    emitOnlineUsers();

    socket.on("disconnect", () => {
      console.log("user disconnected");
      serverStore.removeConnectedUser(socket.id);
    });

    socket.on("send message", ({ from, to, text }) => {
      socket.to(from).to(to).emit("receive message", { from, to, text });
    });

    socket.on("send reaction", ({ from, to, text }) => {
      socket.to(to).emit("receive reaction", { from, to, text, seen: false });
    });

    socket.on("send comment", ({ from, to, comment }) => {
      socket.to(to).to(from).emit("receive comment", { from, to, comment });
    });

    setInterval(() => {
      emitOnlineUsers();
    }, 4 * 60 * 1000);
  });
};

module.exports = { registerSocketServer };
