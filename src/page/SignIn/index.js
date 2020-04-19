import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SignIn = () => (
  <main>
    <Typography variant="h2">Sign In</Typography>
    <Grid>
      <form>
        <TextField variant="outlined" label="Username" />
        <TextField variant="outline" label="Password" />
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

export default SignIn;
