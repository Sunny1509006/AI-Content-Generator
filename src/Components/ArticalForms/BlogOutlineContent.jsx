import React from "react";
import ArticleGeneratorForm from "../ArticleGeneratorForm/ArticleGeneratorForm";
import TextareaBlock from "../ArticleGeneratorForm/components/TextareaBlock";
import { Grid, Typography } from "@mui/material";
import AppButton from "../Common/AppButton";
import useGenerateArticle from "../../hooks/useGenerateArticle";
import { ARTICLE_TYPES } from "../../utils/constants";
import { Helmet } from "react-helmet";
import TextInputBlock from "../ArticleGeneratorForm/components/TextInputBlock";
import SuggestionBlock from "../ArticleGeneratorForm/components/SuggestionBlock";

const BlogOutlineContent = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>Blog Article Outline Generator</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Blog Article Outline Generator
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                Submit your keyword and with one click you will get a content
                outline in minutes.
              </Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <TextareaBlock
                name="short_description"
                label="Short Description"
                placeholder="Write your description in short..."
                rows={8}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextareaBlock
                name="keywords"
                label="Keywords"
                placeholder="Write your keywords..."
                helpText="You can write multiple keywords using comma(,)."
              />
            </Grid>
            <Grid item={true} xs={12}>
              <SuggestionBlock
                name="title"
                label="Title"
                placeholder="Choose your title or write your own..."
                keywords={values?.keywords}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextInputBlock
                name="tone"
                label="Tone"
                placeholder="Provide the tone you prefer..."
              />
            </Grid>
            <Grid item={true} xs={12}>
              <AppButton
                variant="contained"
                type="submit"
                size="large"
                loading={isGenerating}
                onClick={(event) => {
                  event.preventDefault();

                  generateArticle({
                    payload: {
                      shortDescription: values?.short_description || "",
                      keywords: values?.keywords || "",
                      title: values?.title?.trim() || "",
                      tone: values?.tone || "",
                      type: ARTICLE_TYPES.blog_article_outline,
                    },
                  });
                }}
              >
                Generate
              </AppButton>
            </Grid>
          </Grid>
        )}
      />
    </>
  );
};

export default BlogOutlineContent;
