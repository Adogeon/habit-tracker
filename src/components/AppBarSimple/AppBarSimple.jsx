import React from "react";
import { useHistory } from "react-router-dom";
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

import { Link } from "react-router-dom";

const AppBarSimple = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const firebase = useFirebase();
  const handleLogOut = () => {
    firebase.logout();
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ "margin-bottom": "50px" }}>
      <Toolbar>
        <Grid item container>
          <Link to={"/"} className={".MuiLink-button"}>
            <HomeIcon />
          </Link>
          <Typography variant="h5">Habit</Typography>
        </Grid>
        <IconButton color="inherit" aria-label="add">
          <Link to={"/add"}>
            <AddIcon />
          </Link>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSimple;
