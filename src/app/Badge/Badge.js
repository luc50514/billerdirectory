"use client";

import React, { useState, useEffect } from "react";
import { socket } from "@/socket";
import { ConnectionState } from "./ConnectionState";
import { ConnectionManager } from "./ConnectionManager";
import { MyForm } from "./MyForm";
import { Events } from "./Events";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket?.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    const onConnect = () => {
      console.log("onConnect");
      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log("onDisconnect");
      setIsConnected(false);
    };

    const onFooEvent = (value) => {
      console.log("onFooEvent", value);
      setFooEvents((previous) => [...previous, value]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  return (
    <div>
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}
