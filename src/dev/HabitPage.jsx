import React from "react";

import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import PaperMain from "../components/PaperMain";
import AppBar from "../components/AppBarSimple";
import HabitTable from "../components/HabitTable";

/*This page will alow user to view all of the habit they have enter
 * User can make entry for today the habit they have done
 * TODO: --DONE moving the grid down from AppBar
 * TODO: --DONE research why break point doesn't change for grid and PaperMain, adding fixed width as potential option
 * TODO: --DONE refractor the habit grid
 * TODO: adding database interaction, probably firestore
 * TODO: adding function to pull from the database to feed the table 
 * TODO: adding function to push checkbox to the database
 * 
 * 
 */

const HabitPage = () => {
  return (
    <>
      <AppBar title={"Habits"} />
      <PaperMain>
        <HabitTable />
      </PaperMain>
    </>
  );
};

export default HabitPage;
