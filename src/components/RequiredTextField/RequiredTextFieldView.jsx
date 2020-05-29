import React, { useEffect } from "react";

import TextField from "@material-ui/core/TextField";

const RequiredTextFieldView = ({ isEmpty, name, addToRequired, ...props }) => {
  addToRequired(name);

  return isEmpty ? (
    <TextField
      required
      name={name}
      error={true}
      helperText={"Please enter a value"}
      {...props}
    />
  ) : (
    <TextField name={name} required {...props} />
  );
};

export default RequiredTextFieldView;
