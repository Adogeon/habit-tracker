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

const HabitPage = () => (
  <Grid container direction="column" spacing={12}>
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Description"
          secondary={
            <>
              <Typography componet="span" variant="body1" color="textPrimary">
                Habit description
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Reason"
          secondary={
            <>
              <Typography componet="span" variant="body1" color="textPrimary">
                Why ? Oh why ?
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Data"
          secondary={
            <>
              <Typography componet="span" variant="body1" color="textPrimary">
                Chart Area
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Detail"
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
    </List>
  </Grid>
);

export default HabitPage;
