import React from "react";
import ArticleGeneratorForm from "../ArticleGeneratorForm/ArticleGeneratorForm";
import TextInputBlock from "../ArticleGeneratorForm/components/TextInputBlock";
import { Grid, Typography } from "@mui/material";
import AppButton from "../Common/AppButton";
import useGenerateArticle from "../../hooks/useGenerateArticle";
import {
  ARTICLE_TYPES,
  BLOG_GENERATION_IMAGE_COUNT_OPTIONS,
} from "../../utils/constants";
import { Helmet } from "react-helmet";
import TextareaBlock from "../ArticleGeneratorForm/components/TextareaBlock";
import SelectBlock from "../ArticleGeneratorForm/components/SelectBlock";

const HumanTouchContent = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>Human Touch Content with AI</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Human Touch Content with AI
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                Submit your keyword and get a unique outline. After that
                generate content with human touch.
              </Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <TextInputBlock
                name="keywords"
                label="Target Keyword"
                placeholder="Write your keyword..."
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextInputBlock
                name="title"
                label="Title"
                placeholder="Write your Title..."
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextareaBlock
                name="subheadings"
                label="Subheadings"
                placeholder="Write your subheadings..."
                helpText="You can write multiple subheading using separate lines."
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextareaBlock
                name="faqs"
                label="FAQs"
                placeholder="Write your faqs..."
                helpText="You can write multiple FAQ using separate lines."
              />
            </Grid>
            <Grid item={true} xs={12}>
              <SelectBlock
                name="image_count"
                label="Image Count"
                placeholder="Number of images you like to have..."
                options={BLOG_GENERATION_IMAGE_COUNT_OPTIONS}
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
                      keywords: values?.keywords || "",
                      title: values?.title?.trim() || "",
                      type: ARTICLE_TYPES.human_touch_content,
                      subHeadings: values?.subheadings || "",
                      faqs: values?.faqs || "",
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

export default HumanTouchContent;
