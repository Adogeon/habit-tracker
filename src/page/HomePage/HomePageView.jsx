import React from "react";

import Typography from "@material-ui/core/Typography";

import HabitTable from "../../components/HabitTable";

const HomePageView = ({ uid, profile }) => {
  return (
    <main>
      <Typography variant="h3">Hello {profile.username}</Typography>
      <HabitTable userId={uid} />
    </main>
  );
};

export default HomePageView;
