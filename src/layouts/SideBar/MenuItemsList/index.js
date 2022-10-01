import React from "react";
import { menuItems } from "../../../menu-items";
import { makeStyles } from "@mui/styles";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// style constant
const useStyles = makeStyles((theme) => ({}));

export const MenuItemsList = () => {
  const classes = useStyles();
  return (
    <List>
      {menuItems?.map((item) => {
        const Icon = item.icon;
        const itemIcon = <Icon stroke={1.5} size="1.3rem" />;
        return (
          <ListItemButton
            key={item.id}
            color="inherit"
            onClick={() => console.log(item.id)}
          >
            <ListItemIcon>{itemIcon}</ListItemIcon>
            <ListItemText primary={<Typography>{item.title}</Typography>} />
          </ListItemButton>
        );
      })}
    </List>
  );
};
