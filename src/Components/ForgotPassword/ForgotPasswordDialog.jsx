import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppButton from "../Common/AppButton";
import useForgotPassword from "../../hooks/useForgotPassword";
import { TbShieldCheck } from "react-icons/tb";

const ForgotPasswordDialog = (props) => {
  const { open, onClose } = props;
  const [successfullySentLink, setSuccessfullySentLink] = useState(false);
  const { sendPasswordResetLink, isSendingResetLink } = useForgotPassword();

  const handleClose = () => {
    setSuccessfullySentLink(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;

          sendPasswordResetLink({
            email,
            onSuccess: () => setSuccessfullySentLink(true),
          });
        },
      }}
    >
      {!successfullySentLink ? (
        <>
          <DialogTitle>Forgot Password?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To recover your account, please provide your email. A password
              reset link will be sent to your account.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
        </>
      ) : (
        <Stack sx={{ alignItems: "center", padding: "32px" }}>
          <TbShieldCheck
            style={{ color: "var(--primary-orange)", fontSize: "80px" }}
          />
          <Typography sx={{ marginTop: "30px", textAlign: "center" }}>
            A password reset link has been sent to your mail.
          </Typography>
        </Stack>
      )}
      <DialogActions>
        {!successfullySentLink ? (
          <>
            <AppButton onClick={handleClose}>Cancel</AppButton>
            <AppButton
              variant="contained"
              type="submit"
              loading={isSendingResetLink}
            >
              Send link
            </AppButton>
          </>
        ) : (
          <AppButton variant="contained" onClick={handleClose}>
            Ok
          </AppButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
