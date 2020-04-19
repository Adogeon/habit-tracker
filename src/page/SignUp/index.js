import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => (
  <main>
    <Typography variant="h2">Sign Up</Typography>
    <Grid>
      <form>
        <TextField variant="outlined" label="Username"></TextField>
        <TextField variant="outline" label="Password"></TextField>
        <Button variant="contained" color="primary">
          Done
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </form>
    </Grid>
  </main>
);

export default SignUp;
