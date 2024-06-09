import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../../AuthProvider";

const RemainingToken = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <Typography
      sx={{
        color: loggedInUser?.token > 0 ? "success.main" : "error.main",
        marginLeft: "4px",
        fontWeight: 600,
      }}
    >
      {loggedInUser?.token || 0}
    </Typography>
  );
};

export default RemainingToken;
