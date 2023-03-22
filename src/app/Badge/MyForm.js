"use client";

import React, { useState } from "react";
import { socket } from "@/socket";
import EventType from "./EventType";

export function MyForm() {
  const [eventType, setEventType] = useState();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log("value", value);

    const obj = {
      id: 0,
      target: value,
      value: eventType,
    };

    socket.emit("foo", obj, (msg) => {
      console.log("cleanup?", msg);
      setIsLoading(false);
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleEventChange = (value) => {
    setEventType(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <EventType onChange={handleEventChange} />
      <input onChange={handleChange} />
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
