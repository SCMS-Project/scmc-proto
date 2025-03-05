import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { menuItems } from "../constants";

type NavMenuProps = {
  isNavMenuOpen: boolean;
  onCloseNavigationMenu: () => void;
};

const NavigationPane: React.FC<NavMenuProps> = ({ isNavMenuOpen, onCloseNavigationMenu }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isNavMenuOpen}
      onClose={onCloseNavigationMenu}
      onOpen={() => {}}
      className="navigation-pane"
      sx={{
        width: '20%',
        '& .MuiDrawer-paper': {
          width: '20%',
        }
      }}
    >
      <List className="navigation-pane__list">
        {menuItems.map((text) => (
          <ListItem
            button
            key={text}
            onClick={onCloseNavigationMenu}
            className="navigation-pane__list-item navigation-pane__list-item--hover"
          >
            <ListItemText
              primary={text}
              className="navigation-pane__list-item-text navigation-pane__list-item-text--hover"
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default NavigationPane;