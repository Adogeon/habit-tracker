import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import HabitTable from "../../components/HabitTable";

const HomePage = () => (
  <main>
    <Typography variant="h2">Habits</Typography>
    <HabitTable />
  </main>
);

export default HomePage;
