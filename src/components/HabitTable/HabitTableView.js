import React from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

import HabitRow from "./HabitRow";

import useDateArrGen from "../../hooks/useDateArrGen";

const HabitTable = ({ habits }) => {
  const dateArr = useDateArrGen();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>{""}</TableCell>
            {dateArr.map((date) => (
              <TableCell align="center" key={date.utc()}>
                <Grid container direction="column">
                  <Typography variant="h7">{date.format("ddd")}</Typography>
                  <Typography variant="h5">{date.format("DD")}</Typography>
                </Grid>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {habits &&
            habits.map((habit) => {
              return <HabitRow habit={habit} id={habit.id} key={habit.id} />;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HabitTable;
