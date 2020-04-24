import React, { useEffect, useState } from "react";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

import HabitCheckButton from "./HabitCheckButton";

import useDateArrGen from "../../hooks/useDateArrGen";

const HabitRow = ({ data: { id } }) => {
  const dateArr = useDateArrGen();
  const convertedDateArr = dateArr.map((date) => date.format("YYYYDDDD"));
  const [doneArr, setDoneArr] = useState([]);

  useFirestoreConnect([
    {
      collection: "habits",
      doc: id,
    },
  ]);
  const habit = useSelector(
    ({ firestore: { data } }) => data.habits && data.habits[id]
  );

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
      <TableCell colSpan={5}>
        <Typography variant={"h4"}>{habit.name}</Typography>
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
