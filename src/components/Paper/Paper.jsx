import React from "React";
import Paper from "@material-ui/core/Paper";

const PaperMain = (props) => {
  return (
    <Paper xs={12} md={6} elevation={3}>
      {props.children}
    </Paper>
  );
};

export default PaperMain;
