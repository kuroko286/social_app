const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const fileUpload = require("express-fileupload");
const socketServer = require("./socketServer");
const http = require("http");
const app = express();

//socketio
const server = http.createServer(app);
socketServer.registerSocketServer(server);

// parse body payload.
app.use(express.json()); // accept json payload in request.
app.use(express.urlencoded({ extended: true })); // accept string or array payload in request
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// environment variables
const PORT = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL;

// cors
app.use(cors());

// routes
const features = ["auth", "friends", "post", "user", "search"];
features.forEach((feature) => {
  const router = require(`./feature/${feature}/routes`);
  app.use(`/`, router);
});

// database
mongoose
  .connect(DATABASE_URL)
  .then((connection) => console.log("Database connection established!"))
  .catch((error) => console.log("Error connecting"));

app.get("/", (req, res) => {
  res.send("welcome from home");
});

server.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
