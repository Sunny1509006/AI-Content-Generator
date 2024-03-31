import React from "react";
import AppButton from "../../Common/AppButton";

const FormatButton = (props) => {
  const { isActive, ...otherProps } = props;

  return (
    <AppButton
      {...otherProps}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "32px",
        margin: 0,
        padding: "0 4px",
        border: 0,
        borderRadius: "4px",
        background: isActive ? "white" : "transparent",
        color: isActive ? "var(--color-gray-1)" : "white",
        fontSize: "inherit",
        lineHeight: 1,
        fontWeight: "inherit",
        whiteSpace: "nowrap",
        cursor: "pointer",
        minWidth: "auto",
        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 0.4)",
        },
        ":hover": {
          backgroundColor: "white",
          color: "var(--color-gray-1)",
        },
      }}
    />
  );
};

export default FormatButton;
