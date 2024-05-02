import React, { useEffect, useState } from "react";
import {
  CircularProgress,
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
import useFetchPublisherSites from "../../hooks/useFetchPublisherSites";
import usePublishToSite from "../../hooks/usePublishToSite";

const PublishArticleToSiteModal = (props) => {
  const { open, onClose, articleTitle, articleContent } = props;
  const [selectedSite, setSelectedSite] = useState({});
  const { fetchSites, sites, isFetching } = useFetchPublisherSites();
  const { publisheArticleToSite, isPublishing } = usePublishToSite();

  useEffect(() => {
    if (sites.length > 0) {
      setSelectedSite(sites[0]);
    }
  }, [sites]);

  useEffect(() => {
    fetchSites();
  }, []);

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
          const siteID = formJson?.site;
          const site = sites.find((site) => site.id === parseInt(siteID))?.site;
          const username = formJson.username;
          const password = formJson.password;
          const title = articleTitle;
          const content = articleContent;

          publisheArticleToSite({ site, username, password, title, content });
        },
      }}
    >
      <DialogTitle>Publish to a Site</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To publish to a site, please provide the following information here.
        </DialogContentText>
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="publisher-site-select-box-label">Site</InputLabel>
          <Select
            labelId="publisher-site-select-box-label"
            id="publisher-site-select-box"
            name="site"
            label="Site"
            placeholder="Select a site to publish"
            startAdornment={isFetching ? <CircularProgress size={20} /> : null}
            value={selectedSite?.id}
            onChange={(event) => {
              const siteID = event?.target?.value;
              const site = sites.find((site) => site.id === siteID);

              if (!!site) {
                setSelectedSite(site);
              }
            }}
          >
            {sites.map((site) => (
              <MenuItem value={site?.id}>{site?.site}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          aria-readonly="true"
          margin="normal"
          name="username"
          label="Username"
          type="text"
          fullWidth
          value={selectedSite?.username}
        />
        <TextField
          required
          autoFocus
          margin="normal"
          name="password"
          label="Password"
          fullWidth
          type="password"
        />
      </DialogContent>
      <DialogActions>
        <AppButton onClick={onClose}>Cancel</AppButton>
        <AppButton type="submit" variant="contained" loading={isPublishing}>
          Publish
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default PublishArticleToSiteModal;
