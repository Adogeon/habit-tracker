import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";

import { Link as RouterLink} from "react-router-dom";

import styles from "./AppBar.module.css";

const AppBarSimple = ({ auth, handleLogOut }) => {
  return (
    <AppBar position="static" className={styles.root}>
      <Toolbar>
        <Grid item container alignItems="center">
          <IconButton component={RouterLink} to={"/"}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h4">Habit</Typography>
        </Grid>
        <IconButton
          component={RouterLink}
          to={"/add"}
          color="inherit"
          aria-label="add"
        >
          <AddIcon />
        </IconButton>
        {auth ? (
          <Button
            color="inherit"
            variant="text"
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        ) : (
          <Button component={RouterLink} to={"/signIn"} color="inherit" variant="text">
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSimple;
