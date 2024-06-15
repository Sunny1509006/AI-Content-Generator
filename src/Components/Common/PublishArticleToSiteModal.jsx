import React, { useEffect, useState } from "react";
import {
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import AppButton from "../Common/AppButton";
import useFetchPublisherSites from "../../hooks/useFetchPublisherSites";
import usePublishToSite from "../../hooks/usePublishToSite";
import { PUBLISHER_SITES } from "../../utils/constants";
import useFetchWordpressSiteCategories from "../../hooks/useFetchWordpressSiteCategories";

const PublishArticleToSiteModal = (props) => {
  const { open, onClose, articleID } = props;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSite, setSelectedSite] = useState({});
  const [sitePassword, setSitePassword] = useState(null);
  const [siteType, setSiteType] = useState(null);
  const {
    fetchSites,
    sites,
    isFetching: isFetchingSites,
  } = useFetchPublisherSites();
  const {
    fetchCategories,
    categories,
    isFetching: isFetchingCategories,
    setCategories,
  } = useFetchWordpressSiteCategories();
  const { publisheArticleToSite, isPublishing } = usePublishToSite({
    onEnd: onClose,
  });

  const publishArticle = () => {
    publisheArticleToSite({
      siteID: selectedSite?.id,
      password: sitePassword,
      articleID,
      categoryIDs: selectedCategories.map((category) => category?.id),
    });
  };

  useEffect(() => {
    setSelectedCategories([]);
    setSitePassword("");
    setCategories([]);
  }, [selectedSite?.id, setCategories]);

  useEffect(() => {
    if (sites.length > 0) {
      setSelectedSite(sites[0]);
      setSiteType(sites[0]?.type);
    }
  }, [sites]);

  useEffect(() => {
    fetchSites();
  }, []);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Publish to a Site</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To publish to a site, please provide the following information here.
        </DialogContentText>
        <Grid container spacing={2} sx={{ marginTop: "8px" }}>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel id="publisher-sites-type-select-box-label">
                Type
              </InputLabel>
              <Select
                labelId="publisher-sites-type-select-box-label"
                id="publisher-sites-type-select-box"
                name="type"
                label="Type"
                value={siteType}
              >
                {PUBLISHER_SITES.map((site) => (
                  <MenuItem value={site.value}>{site.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel id="publisher-site-select-box-label">Site</InputLabel>
              <Select
                labelId="publisher-site-select-box-label"
                id="publisher-site-select-box"
                name="site"
                label="Site"
                placeholder="Select a site to publish"
                startAdornment={
                  isFetchingSites ? <CircularProgress size={20} /> : null
                }
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              autoFocus
              name="password"
              label="Site Password"
              fullWidth
              type="password"
              value={sitePassword}
              onChange={(event) => setSitePassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={selectedCategories}
                  onChange={(event) =>
                    setSelectedCategories(event?.target?.value)
                  }
                  input={<OutlinedInput label="Categories" />}
                  renderValue={(selected) =>
                    selected.map((category) => category?.name).join(", ")
                  }
                  placeholder={
                    categories.length > 0
                      ? "Select Categories"
                      : "Please, fetch categories."
                  }
                  disabled={
                    categories.length === 0 ||
                    !sitePassword ||
                    isFetchingCategories
                  }
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 350,
                        width: 250,
                      },
                    },
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category?.id} value={category}>
                      <Checkbox
                        checked={selectedCategories.some(
                          (selectedCategory) =>
                            selectedCategory?.id === category?.id
                        )}
                      />
                      <ListItemText primary={category?.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <AppButton
                variant="outlined"
                disabled={!sitePassword}
                loading={isFetchingCategories}
                onClick={() => {
                  fetchCategories({
                    siteID: selectedSite?.id,
                    password: sitePassword,
                  });
                }}
                sx={{ flexShrink: 0 }}
              >
                Get List
              </AppButton>
            </Stack>
            <FormHelperText>
              {!sitePassword &&
                "Please, provide the site password to fetch categories."}
              {sitePassword &&
                categories.length === 0 &&
                "Please, fetch categories first."}
              {categories.length > 0 &&
                selectedCategories.length === 0 &&
                "You can select categories"}
            </FormHelperText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <AppButton onClick={onClose}>Cancel</AppButton>
        <AppButton
          type="submit"
          variant="contained"
          disabled={!sitePassword}
          loading={isPublishing}
          onClick={publishArticle}
        >
          Publish
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default PublishArticleToSiteModal;
