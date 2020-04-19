import React from "react";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const AddHabit = () => (
  <form>
    <FormControl fullWidth>
      <TextField label="Habit" variant="outlined" />
      <TextField label="Habit" variant="outlined" />
      <TextField label="Why ?" variant="outlined" multiline rowsMax={3} />
    </FormControl>
    <Button variant="contained" color="primary">
      Done
    </Button>
    <Button variant="contained" color="secondary">
      Cancel
    </Button>
  </form>
);

export default AddHabit;
