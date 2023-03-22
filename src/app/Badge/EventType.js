"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { EVENT_TYPES } from "@/app/consts";

export default function EventType({ onChange }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {EVENT_TYPES.map(({ id, name, title }) => {
            return (
              <MenuItem key={id} value={name}>
                {title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
