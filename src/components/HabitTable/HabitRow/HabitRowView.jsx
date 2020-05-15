import React, { useEffect, useState } from "react";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import HabitCheckButton from "../HabitCheckButton";

import useDateArrGen from "../../../hooks/useDateArrGen";
import { updateHabitDoneRecord } from "../../../redux/action/habits";

const HabitRowView = ({
  habit,
  id,
  updateHabitDone,
  setHabitDone,
  stateDoneArr,
}) => {
  const dateArr = useDateArrGen();
  const convertedDateArr = dateArr.map((date) => date.format("YYYY-MM-DD"));

  setHabitDone(id, habit.doneDateArr);

  useEffect(() => {
    setHabitDone(id, habit.doneDateArr);
    console.log("stateDoneArr", stateDoneArr);
  }, []);

  const handleDoneOnClick = (event) => {
    const selectDate = event.currentTarget.name;
    updateHabitDone(id, selectDate);
  };

  return (
    <TableRow>
      <TableCell colSpan={2}>
        <Link component={RouterLink} variant="button" to={`/habit/${id}`}>
          <Typography variant={"h5"}>{habit.name}</Typography>
        </Link>
      </TableCell>
      {convertedDateArr.map((date) => (
        <TableCell align="center" key={date}>
          {stateDoneArr.includes(date) ? (
            <HabitCheckButton
              dataDate={date}
              done={true}
              handleOnClick={handleDoneOnClick}
            />
          ) : (
            <HabitCheckButton
              dataDate={date}
              done={false}
              handleOnClick={handleDoneOnClick}
            />
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default HabitRowView;
