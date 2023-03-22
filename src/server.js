// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.listen(4000);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

io.on("disconnect", (socket) => {
  console.log("a user disconnected");
});
