import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { green } from "@material-ui/core/colors";

const HabitTable = ({ dataDate, done, handleOnClick }) => {
  return (
    <IconButton name={dataDate} onClick={handleOnClick}>
      {done ? (
        <DoneIcon style={{ color: green[500] }} />
      ) : (
        <ClearIcon color="secondary" />
      )}
    </IconButton>
  );
};

export default HabitTable;
