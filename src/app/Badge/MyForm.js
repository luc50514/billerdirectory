"use client";

import React, { useState } from "react";
import { socket } from "@/socket";
import EventType from "./EventType";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export function MyForm() {
  const [id, setId] = useState(2);
  const [eventType, setEventType] = useState();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const obj = {
      id,
      target: value,
      value: eventType,
    };

    socket.emit("foo", obj, (msg) => {
      setId(id + 1);
      setIsLoading(false);
      setValue("");
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
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item>
          <EventType onChange={handleEventChange} />
        </Grid>
        <Grid item>
          <TextField
            value={value}
            label="Biller Name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            type="submit"
            disabled={value === "" || isLoading}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
