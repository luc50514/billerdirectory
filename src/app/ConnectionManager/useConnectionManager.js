"use client";

import React, { useEffect, useState } from "react";
import { socket } from "@/socket";
import useTimeout from "@/app/useTimeout";

const handleConnect = () => {
  console.log("socket.connect();");
  socket.connect();
};
const handleDisconnect = () => {
  console.log("socket.disconnect();");
  socket.disconnect();
};

export default function useConnectionManager() {
  const [connected, setConnected] = useState(false);

  useTimeout(() => {
    socket.connect();
  }, 1000);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("onConnect");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("onDisconnect");
      setConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return [connected, handleConnect, handleDisconnect];
}
