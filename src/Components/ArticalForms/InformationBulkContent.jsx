import React from "react";
import ArticleGeneratorForm from "../ArticleGeneratorForm/ArticleGeneratorForm";
import TextareaBlock from "../ArticleGeneratorForm/components/TextareaBlock";
import TextInputBlock from "../ArticleGeneratorForm/components/TextInputBlock";
import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import SelectBlock from "../ArticleGeneratorForm/components/SelectBlock";
import AppButton from "../Common/AppButton";
import {
  ARTICLE_TYPES,
  BLOG_GENERATION_IMAGE_COUNT_OPTIONS,
} from "../../utils/constants";
import { Helmet } from "react-helmet";
import useGenerateBulkArticle from "../../hooks/useGenerateBulkArticle";
import { Link } from "react-router-dom";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const InformationBulkContent = () => {
  const { isGenerating, generateBulkArticle, articles } =
    useGenerateBulkArticle();
  const appTheme = useTheme();

  return (
    <>
      <Helmet>
        <title>Information Content Bulk</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Information Content Bulk
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                Our AI will help you write 100% unique seo friendly Information
                article in one click.
              </Typography>
            </Grid>
            {articles.length > 0 ? (
              <>
                <Grid item={true} xs={12}>
                  <Typography
                    component="h2"
                    sx={{ fontSize: "20px", fontWeight: "600" }}
                  >
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
                        // border: `1px solid ${appTheme.palette.primary.main}`,
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
                      {/* <AppButton
                        variant="outlined"
                        onClick={() =>
                          navigate(`/articles/${article?.article_id}`)
                        }
                      >
                        Open Article
                      </AppButton> */}
                    </Paper>
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <Grid item={true} xs={12}>
                  <TextareaBlock
                    name="keywords"
                    label="Keywords"
                    placeholder="football, fifa worldcup, ..."
                    helpText="You can write multiple keywords using comma(,)."
                  />
                </Grid>
                <Grid container={true} item={true} xs={12} spacing={4}>
                  <Grid item={true} xs={12} sm={6} md={4}>
                    <TextInputBlock
                      name="sub_heading_count"
                      label="Sub-heading Count"
                      placeholder="Number of sub-headings you like to have..."
                      type="number"
                    />
                  </Grid>
                  <Grid item={true} xs={12} md={4}>
                    <TextInputBlock
                      name="faq_count"
                      label="Faq Count"
                      placeholder="Number of faqs you like to have..."
                      type="number"
                    />
                  </Grid>
                  <Grid item={true} xs={12} sm={6} md={4}>
                    <SelectBlock
                      name="image_count"
                      label="Image Count"
                      placeholder="Number of images you like to have..."
                      options={BLOG_GENERATION_IMAGE_COUNT_OPTIONS}
                    />
                  </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                  <AppButton
                    variant="contained"
                    type="submit"
                    size="large"
                    loading={isGenerating}
                    onClick={(event) => {
                      event.preventDefault();

                      generateBulkArticle({
                        payload: {
                          title: "",
                          keywords: values?.keywords || "",
                          type: ARTICLE_TYPES.bulk_article,
                          numSubheading: values?.sub_heading_count || "",
                          numFaq: values?.faq_count || "",
                          numImage: values?.image_count || "",
                        },
                      });
                    }}
                  >
                    Generate
                  </AppButton>
                </Grid>
              </>
            )}
          </Grid>
        )}
      />
    </>
  );
};

export default InformationBulkContent;
