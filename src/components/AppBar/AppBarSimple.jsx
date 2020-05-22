import React from "react";
import { useFirebase } from "react-redux-firebase";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";

import { Link as RouterLink, useHistory } from "react-router-dom";

import styles from "./AppBar.module.css";

const AppBarSimple = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  const handleProfile = () => {
    history.push("/profile");
    setAnchorEl(null);
  };

  const firebase = useFirebase();
  const handleLogOut = () => {
    firebase.logout();
    setAnchorEl(null);
  };

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
        <IconButton color="inherit" aria-label="profile" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSimple;
