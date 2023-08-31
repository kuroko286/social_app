const jwt = require("jsonwebtoken");

const authSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    socket.user = decoded;
  } catch (err) {
    const socketError = new Error("NOT_AUTHORIZED");
    return next(socketError);
  }

  next();
};

module.exports = { authSocket };
