"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { socket } from "@/socket";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { EVENTS } from "./consts";
import DrawerList from "./list/page";
import Badge from "./Badge/Badge";
import ConnectionManager from "./ConnectionManager";

const drawerWidth = 240;

export default function PermanentDrawerRight() {
  const [listOfEvents, setlistOfEvents] = useState(EVENTS);
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    const addEvent = (value) => {
      console.log("onFooEvent", value);
      setlistOfEvents((items) => {
        items.unshift(value);
        return [...items];
      });
    };

    socket.on("foo", addEvent);

    return () => {
      socket.off("foo", addEvent);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Biller Directory
          </Typography>
          <ConnectionManager />
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 0, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Autocomplete
          value={filterValue}
          id="biller-search"
          data-testid="biller-search"
          options={[...new Set(listOfEvents.map((option) => option.target))]}
          renderInput={(params) => (
            <TextField {...params} label="Search Billers" />
          )}
          onChange={(event, newValue) => {
            setFilterValue(newValue);
          }}
        />
        <Badge />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <DrawerList
          listOfEvents={listOfEvents}
          setlistOfEvents={setlistOfEvents}
          filterValue={filterValue}
        />
      </Drawer>
    </Box>
  );
}
