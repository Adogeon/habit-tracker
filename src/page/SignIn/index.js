import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SignIn = (props) => {
  ///this SignIn component should remember the target value
  ///Only when done is clicked then an action should be dispatch to store and also call return
  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    return setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <main>
      <Typography variant="h2">Sign In</Typography>
      <Grid>
        <form>
          <TextField
            variant="outlined"
            label="Username"
            name="username"
            onChange={handleOnChange}
          />
          <TextField
            variant="outline"
            label="Password"
            name="password"
            onChange={handleOnChange}
          />
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
};

export default SignIn;
