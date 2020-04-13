import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const AppBarSimple = (props) => {
  return (
    <AppBar postion="static">
      <Typography variant="h5">{props.title}</Typography>
      <IconButton edge="end" color="inherit" aria-label="menu" />
    </AppBar>
  );
};

export default AppBarSimple;
