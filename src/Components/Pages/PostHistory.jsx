import React, { useEffect } from "react";
import PrivatePageLayout from "../layouts/PrivatePageLayout";
import { Helmet } from "react-helmet";
import { Stack, Typography } from "@mui/material";
import PostList from "../PostHistory/PostList";
import useFetchPosts from "../../hooks/useFetchPosts";

export const PostHistory = () => {
  const { fetchPosts, posts, isFetching } = useFetchPosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Post History</title>
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
        <Typography component="h1" sx={{ fontSize: "24px", fontWeight: "600" }}>
          Generated Posts
        </Typography>
        <PostList
          rows={posts.map((post) => ({
            title: post.title,
            id: post.id,
          }))}
          loading={isFetching}
          fetchPosts={fetchPosts}
        />
      </Stack>
    </PrivatePageLayout>
  );
};
