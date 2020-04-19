import React from "react";

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

  return (
    <Paper variant="outline" square className={classes.main}>
      <form noValidate autoComplete="off">
        <Grid container direction="column" spacing={3}>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField label="Habit Name" />
            </FormControl>
          </Grid>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField label="Description"  />
            </FormControl>
          </Grid>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField
                label="Why ?"
                
                multiline
                rowsMax={3}
              />
            </FormControl>
          </Grid>
          <Grid container item justify="space-around">
            <Button variant="contained" color="primary">
              Done
            </Button>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddHabit;
