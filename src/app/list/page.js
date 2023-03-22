"use client";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { TransitionGroup } from "react-transition-group";
import useInterval from "../useInterval";
import { EVENT_TYPES } from "@/app/consts";

function renderItem({ item }) {
  return (
    <ListItem data-testid={item.id}>
      <ListItemText primary={item.target} secondary={item.value.title} />
    </ListItem>
  );
}

export default function DrawerList({listOfEvents, setlistOfEvents, filterValue}) {

  const handleAddFruit = () => {
    setlistOfEvents((items) => {
      const id = items[0].id + 1;

      items.unshift({
        id,
        target: "Rich Hood " + id,
        value: EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length)],
      });
      return [...items];
    });
  };

  const handleRemoveFruit = (item) => {
    setlistOfEvents((prev) => [...prev.filter((i) => i !== item)]);
  };

  // useInterval(handleAddFruit, 2000);

  return (
    <div>
      <Box sx={{ mt: 1 }}>
        <List data-testid="eventlist">
          <TransitionGroup>
            {listOfEvents.filter((item) => !filterValue ? true : item.target === filterValue).map((item) => (
              <Collapse key={item.id}>
                {renderItem({ item, handleRemoveFruit })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  );
}
