"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { EVENT_TYPES } from "@/app/consts";

export default function EventType({ onChange }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const id = event.target.value;
    const eventType = EVENT_TYPES.find((type) => type.id === id);

    setValue(event.target.value);
    onChange(eventType);
  };

  return (
    <Box sx={{ maxWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {EVENT_TYPES.map(({ id, title }) => {
            return (
              <MenuItem key={id} value={id}>
                {title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
