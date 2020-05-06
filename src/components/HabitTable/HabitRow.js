import React, { useEffect, useState } from "react";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import HabitCheckButton from "./HabitCheckButton";

import useDateArrGen from "../../hooks/useDateArrGen";


const HabitRow = ({ data: { id } }) => {
  const dateArr = useDateArrGen();
  const convertedDateArr = dateArr.map((date) => date.format("YYYY-MM-DD"));
  const [doneArr, setDoneArr] = useState([]);

  const habit = useSelector(({ firestore: { data } }) => {
    console.log(data);
    return data['userHabits'] && data['userHabits'][id];
  });

  useEffect(() => {
    if (typeof habit.doneDateArr !== "undefined") {
      setDoneArr(habit.doneDateArr);
    }
  }, []);

  const firestore = useFirestore();
  useEffect(() => {
    firestore.update(
      { collection: "habits", doc: id },
      { doneDateArr: doneArr }
    );
    console.log(doneArr);
  }, [doneArr]);

  const handleDoneOnClick = (event) => {
    const selectDate = event.currentTarget.name;
    if (doneArr.includes(selectDate)) {
      setDoneArr(doneArr.filter((date) => date !== selectDate));
      console.log(doneArr);
    } else {
      setDoneArr([...doneArr, selectDate]);
    }
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
          {doneArr.includes(date) ? (
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

export default HabitRow;
