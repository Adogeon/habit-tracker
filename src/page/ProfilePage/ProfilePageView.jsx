import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import TrashIcon from "@material-ui/icons/Trash";

const ProfilePageView = (props) => (
  <main>
    <Grid container direction="row">
      <Grid item container justify="center">
        <Grid item direction="column">
          <Avatar />
          <Link>Edit</Link>
        </Grid>
      </Grid>
      <Grid item>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Username" secondary="Place holder" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Email" secondary="Place holder" />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Password"
              secondary="Password Place holder"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <TrashIcon />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </main>
);

export default ProfilePageView;
