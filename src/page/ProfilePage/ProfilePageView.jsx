import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import DeleteIcon from "@material-ui/icons/Delete";

import DisplayEditField from "../../components/DisplayEditField";
import UserAvatar from "../../components/UserAvatar";

import listStyles from "../../css/List.module.css";

const ProfilePageView = ({
  user: { username, email },
  handleDoneClick,
  updateValue,
}) => (
  <main>
    <Grid container direction="column" justify="center">
      <Grid item xs={12} container justify="center">
        <Grid item>
          <UserAvatar />
          <Link>Edit</Link>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="center">
        <List className={listStyles.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Username"
              secondary={
                <Grid>
                  <DisplayEditField
                    value={username}
                    dataKey={"username"}
                    typoVariant="body1"
                    onDoneClick={() =>
                      handleDoneClick(
                        "profile",
                        "username",
                        updateValue["username"]
                      )
                    }
                  />
                </Grid>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Email"
              secondary={
                <>
                  <DisplayEditField
                    value={email}
                    dataKey={"email"}
                    typoVariant="body1"
                    onDoneClick={() =>
                      handleDoneClick("email", "email", updateValue["email"])
                    }
                  />
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Password"
              secondary="Password Place holder"
            />
          </ListItem>
          <Divider />
          <ListItem button alignItem="center">
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </main>
);

export default ProfilePageView;
