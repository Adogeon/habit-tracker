import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemtext";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";

//TODO: adding button for editing habit detail
//TODO: adding button for delete habit detail
//TODO: adding button for reset habit detail
//TODO: adding chart into chart area

//TODO: Install the nivo package
//TODO: writing function to generate data records
//TODO: --DONE create a mock dataset
//TODO: --DONE adding the chart to see fit

const createDataArr = (dateArr) => {
  return dateArr.map((date) => ({ date: date, count: 1 }));
};

const HabitPage = ({ habit }) => {

  return (
    <Grid container direction="column" xs={12}>
      <Grid container justify="space-between">
        <Typography variant="h4">{habit.name}</Typography>
        <IconButton>
          <EditIcon fontSize="small" />
        </IconButton>
      </Grid>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Grid container justify="space-between">
                <Typography variant="h6">Description</Typography>
                <IconButton>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Grid>
            }
            secondary={
              <>
                <Typography componet="span" variant="body2" color="textPrimary">
                  {habit.desc}
                </Typography>
              </>
            }
          />
        </ListItem>
        <Divider component="li" justify="space-between" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Grid container justify="space-between">
                <Typography variant="h6">Reason</Typography>
                <IconButton>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Grid>
            }
            secondary={
              <>
                <Typography componet="span" variant="body2" color="textPrimary">
                  {habit.reason}
                </Typography>
              </>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary=""
            secondary={
              <Grid>
                <CalendarHeatmap
                  style={{ width: "100%", height: "auto" }}
                  startDate={moment()
                    .subtract("180", "days")
                    .format("YYYY-MM-DD")}
                  endDate={moment().format("YYYY-MM-DD")}
                  values={createDataArr(habit.doneDateArr)}
                  classForValue={(count) => {
                    if (!count) {
                      return "color-empty";
                    }
                    return `color-github-3`;
                  }}
                  showWeekdayLabels={true}
                />
              </Grid>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Grid container justify="start">
                <Typography variant="h6">Detail</Typography>
              </Grid>
            }
            secondary={
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Start Date:
                    </TableCell>
                    <TableCell align="right">Date of starting</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Longest Streak:
                    </TableCell>
                    <TableCell align="right">Longest Streak Number</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Grid container justify="start">
                <Typography variant="h6">Reset</Typography>
              </Grid>
            }
            secondary={
              <Grid container justify="center">
                <Button variant="contained" color="primary">
                  RESET
                </Button>
              </Grid>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Grid container justify="start">
                <Typography variant="h6">Delete</Typography>
              </Grid>
            }
            secondary={
              <Grid container justify="center">
                <Button variant="contained" color="secondary">
                  DELETE
                </Button>
              </Grid>
            }
          />
        </ListItem>
      </List>
    </Grid>
  );
};

export default HabitPage;
