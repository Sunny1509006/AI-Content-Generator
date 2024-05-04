import React, { useEffect, useState } from "react";
import PrivatePageLayout from "../layouts/PrivatePageLayout";
import PublisherSiteList from "../PublisherSites/PublisherSiteList";
import { Stack, Typography } from "@mui/material";
import AppButton from "../Common/AppButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import useFetchPublisherSites from "../../hooks/useFetchPublisherSites";
import PublisherAddModal from "../PublisherSites/PublisherAddModal";
import { Helmet } from "react-helmet";

const PublisherSites = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const { fetchSites, sites, isFetching } = useFetchPublisherSites();

  useEffect(() => {
    fetchSites();
  }, []);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Publisher Sites</title>
      </Helmet>
      <Stack
        component="form"
        sx={{
          padding: "0 32px 60px",
          maxWidth: "1240px",
          margin: "auto !important",
        }}
        spacing={2}
      >
        <Stack direction="row">
          <Typography
            component="h1"
            sx={{ fontSize: "24px", fontWeight: "600" }}
          >
            Publisher Sites
          </Typography>
          <AppButton
            variant="contained"
            startIcon={<AddRoundedIcon />}
            sx={{ marginLeft: "auto" }}
            onClick={() => setOpenAddModal(true)}
          >
            Add Site
          </AppButton>
        </Stack>
        <PublisherSiteList
          rows={sites.map((site) => ({
            site: site.site,
            id: site.id,
            type: site.type,
            username: site.username,
          }))}
          loading={isFetching}
          fetchSites={fetchSites}
        />
        <PublisherAddModal
          open={openAddModal}
          onClose={() => setOpenAddModal(false)}
          onSuccess={fetchSites}
        />
      </Stack>
    </PrivatePageLayout>
  );
};

export default PublisherSites;
