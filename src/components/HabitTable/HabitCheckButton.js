import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

const HabitTable = ({dataDate, done, handleOnClick}) => {

  return (
    <IconButton name={dataDate} onClick={handleOnClick}>
      {done ? <DoneIcon /> : <ClearIcon />}
    </IconButton>
  );
};

export default HabitTable;
