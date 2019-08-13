const express = require("express"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use("/api/cars", require("./routes"));

server.get("/", (req, res) => {
  let root = {
    message: `Working on root.`,
    status: 200
  };

  res.status(200).json(root);
});

module.exports = server;
