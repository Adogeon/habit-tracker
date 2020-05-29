import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import RequiredTextField from "../../components/RequiredTextField";
import ErrorModal from "../../components/ErrorModal";

const SignIn = ({ logIn, goBack, handleOnChange, data }) => {
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
          <RequiredTextField
            label="Email"
            name="email"
            onChange={handleOnChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <RequiredTextField
            label="Password"
            name="password"
            type="password"
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
            onClick={() => logIn(data["email"], data["password"])}
            name="complete"
          >
            Done
          </Button>
          <Button
            variant="contained"
            color="secondary"
            name="cancel"
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

export default SignIn;
