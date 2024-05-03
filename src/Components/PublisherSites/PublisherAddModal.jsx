import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AppButton from "../Common/AppButton";
import useAddSite from "../../hooks/useAddSite";
import { PUBLISHER_SITES } from "../../utils/constants";

const PublisherAddModal = (props) => {
  const { open, onClose, onSuccess } = props;
  const { addPublisherSite, isAddingSite } = useAddSite({
    onSuccess,
    onEnd: onClose,
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const site = formJson.site;
          const type = formJson.type;
          const siteUsername = formJson.siteUsername;

          addPublisherSite({ site, type, siteUsername });
        },
      }}
    >
      <DialogTitle>Add Site</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a site, please provide the following information here.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="normal"
          name="site"
          label="Site"
          type="site"
          fullWidth
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="publisher-sites-type-select-box-label">
            Type
          </InputLabel>
          <Select
            labelId="publisher-sites-type-select-box-label"
            id="publisher-sites-type-select-box"
            name="type"
            label="Type"
          >
            {PUBLISHER_SITES.map((site) => (
              <MenuItem value={site.value}>{site.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          margin="normal"
          name="siteUsername"
          label="Site Username"
          type="siteUsername"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <AppButton onClick={onClose}>Cancel</AppButton>
        <AppButton type="submit" variant="contained" loading={isAddingSite}>
          Add
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default PublisherAddModal;
