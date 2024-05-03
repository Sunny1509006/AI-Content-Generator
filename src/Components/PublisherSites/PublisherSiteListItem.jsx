import React, { useState } from "react";
import {
  CircularProgress,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import useDeleteSite from "../../hooks/useDeleteSite";
import PublisherEditModal from "./PublisherEditModal";

const PublisherSiteListItem = (props) => {
  const { item, fetchSites } = props;
  const [openEditModal, setOpenEditModal] = useState(false);
  const { deleteSite, isDeleting } = useDeleteSite({
    siteId: item.id,
    onSuccessfullDeletion: fetchSites,
  });

  return (
    <>
      <TableRow
        key={item.site}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {item.site}
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          {item.type}
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          {item.username}
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "flex-end" }}
          >
            {!!item?.id && (
              <IconButton
                onClick={() => {
                  setOpenEditModal(true);
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            )}
            {!!item?.id && (
              <IconButton
                color="error"
                onClick={deleteSite}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <CircularProgress size={20} />
                ) : (
                  <DeleteRoundedIcon />
                )}
              </IconButton>
            )}
          </Stack>
        </TableCell>
      </TableRow>
      <PublisherEditModal
        site={item}
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSuccess={fetchSites}
      />
    </>
  );
};

export default PublisherSiteListItem;
