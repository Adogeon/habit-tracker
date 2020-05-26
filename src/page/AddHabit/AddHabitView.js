import React from "react";
import moment from "moment";
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

const AddHabitView = ({
  uid,
  addHabitToFireStore,
  goBack,
  handleChange,
  data,
}) => {
  const classes = useStyles();

  const handleDoneClick = () => {
    const newHabit = {
      ...data,
      doneDateArr: [],
      uid: uid,
      dateAdded: moment().format("YYYY-MM-DD"),
    };
    addHabitToFireStore(newHabit);
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
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item container justify="center">
            <FormControl fullWidth>
              <TextField
                label="Description"
                name="desc"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid container item justify="space-around">
            <Button
              variant="contained"
              color="primary"
              name="complete"
              onClick={handleDoneClick}
            >
              Done
            </Button>
            <Button
              variant="contained"
              color="secondary"
              name="cancel"
              onClick={() => {
                goBack();
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddHabitView;
