import React from "react";
import {
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PublisherSiteListItem from "./PublisherSiteListItem";

const PublisherSiteList = (props) => {
  const { rows, loading, fetchSites } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "50%" }}>Site</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: "relative", height: "200px" }}>
          {rows.map((row) => (
            <PublisherSiteListItem item={row} fetchSites={fetchSites} />
          ))}
          {(loading || rows.length <= 0) && (
            <Stack
              sx={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {loading && <CircularProgress />}
              {rows.length <= 0 && (
                <Typography>No sites in the list.</Typography>
              )}
            </Stack>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PublisherSiteList.defaultProps = {
  rows: [],
};

export default PublisherSiteList;
