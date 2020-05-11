import React from "react";
import Paper from "@material-ui/core/Paper";

const PaperMain = (props) => {
  return (
    <Paper xs={12} md={6} elevation={3}>
      {props.children}
    </Paper>
  );
};

export default PaperMain;
