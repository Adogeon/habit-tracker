import React, { useState, useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  const [input, setInput] = useState({});
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

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
    if (password === repassword) setPasswordMatch(true);
    else setPasswordMatch(false);
  }, [password, repassword]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const firebase = useFirebase();

  const createNewUser = (email, password, username) => {
    firebase.createUser({ email, password }, { username, email });
  };

  const history = useHistory();
  const handleButtonClick = (event) => {
    const { name } = event.currentTarget;
    if (name === "complete") {
      createNewUser(input.email, repassword, input.username);
      history.push("/");
    } else if (name === "cancel") {
      history.goBack();
    }
  };

  return (
    <main>
      <Typography variant="h2">Sign Up</Typography>
      <form>
        <Grid container direction="column">
          <TextField label="Username" name="username" onChange={handleChange} />
          <TextField label="Email" name="email" onChange={handleChange} />
          <TextField
            label="Password"
            name="password"
            onChange={handlePassword}
          />
          <TextField
            label="Repeat Password"
            name="check-pass"
            onChange={handlePassword}
            error={passwordMatch}
            helperText={"Password should match"}
          />
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
      </form>
    </main>
  );
};

export default SignUp;
