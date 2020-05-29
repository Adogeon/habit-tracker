import React, { useEffect } from "React";

import TextField from "@material-ui/core";

const RequiredTextFieldView = ({ isEmpty, name, addToRequired, ...props }) => {
  useEffect(() => {
    addToRequired(name);
  }, []);

  return isEmpty ? (
    <TextField
      required
      error={true}
      helperText={"Please enter a value"}
      {...props}
    />
  ) : (
    <TextField required {...props} />
  );
};

export default RequiredTextFieldView;
