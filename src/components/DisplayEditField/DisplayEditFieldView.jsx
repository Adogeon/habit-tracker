import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

const DisplayEditFieldView = ({
  edit,
  value,
  dataKey,
  isPassword,
  typoVariant,
  handleCancelClick,
  handleEditClick,
  handleUpdateChange,
  onDoneClick,
}) => {
  return edit ? (
    <Grid container direction="row-reverse" alignItems="baseline">
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
        {isPassword ? (
          <TextField
            autoFocus={true}
            name={dataKey}
            type="password"
            onChange={handleUpdateChange}
            fullWidth
          />
        ) : (
          <TextField
            autoFocus={true}
            defaultValue={value}
            name={dataKey}
            onChange={handleUpdateChange}
            fullWidth
          />
        )}
      </Grid>
    </Grid>
  ) : (
    <Grid container justify="space-between" alignItems="baseline">
      {isPassword ? (
        <Typography variant={typoVariant} color="textPrimary">
          {value
            .split("")
            .map((char) => {
              return "•";
            })
            .join("")}
        </Typography>
      ) : (
        <Typography variant={typoVariant} color="textPrimary">
          {value}
        </Typography>
      )}
      <IconButton onClick={() => handleEditClick()}>
        <EditIcon fontSize="small" />
      </IconButton>
    </Grid>
  );
};
export default DisplayEditFieldView;
