import {
  Dialog,
  DialogActions,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AppButton from "../Common/AppButton";
import { TbShieldCheck } from "react-icons/tb";

const SignUpConfirmationDialog = (props) => {
  const { open, onClose } = props;
  const appTheme = useTheme();

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack sx={{ alignItems: "center", padding: "32px" }}>
        <TbShieldCheck
          style={{ color: appTheme.palette.success.main, fontSize: "80px" }}
        />
        <Typography sx={{ marginTop: "30px", textAlign: "center" }}>
          A verification mail has been sent to your email address. Once you will
          verify your email address, you can login to our system. <br />
          <br />
          Thank you for joining us!
        </Typography>
      </Stack>
      <DialogActions>
        <AppButton onClick={onClose}>Cancel</AppButton>
        <AppButton variant="contained" href="/login">
          Go to Login
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpConfirmationDialog;
