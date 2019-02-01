const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mentat");

io.on("connection", socket => {
  socket.on("send-message", message => {
    socket.broadcast.emit("send-message", message);
  });

  socket.on("disconnect", () => {});
});

server.listen(80, function() {
  console.log("Server listening on port 80");
});
