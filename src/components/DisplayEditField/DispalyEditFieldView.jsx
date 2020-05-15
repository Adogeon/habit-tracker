import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@matarial-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const DisplayEditFieldView = ({ edit, value, key }) =>
  edit ? (
    <Grid container alignItems="flex-end">
      <Grid item container xs={2}>
        <IconButton>
          <DoneIcon />
        </IconButton>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <TextField defaultValue={value} nampe={key} />
      </Grid>
    </Grid>
  ) : (
    <Typography componet="span" variant="body2" color="textPrimary">
      {value}
    </Typography>
  );

export default DisplayEditFieldView;
