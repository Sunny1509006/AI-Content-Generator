import React from "react";
import { Helmet } from "react-helmet";
import ArticleGeneratorForm from "../ArticleGeneratorForm/ArticleGeneratorForm";
import { Grid, Typography } from "@mui/material";
import TextareaBlock from "../ArticleGeneratorForm/components/TextareaBlock";
import SelectBlock from "../ArticleGeneratorForm/components/SelectBlock";
import {
  ARTICLE_TYPES,
  BLOG_GENERATION_IMAGE_COUNT_OPTIONS,
} from "../../utils/constants";
import TextInputBlock from "../ArticleGeneratorForm/components/TextInputBlock";
import AppButton from "../Common/AppButton";
import useGenerateArticle from "../../hooks/useGenerateArticle";
import SuggestionBlock from "../ArticleGeneratorForm/components/SuggestionBlock";

const AIMenualSubheading = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>AI info Manual Sub Heading</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                AI info Manual Sub Heading
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                Provide your own subheadings to make 100% unique article.
              </Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <TextInputBlock
                name="keywords"
                label="Main Keyword"
                placeholder="Write your keyword..."
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
              <TextareaBlock
                name="subheadings"
                label="Subheadings"
                placeholder="Write your subheadings..."
                helpText="You can write multiple subheading using comma(,)."
              />
            </Grid>
            <Grid container={true} item={true} xs={12} spacing={4}>
              <Grid item={true} xs={12} sm={6}>
                <TextInputBlock
                  name="faq_count"
                  label="Faq Count"
                  placeholder="Number of faqs you like to have..."
                  type="number"
                />
              </Grid>
              <Grid item={true} xs={12} sm={6}>
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
                      type: ARTICLE_TYPES.manual_sub_heading_artilce,
                      subHeadings: values?.subheadings || "",
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

export default AIMenualSubheading;
