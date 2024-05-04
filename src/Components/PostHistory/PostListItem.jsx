import React from "react";
import {
  CircularProgress,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import useDeletePost from "../../hooks/useDeletePost";
import { Link } from "react-router-dom";

const PostListItem = (props) => {
  const { item, fetchPosts } = props;
  const { deleteSite, isDeleting } = useDeletePost({
    articleID: item.id,
    onSuccessfullDeletion: fetchPosts,
  });

  return (
    <>
      <TableRow
        key={item.site}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Link to={`/articles/${item.id}`}>{item.title}</Link>
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "flex-end" }}
          >
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
    </>
  );
};

export default PostListItem;
