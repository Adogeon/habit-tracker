import React from "react";

import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import PaperMain from "../components/PaperMain";
import AppBar from "../components/AppBar";

/*This page will alow user to view all of the habit they have enter
 * User can make entry for today the habit they have done
 * TODO: moving the grid down from AppBar
 * TODO: research why break point doesn't change for grid and PaperMain, adding fixed width as potential option
 * TODO: adding database interaction, probably firestore
 */

const HabitPage = () => {
  return (
    <PaperMain>
      <AppBar></AppBar>
      <Grid container xs={12} md={3} lg={1}>
        <Grid item>
          <Typography variant="h5">Habit 1</Typography>
        </Grid>
        <Grid item>
          <Checkbox></Checkbox>
        </Grid>
      </Grid>
    </PaperMain>
  );
};

export default HabitPage;
