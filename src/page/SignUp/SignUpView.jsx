import React from "react";
import { Link } from "react-router-dom";
import ErrorModal from "../../components/ErrorModal";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import RequiredTextField from "../../components/RequiredTextField";

const SignUp = ({ createNewUser, goBack, data, handleChange }) => {
  const handleButtonClick = () => {
    const { username, email, password, repassword } = data;
    createNewUser(username, email, password, repassword);
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
          <RequiredTextField
            label="Username"
            name="username"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <RequiredTextField
            label="Email"
            name="email"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <RequiredTextField
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <RequiredTextField
            label="Password Confirmation"
            name="repassword"
            type="password"
            onChange={handleChange}
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
      <ErrorModal />
    </main>
  );
};

export default SignUp;
