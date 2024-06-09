import React, { useContext } from "react";
import { Chip } from "@mui/material";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import { AuthContext } from "../../AuthProvider";

const ActivePackageChip = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <Chip
      color="primary"
      label={loggedInUser?.package || "Free"}
      icon={<LoyaltyRoundedIcon />}
      variant="outlined"
      sx={{
        borderRadius: "4px",
        padding: "8px",
        fontWeight: 600,
        fontSize: "16px",
        textTransform: "capitalize",
        svg: {
          fontSize: "20px",
        },
      }}
    />
  );
};

export default ActivePackageChip;
