"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";
import useTimeout from "../useTimeout";

const EVENT_TYPES = [
  {
    id: 0,
    name: "addressChanged",
    title: "Address Changed",
  },
  {
    id: 1,
    name: "billerDeleted",
    title: "Biller Deleted",
  },
];

const EVENTS = [
  {
    id: 0,
    target: "Rich Hood",
    value: EVENT_TYPES[0],
  },
  {
    id: 1,
    target: "Rich Hood",
    value: EVENT_TYPES[1],
  },
]

function renderItem({ item }) {
  return (
    <ListItem>
      <ListItemText primary={item.target} secondary={item.value.title}/>
    </ListItem>
  );
}

export default function DrawerList() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(
    EVENTS
  );

  const handleAddFruit = () => {
    setFruitsInBasket((items) => {
      items.push({
        id: items[items.length - 1].id + 1,
        target: "Rich Hood",
        value: EVENT_TYPES[1],
      })
      return items;
    })
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  useTimeout(handleAddFruit, 500)

  return (
    <div>
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>

            {fruitsInBasket.map((item) => (
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
