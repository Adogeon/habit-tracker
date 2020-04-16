//HabitPage action
//
/*
*  Action types
*/ 

export const ADD_HABIT = "ADD_HABIT"
export const SET_HABIT_RECORD = "SET_DONE"
export const FETCH_HABIT_RECORD = "FETCH_HABIT_RECORD"

export const HabitRecords = {
  COMPLETE: "COMPLETE",
  SKIPPED: "SKIPPED",
  FAIL: "FAIL"
}

export function addHabit(text) {
  return {type: ADD_HABIT, text}
}

export function setHabitRecord(record) {
  return {type: SET_HABIT_RECORD, record}
}