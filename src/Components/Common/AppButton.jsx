import React from "react";
import { Button, CircularProgress } from "@mui/material";

const AppButton = (props) => {
  const { loading, endIcon, sx, disabled, ...otherProps } = props;

  return (
    <Button
      {...otherProps}
      sx={{
        textTransform: "capitalize",
        ...sx,
      }}
      endIcon={loading ? <CircularProgress size={16} /> : endIcon}
      disabled={disabled || loading}
    />
  );
};

export default AppButton;
