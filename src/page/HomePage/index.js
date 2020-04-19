import React from "react";

import Container from "@material-ui/core/Container";

import HabitTable from "../../../components/HabitTable";

const HomePage = () => (
  <Container maxWidth={false}>
    <HabitTable />
  </Container>
);

export default HomePage;
