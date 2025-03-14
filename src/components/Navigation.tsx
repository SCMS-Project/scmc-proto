import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { menuItems } from "../constants";

type NavMenuProps = {
  isNavMenuOpen: boolean;
  onCloseNavigationMenu: () => void;
  navigate: (path: string) => void;
};

const NavigationPane: React.FC<NavMenuProps> = ({
  isNavMenuOpen, onCloseNavigationMenu, navigate,
}) => {
  const handleNavigation = (path: string) => {
    navigate(path);
    onCloseNavigationMenu();
  }

  return (
    <SwipeableDrawer
      anchor="left"
      open={isNavMenuOpen}
      onClose={onCloseNavigationMenu}
      onOpen={() => { }}
      className="navigation-pane"
      sx={{
        width: 300,
        '& .MuiDrawer-paper': {
          width: 300,
        }
      }}
    >
      <div className="navigation-pane__header">
        <h2 className="navigation-pane__title">Smart Campus Management System</h2>
      </div>

      <List className="navigation-pane__list">
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className="navigation-pane__list-item"
          >
            <ListItemText
              primary={item.label}
              className="navigation-pane__list-item-text"
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default NavigationPane;
