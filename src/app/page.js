"use client";

import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { EVENTS } from "./consts";
import DrawerList from "./list/page";

const drawerWidth = 240;

export default function PermanentDrawerRight() {
  const [listOfEvents, setlistOfEvents] = useState(EVENTS);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Search Billers
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Autocomplete
          id="biller-search"
          options={[...new Set(listOfEvents.map((option) => option.target))]}
          renderInput={(params) => <TextField {...params} label="Search Billers" />}
        />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <DrawerList listOfEvents={listOfEvents} setlistOfEvents={setlistOfEvents} />
      </Drawer>
    </Box>
  );
}
