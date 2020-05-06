import React from "react";
import HabitPageView from "./HabitPageView";

const testHabit = {
  name: "Test habit",
  desc: "Test version of habit record",
  reason:
    "Because it is a pain to log in every time to just fix the habit view, otherwise maybe I can find something else to fix. Maybe a dev portal.",
};

const DevView = () => <HabitPageView habit={testHabit} />;

export default DevView;
