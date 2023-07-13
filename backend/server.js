const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const { readdirSync } = require("fs");
const app = express();

// parse body payload.
app.use(express.json()); // accept json payload in request.
app.use(express.urlencoded({ extended: true })); // accept string or array payload in request

// environment variables
const PORT = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL;

// cors
app.use(cors());

// routes
readdirSync("./routes").forEach((route) =>
  app.use("/", require("./routes/" + route))
);

// database
mongoose
  .connect(DATABASE_URL)
  .then((connection) => console.log("Database connection established!"))
  .catch((error) => console.log("Error connecting"));

app.get("/", (req, res) => {
  res.send("welcome from home");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
