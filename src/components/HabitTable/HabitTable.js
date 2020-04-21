import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import HabitRow from "./HabitRow";

const HabitTable = ({ habits }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell colspan={5}>{""}</TableCell>
          <TableCell align="center">
            <Typography variant="h6">Mon</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="h6">Tue</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="h6">Wed</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="h6">Thu</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="h6">Fri</Typography>
          </TableCell>
        </TableHead>
        <TableBody>
          <HabitRow habitName={"Habit 1"} />
          <HabitRow habitName={"Habit 2"} />
          <HabitRow habitName={"Habit 3"} />
          <HabitRow habitName={"Habit 4"} />
          <HabitRow habitName={"Habit 5"} />
          {habits.map((habit) => (
            <HabitRow habitName={habit.name} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HabitTable;
