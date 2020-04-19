import React from "react";

import Paper from "@material-ui/core/Paper";

import HabitTable from "../../components/HabitTable";

const HomePage = () => (
  <Paper variant="outlined" square>
    <HabitTable/>
  </Paper>
);

export default HomePage;
