import React, { Component } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h6">Live Score</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
