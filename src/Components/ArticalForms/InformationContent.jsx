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

const InformationContent = () => {
  const { isGenerating, generateArticle } = useGenerateArticle();

  return (
    <>
      <Helmet>
        <title>Information Content Single / Bulk</title>
      </Helmet>
      <ArticleGeneratorForm
        renderChildren={({ values }) => (
          <Grid container spacing={4}>
            <Grid item={true} xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                Information Content Single / Bulk
              </Typography>
              <Typography
                component="h2"
                sx={{ color: "var(--primary-grey)", marginTop: "4px" }}
              >
                Our AI will help you write 100% unique seo friendly Information
                article in one click.
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
            <Grid container={true} item={true} xs={12} spacing={4}>
              <Grid item={true} xs={12} sm={6} md={4}>
                <SelectBlock
                  name="sub_heading_count"
                  label="Sub-heading Count"
                  placeholder="Provide how many sub-headings you like to have..."
                  options={SUB_HEADING_COUNT}
                />
              </Grid>
              <Grid item={true} xs={12} md={4}>
                <SelectBlock
                  name="faq_count"
                  label="Faq Count"
                  placeholder="Provide how many faqs you like to have..."
                  options={FAQ_COUNT}
                />
              </Grid>
              <Grid item={true} xs={12} sm={6} md={4}>
                <TextInputBlock
                  name="image_count"
                  label="Image Count"
                  placeholder="Provide how many images you like to have..."
                  type="number"
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
                      type: ARTICLE_TYPES.info_article,
                      subHeading: values?.sub_heading_count || "",
                      faq: values?.faq_count || "",
                      imageCount: values?.image_count || "",
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

export default InformationContent;
