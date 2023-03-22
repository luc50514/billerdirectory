"use client";

import React from "react";
import { socket } from "@/socket";
import Button from "@mui/material/Button";

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
      <Button
        onClick={connect}
        variant="contained"
        color="info"
        disabled={socket?.connected}
      >
        Connect
      </Button>
      <Button
        onClick={disconnect}
        variant="contained"
        color="warning"
        disabled={!socket?.connected}
      >
        Disconnect
      </Button>
    </>
  );
}
