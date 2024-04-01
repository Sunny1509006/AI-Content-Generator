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
  FAQ_COUNT,
  SUB_HEADING_COUNT,
} from "../../utils/constants";
import { Helmet } from "react-helmet";

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
                label="Input Title"
                placeholder="Write your title..."
              />
            </Grid>
            <Grid container={true} item={true} xs={12} spacing={4}>
              <Grid item={true} xs={12} sm={6} md={6}>
                <SelectBlock
                  name="sub_heading_count"
                  label="Sub-heading Count"
                  placeholder="Provide how many sub-headings you like to have..."
                  options={SUB_HEADING_COUNT}
                />
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <SelectBlock
                  name="faq_count"
                  label="Faq Count"
                  placeholder="Provide how many faqs you like to have..."
                  options={FAQ_COUNT}
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
                      title: values?.title || "",
                      type: ARTICLE_TYPES.human_touch_content,
                      numSubheading: values?.sub_heading_count || "",
                      numFaq: values?.faq_count || "",
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
