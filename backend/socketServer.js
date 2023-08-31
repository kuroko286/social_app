const { Server } = require("socket.io");
const { authSocket } = require("./middlewares/authSocket");

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
  io.on("connection", (socket) => {
    console.log("a user connected");
    console.log(socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

module.exports = { registerSocketServer };
