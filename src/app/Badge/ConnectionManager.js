"use client";

import React from "react";
import { socket } from "@/socket";

const connect = () => {
  console.log("socket.connect();");
  socket.connect();
};

const disconnect = () => {
  console.log("socket.disconnect();");
  socket.disconnect();
};

export function ConnectionManager() {
  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  );
}
