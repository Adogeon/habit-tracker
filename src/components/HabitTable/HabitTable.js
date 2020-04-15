import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import HabitRow from "./HabitRow";

const HabitTable = () => {
  return (
    <Grid container xs={12} direction={"column"}>
      <Grid item xs={12} container justify="flex-end">
        <Grid
          item
          xs={6}
          container
          alignItems={"center"}
          justify={"space-between"}
        >
          <Grid item xs={2} justify={"center"}>
            <Typography variant="h5">Mon</Typography>
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Typography variant="h5">Tue</Typography>
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Typography variant="h5">Wed</Typography>
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Typography variant="h5">Thu</Typography>
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Typography variant="h5">Fri</Typography>
          </Grid>
        </Grid>
      </Grid>
      <HabitRow habitName={"Habit 1"} />
      <HabitRow habitName={"Habit 2"} />
      <HabitRow habitName={"Habit 3"} />
      <HabitRow habitName={"Habit 4"} />
      <HabitRow habitName={"Habit 5"} />
    </Grid>
  );
};

export default HabitTable;
