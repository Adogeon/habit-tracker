import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(5),
  },
}));

const AddHabit = () => {
  const classes = useStyles();

  const [habit, setHabit] = useState({});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setHabit({
      ...habit,
      [name]: value,
    });
  };

  const firestore = useFirestore();
  const addHabitToFirestore = () => {
    return firestore.collection("habits").add(habit);
  };

  const history = useHistory();
  const handleButtonClick = (event) => {
    const { name } = event.target;
    if (name === "complete") {
      addHabitToFirestore();
      history.push("/");
    } else if (name === "cancel") {
      history.getBack();
    }
  };

  return (
    <Paper variant="outline" square className={classes.main}>
      <form noValidate autoComplete="off">
        <Grid container direction="column" spacing={3}>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField
                label="Habit Name"
                name="name"
                onChange={handleOnChange}
              />
            </FormControl>
          </Grid>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField
                label="Description"
                name="desc"
                onChange={handleOnChange}
              />
            </FormControl>
          </Grid>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField
                label="Why ?"
                name="reason"
                multiline
                rowsMax={3}
                onChange={handleOnChange}
              />
            </FormControl>
          </Grid>
          <Grid container item justify="space-around">
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
              name="cancel"
              onClick={handleButtonClick}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddHabit;
