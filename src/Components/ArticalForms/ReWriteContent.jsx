import React from "react";
import ArticleGeneratorForm from "../ArticleGeneratorForm/ArticleGeneratorForm";
import TextareaBlock from "../ArticleGeneratorForm/components/TextareaBlock";
import TextInputBlock from "../ArticleGeneratorForm/components/TextInputBlock";
import { Grid, Typography } from "@mui/material";
import SelectBlock from "../ArticleGeneratorForm/components/SelectBlock";
import AppButton from "../Common/AppButton";
import useGenerateArticle from "../../hooks/useGenerateArticle";
import {
  ARTICLE_TYPES,
  BLOG_GENERATION_IMAGE_COUNT_OPTIONS,
} from "../../utils/constants";
import { Helmet } from "react-helmet";

const ReWriteContent = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>Content Rewrite</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Content Rewrite
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                With our AI you can re-write given content.
              </Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <TextareaBlock
                name="full_content"
                label="Full Content"
                placeholder="Write your content..."
                rows={8}
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

                  generateArticle({
                    payload: {
                      fullContent: values?.full_content || "",
                      type: ARTICLE_TYPES.content_rewrite,
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
          </Grid>
        )}
      />
    </>
  );
};

export default ReWriteContent;
