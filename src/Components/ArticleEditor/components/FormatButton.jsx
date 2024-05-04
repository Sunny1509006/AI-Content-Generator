import React from "react";
import AppButton from "../../Common/AppButton";

const FormatButton = (props) => {
  const { isActive, sx, ...otherProps } = props;

  return (
    <AppButton
      {...otherProps}
      variant={isActive ? "contained" : "text"}
      sx={{
        width: "36px",
        height: "36px",
        minWidth: 0,
        svg: { fontSize: "22px" },
        ...sx,
      }}
    />
  );
};

export default FormatButton;
