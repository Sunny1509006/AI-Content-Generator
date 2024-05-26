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
import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  const { rows, loading, fetchPosts } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "70%" }}>Title</TableCell>
            {/* <TableCell align="right">Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: "relative", height: "200px" }}>
          {rows.map((row) => (
            <PostListItem item={row} fetchPosts={fetchPosts} />
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
              {!loading && rows.length <= 0 && (
                <Typography>No posts in the list.</Typography>
              )}
            </Stack>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostList;
