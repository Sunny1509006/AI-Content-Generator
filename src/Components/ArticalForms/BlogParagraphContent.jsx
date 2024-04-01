import React from "react";
import ArticleGeneratorForm from "../ArticleGeneratorForm/ArticleGeneratorForm";
import TextareaBlock from "../ArticleGeneratorForm/components/TextareaBlock";
import { Grid, Typography } from "@mui/material";
import AppButton from "../Common/AppButton";
import useGenerateArticle from "../../hooks/useGenerateArticle";
import { ARTICLE_TYPES } from "../../utils/constants";
import { Helmet } from "react-helmet";
import TextInputBlock from "../ArticleGeneratorForm/components/TextInputBlock";

const BlogParagraphContent = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>Blog Paragraph</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Blog Paragraph
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                Write a portion of your blog's paragraph in seconds. Just add
                your topic and get the paragraph.
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
                      tone: values?.tone || "",
                      type: ARTICLE_TYPES.blog_single_paragraph,
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

export default BlogParagraphContent;
