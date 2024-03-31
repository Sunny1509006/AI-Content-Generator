import React, { useEffect } from "react";
import useAuth from "../../hooks/authHooks";
import { useNavigate } from "react-router-dom";
import { LeftSideBar } from "../Profile/LeftSideBar";
import { Stack } from "@mui/material";

const PrivatePageLayout = (props) => {
  const { children } = props;
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser || !loggedInUser?.id) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  return (
    loggedInUser &&
    loggedInUser?.id && (
      <Stack
        direction="row"
        spacing={4}
        sx={{
          margin: "0 -80px",
        }}
      >
        <LeftSideBar />
        <div style={{ width: "80%", marginRight: "-40px" }}>{children}</div>
      </Stack>
    )
  );
};

export default PrivatePageLayout;
