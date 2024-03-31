import React from "react";
import { Button, CircularProgress } from "@mui/material";

const AppButton = (props) => {
  const { loading, endIcon, sx, ...otherProps } = props;

  return (
    <Button
      {...otherProps}
      sx={{
        textTransform: "capitalize",
        bgcolor: "var(--primary-orange)",
        ":hover": {
          bgcolor: "var(--primary-orange)",
        },
      }}
      endIcon={
        loading ? (
          <CircularProgress sx={{ color: "white" }} size={16} />
        ) : (
          endIcon
        )
      }
    />
  );
};

export default AppButton;
