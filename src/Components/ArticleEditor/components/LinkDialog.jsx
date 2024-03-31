import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import AppButton from "../../Common/AppButton";

const LinkDialog = (props) => {
  const { open, onClose, link, onChange, onRemoveLink, onSaveLink } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ ".MuiPaper-root": { width: "50%" } }}
    >
      <DialogTitle>Add Link</DialogTitle>
      <DialogContent
        sx={{
          paddingTop: "8px !important",
        }}
      >
        <TextField
          label="Link"
          autoFocus={true}
          fullWidth={true}
          value={link}
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions sx={{ padding: "0 24px 20px" }}>
        <AppButton onClick={onRemoveLink}>Remove</AppButton>
        <AppButton variant="contained" onClick={onSaveLink}>
          Save
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default LinkDialog;
