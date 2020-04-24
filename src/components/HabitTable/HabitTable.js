import React, { useEffect, useState } from "react";
import moment from "moment";

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
            <TableCell colSpan={5}>{""}</TableCell>
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
            Object.keys(habits).map((habitId) => {
              return (
                <HabitRow
                  data={{ id: habitId }}
                  key={habitId}
                />
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HabitTable;
