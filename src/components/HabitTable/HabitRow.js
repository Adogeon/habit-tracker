import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/CheckBox";

/*TODO: adding some height to make the row look more distinctive
  TODO: adding horizontal divider 
  TODO: adding padding to the front of the habit

*/

const HabitRow = (props) => {
  return (
    <Grid item xs={12} container direction="column">
      <Grid item container xs={12} direction="row" justify={"space-between"}>
        <Grid item xs justify={"flex-start"} alignItems={"center"}>
          <Typography variant="h5">{props.habitName}</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs={6}
          alignItems={"center"}
          justify={"space-between"}
        >
          <Grid item xs={2} justify={"center"}>
            <Checkbox />
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Checkbox />
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Checkbox />
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Checkbox />
          </Grid>
          <Grid item xs={2} justify={"center"}>
            <Checkbox />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HabitRow;
