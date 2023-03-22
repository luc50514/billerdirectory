"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { TransitionGroup } from "react-transition-group";

const getInitials = (name) => {
  let initials = name.split(" ");

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }

  return initials.toUpperCase();
};

const renderItem = (item) => {
  return (
    <ListItem data-testid={item.id}>
      <ListItemAvatar>
        <Avatar alt="biller name">{getInitials(item.target)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.target} secondary={item.value?.title} />
    </ListItem>
  );
};

export default function DrawerList({
  listOfEvents,
  setlistOfEvents,
  filterValue,
}) {
  return (
    <Box sx={{ mt: 1 }}>
      <List data-testid="eventlist">
        <TransitionGroup>
          {listOfEvents
            .filter((item) =>
              !filterValue ? true : item.target === filterValue
            )
            .map((item) => (
              <Collapse key={item.id}>{renderItem(item)}</Collapse>
            ))}
        </TransitionGroup>
      </List>
    </Box>
  );
}
