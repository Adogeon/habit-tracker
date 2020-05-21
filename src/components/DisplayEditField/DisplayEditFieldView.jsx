import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const DisplayEditFieldView = ({
  edit,
  value,
  dataKey,
  handleCancelClick,
  handleUpdateChange,
  onDoneClick,
}) => {
  return edit ? (
    <Grid container alignItems="flex-end" direction="row-reverse">
      <Grid item container xs={3} direction="row">
        <IconButton
          onClick={() => {
            onDoneClick();
          }}
        >
          <DoneIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            handleCancelClick();
          }}
        >
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid item xs={9}>
        <TextField
          defaultValue={value}
          name={dataKey}
          onChange={handleUpdateChange}
          fullWidth
        />
      </Grid>
    </Grid>
  ) : (
    <Typography componet="span" variant="body2" color="textPrimary">
      {value}
    </Typography>
  );
};
export default DisplayEditFieldView;
