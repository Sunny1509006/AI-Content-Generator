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
import useEditSite from "../../hooks/useEditSite";
import { PUBLISHER_SITES } from "../../utils/constants";

const PublisherEditModal = (props) => {
  const { site, open, onClose, onSuccess } = props;
  const { editPublisherSite, isUpdatingSite } = useEditSite({
    siteId: site.id,
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

          editPublisherSite({ site, type, username: siteUsername });
        },
      }}
    >
      <DialogTitle>Edit Site</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To edit this website, please modify your desired fields.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="normal"
          name="site"
          label="Site"
          type="site"
          fullWidth
          defaultValue={site.site}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="publisher-sites-type-select-box-label">
            Type
          </InputLabel>
          <Select
            labelId="publisher-sites-type-select-box-label"
            id="publisher-sites-type-select-box"
            name="type"
            label="Type"
            defaultValue={site.type}
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
          defaultValue={site.username}
        />
      </DialogContent>
      <DialogActions>
        <AppButton onClick={onClose}>Cancel</AppButton>
        <AppButton type="submit" variant="contained" loading={isUpdatingSite}>
          Update
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default PublisherEditModal;
