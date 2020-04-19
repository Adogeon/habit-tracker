import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import CheckBox from "@material-ui/core/CheckBox";

const HabitRow = (props) => {
  return (
    <TableRow>
      <TableCell colSpan={5}>
        <Typography variant={"h4"}>{props.habitName}</Typography>
      </TableCell>
      <TableCell align="center">
        <CheckBox />
      </TableCell>
      <TableCell align="center">
        <CheckBox />
      </TableCell>
      <TableCell align="center">
        <CheckBox />
      </TableCell>
      <TableCell align="center">
        <CheckBox />
      </TableCell>
      <TableCell align="center">
        <CheckBox />
      </TableCell>
    </TableRow>
  );
};

export default HabitRow;
