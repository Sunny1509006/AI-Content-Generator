import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const ArticleList = (props) => {
  const { articles } = props;
  const appTheme = useTheme();

  return (
    <Grid container item spacing={4}>
      <Grid item={true} xs={12}>
        <Typography component="h2" sx={{ fontSize: "20px", fontWeight: "600" }}>
          Generated Articles
        </Typography>
      </Grid>
      {articles.map((article) => (
        <Grid item={true} xs={12}>
          <Paper
            component={Stack}
            sx={{
              padding: "16px",
              alignItems: "flex-start",
            }}
            spacing={2}
          >
            <Box>{article.title}</Box>
            <Link
              to={`/articles/${article?.article_id}`}
              target="_blank"
              style={{
                color: appTheme.palette.primary.main,
                display: "flex",
                alignItems: "center",
              }}
            >
              <OpenInNewRoundedIcon
                sx={{
                  fontSize: "14px",
                  marginRight: "4px",
                  marginTop: "2px",
                }}
              />{" "}
              Open Article
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList;
