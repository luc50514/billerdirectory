const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("server.js / a user connected");

  socket.on("foo", (msg, callback) => {
    console.log("server.js / foo", msg);
    io.emit("foo", msg);
    callback(msg);
  });
});

io.on("disconnect", () => {
  console.log("server.js / a user disconnected");
});

io.listen(4000);
