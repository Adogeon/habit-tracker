import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemtext";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@material-ui/icons/Delete";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Button from "@material-ui/core/Button";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";

import DisplayEditField from "../../components/DisplayEditField";

const createDataArr = (dateArr) => {
  return dateArr.map((date) => ({ date: date, count: 1 }));
};

const HabitPage = ({
  habit,
  habitId,
  deleteHabitRecord,
  resetHabitRecord,
  goHome,
  handleEditClick,
  handleDoneClick,
}) => {
  return habit ? (
    <Grid container direction="column" xs={12}>
      <Grid container justify="space-between">
        <DisplayEditField
          dataKey="name"
          typoVariant="h3"
          value={habit.name}
          onDoneClick={() => handleDoneClick(habitId, "name")}
        />
      </Grid>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Grid container justify="space-between">
                <Typography variant="h6">Description</Typography>
              </Grid>
            }
            secondary={
              <>
                <DisplayEditField
                  dataKey="desc"
                  typoVariant="body1"
                  value={habit.desc}
                  onDoneClick={() => handleDoneClick(habitId, "desc")}
                />
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
              </Grid>
            }
            secondary={
              <>
                <DisplayEditField
                  dataKey="reason"
                  typoVariant="body1"
                  value={habit.reason}
                  onDoneClick={() => handleDoneClick(habitId, "reason")}
                />
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
                    .subtract("120", "days")
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
        <ListItem
          button
          onClick={() => {
            resetHabitRecord(habitId, habit);
          }}
        >
          <ListItemIcon>
            <RotateLeftIcon />
          </ListItemIcon>
          <ListItemText primary="RESET" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            deleteHabitRecord(habitId);
          }}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="DELETE" />
        </ListItem>
      </List>
    </Grid>
  ) : (
    <div>Loading ... </div>
  );
};

export default HabitPage;
