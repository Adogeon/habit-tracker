import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = ({ createNewUser, goBack, data, handleChange }) => {
  const handleButtonClick = () => {
    const { username, email, password, repassword } = data;
    if (password === repassword) {
      createNewUser(username, email, password);
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
        <Typography variant="h2">Sign Up</Typography>
        <Grid item xs={12}>
          <TextField
            label="Username"
            name="username"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Repeat Password"
            name="check-pass"
            onChange={handleChange}
            helperText={"Password should match"}
            fullWidth
          />
        </Grid>

        <Grid item container justify="center">
          <Typography>
            Already have an account ? <Link to="/signin">Sign in here</Link>
          </Typography>
        </Grid>
        <Grid item container direction="row" justify="space-around">
          <Button
            variant="contained"
            color="primary"
            name="complete"
            onClick={handleButtonClick}
          >
            Done
          </Button>
          <Button
            variant="contained"
            color="secondary"
            name="secondary"
            onClick={() => goBack()}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default SignUp;
