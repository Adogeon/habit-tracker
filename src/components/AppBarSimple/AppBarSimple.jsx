import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

const AppBarSimple = (props) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid item container>
          <Link to={"/"} className={".MuiLink-button"}>
            <HomeIcon />
          </Link>
          <Typography variant="h5">Habit</Typography>
        </Grid>
        <IconButton color="inherit" aria-label="add">
          <AddIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="profile">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSimple;
