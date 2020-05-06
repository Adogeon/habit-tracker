import React from "react";

import HabitPage from "../page/HabitPage/devIndex.js";

/*This page will alow user to view all of the habit they have enter
 * User can make entry for today the habit they have done
 * TODO: --DONE moving the grid down from AppBar
 * TODO: --DONE research why break point doesn't change for grid and PaperMain, adding fixed width as potential option
 * TODO: --DONE refractor the habit grid
 * TODO: --DONE connecting the app with firestore via react-redux-firebase
 * TODO: Re-thinking database and draft reducers
 *             - Make it so the record of date done is easy to pull
 *             - Or figure out how to pull it into state
 * TODO: write actionCreator and dispatch to interact with the database:
 *             - Create habit
 *             - Mark habit done, skipped, or fail
 * TODO: make the date automatically update entry every day
 * TODO: adding database interaction, probably firestore
 * TODO: adding function to pull from the database to feed the table
 * TODO: adding function to push checkbox to the database
 *
 *
 */

const DevPage = () => {
  return (
    <>
      <HabitPage />
    </>
  );
};

export default DevPage;
