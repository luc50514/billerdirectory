"use client";

import React, { useState } from "react";
import { socket } from "@/socket";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log("value", value);

    socket.emit("foo", value, () => {
      console.log("cleanup?");
      setIsLoading(false);
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
