import React from "react";
import { FormHelperText } from "@mui/material";
import { TbInfoCircle } from "react-icons/tb";

const HelperTextBlock = (props) => {
  const { children } = props;

  return (
    <FormHelperText
      sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}
    >
      <TbInfoCircle
        style={{ fontSize: "18px", marginRight: "4px", display: "block" }}
      />
      {children}
    </FormHelperText>
  );
};

export default HelperTextBlock;
