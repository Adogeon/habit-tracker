import React, { useState, useEffect } from "react";

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

  return (
    <main>
      <Typography variant="h2">Sign Up</Typography>
      <Grid>
        <form>
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

export default SignUp;
