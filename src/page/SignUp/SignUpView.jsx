import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = ({ createNewUser, goHome, goBack }) => {
  const [input, setInput] = useState({});
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePassword = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "check-pass":
        setRepassword(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (password !== repassword) setPasswordMatchError(true);
    else setPasswordMatchError(false);
  }, [password, repassword]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleButtonClick = (event) => {
    const { name } = event.currentTarget;
    if (name === "complete") {
      createNewUser(input.email, repassword, input.username, goHome);
    } else if (name === "cancel") {
      goBack();
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
            onChange={handlePassword}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Repeat Password"
            name="check-pass"
            onChange={handlePassword}
            error={passwordMatchError}
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
            onClick={handleButtonClick}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default SignUp;
