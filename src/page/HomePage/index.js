import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

import HabitTable from "../../components/HabitTable";

const HomePage = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
 
  return (
    <main>
      <Typography variant="h2">Habits</Typography>
      <HabitTable userId={uid}/>
    </main>
  );
};

export default HomePage;
