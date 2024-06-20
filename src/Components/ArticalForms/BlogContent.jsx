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
import SuggestionBlock from "../ArticleGeneratorForm/components/SuggestionBlock";

const BlogContent = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>Blog content Single</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Blog content Single
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                100% unique One click single blog content at your hand.
              </Typography>
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
                      keywords: values?.keywords || "",
                      title: values?.title?.trim() || "",
                      type: ARTICLE_TYPES.blog_article,
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

export default BlogContent;
