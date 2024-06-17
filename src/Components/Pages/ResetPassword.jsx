import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AppButton from "../Common/AppButton";
import { useParams } from "react-router-dom";
import useResetPasssword from "../../hooks/useResetPasssword";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, isSettingPassword } = useResetPasssword();
  const param = useParams();
  const hash = param?.hash;

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Box
        sx={{
          padding: "0 32px 60px",
          maxWidth: "1240px",
          margin: "auto !important",
          minHeight: "calc(100vh - 350px)",
        }}
      >
        <Grid container={true} spacing={3}>
          <Grid xs={12} item={true}>
            <Typography
              component="h1"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Set New Password
            </Typography>
            <Divider sx={{ marginTop: "16px" }} />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              label="New Password"
              value={newPassword}
              onChange={(event) => setNewPassword(event?.target?.value)}
              fullWidth={true}
              type="password"
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event?.target?.value)}
              fullWidth={true}
              type="password"
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Stack direction="row" spacing={2}>
              <AppButton
                variant="contained"
                disabled={
                  !newPassword ||
                  !confirmPassword ||
                  newPassword !== confirmPassword
                }
                loading={isSettingPassword}
                onClick={() => {
                  resetPassword({ hash, newPassword, confirmPassword });
                }}
              >
                Change Password
              </AppButton>
              <AppButton
                variant="outlined"
                onClick={() => {
                  setNewPassword("");
                  setConfirmPassword("");
                }}
              >
                Cancel
              </AppButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ResetPassword;
