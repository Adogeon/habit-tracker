import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";

const AppBarSimple = (props) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5">{props.title}</Typography>
        <IconButton edge="end" color="inherit" aria-label="add">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSimple;
