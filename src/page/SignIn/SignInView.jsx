import React, { useState } from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SignIn = (props) => {
  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    return setUser({
      ...user,
      [name]: value,
    });
  };

  const handleButtonClick = (event) => {
    const { name } = event.currentTarget;
    if (name === "complete") {
      props.logIn(user.email, user.password);
      props.goHome();
    } else if (name === "cancel") {
      props.goBack();
    }
  };

  return (
    <main>
      <Grid
        container
        direction="column"
        justify="center"
        align="center"
        spacing={2}
      >
        <Typography variant="h2">Sign In</Typography>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            onChange={handleOnChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            onChange={handleOnChange}
            fullWidth
          />
        </Grid>
        <Grid item container justify="center">
          <Typography>
            Don't have an account ? <Link to="/signup">Sign up here</Link>
          </Typography>
        </Grid>
        <Grid item container direction="row" justify="space-around">
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            name="complete"
          >
            Done
          </Button>
          <Button
            variant="contained"
            color="secondary"
            name="cancel"
            onClick={handleButtonClick}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default SignIn;
