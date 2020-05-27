import React from "react";
import { Link as RouterLink } from "react-router-dom";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import HabitCheckButton from "../HabitCheckButton.jsx";

import useDateArrGen from "../../../hooks/useDateArrGen";

const HabitRowView = ({
  habit,
  id,
  updateHabitDone,
  stateDoneArr,
}) => {
  const dateArr = useDateArrGen();
  const convertedDateArr = dateArr.map((date) => date.format("YYYY-MM-DD"));

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
