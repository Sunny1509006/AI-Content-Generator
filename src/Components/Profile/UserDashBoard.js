import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { ARTICLE_GENERATION_TYPES } from "../../utils/constants";
import PrivatePageLayout from "../layouts/PrivatePageLayout";

const DEFAULT_PARENT_CATEGORY = "ALL";

const parentCategories = {
  [DEFAULT_PARENT_CATEGORY]: "All",
  INFO_BLOG_CONTENT: "Information / Blog Content",
  AFFILIATE_REVIEW_CONTENT: "Affiliate (Review) Content",
  MORE_AI_TOOLS: "More AI tools",
};

const categories = [
  {
    title: "Information Content Single / Bulk",
    description:
      "Our AI will help you write 100% unique seo friendly Information article in one click",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.information_content_single_and_bulk}`,
    icon: "",
    parentCategory: parentCategories.INFO_BLOG_CONTENT,
  },
  {
    title: "AI info Manual Sub Heading",
    description: "Provide your own subheadings to make 100% unique article",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.ai_info_manual_sub_heading}`,
    icon: "",
    parentCategory: parentCategories.INFO_BLOG_CONTENT,
  },
  {
    title: "Blog content Single / Bulk",
    description:
      "100% unique One click single or bulk blog content at your hand",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.blog_content_single_and_bulk}`,
    icon: "",
    parentCategory: parentCategories.INFO_BLOG_CONTENT,
  },
  {
    title: "Product Content (600-1000 words)",
    description:
      "Any kind of product content starting from 600 to 1k words in one click (Ecommerce)",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.product_content_600_1000_words}`,
    icon: "",
    parentCategory: parentCategories.INFO_BLOG_CONTENT,
  },
  {
    title: "Amazon Review Content ",
    description:
      "Search, add products manually & write 100% unique Amazon reviews in just a click",
    link: "",
    icon: "",
    parentCategory: parentCategories.AFFILIATE_REVIEW_CONTENT,
  },
  {
    title: "Human Touch Content with AI",
    description:
      "Submit your keyword and get a unique outline. After that generate content with human touch",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.human_touch_content_with_ai}`,
    icon: "",
    parentCategory: parentCategories.INFO_BLOG_CONTENT,
  },
  {
    title: "Guest Post Content",
    description:
      "Our AI will help you write 100% unique seo friendly Guest Post Content in one click",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.guest_post_content}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
  {
    title: "Content Rewrite",
    description: "With our AI you can re-write given content",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.content_rewrite}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
  {
    title: "Generate Backlinks Content",
    description:
      "Input your keyword and generate content for your backlinks easily",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.generate_backlinks_content}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
  {
    title: "Generate Conclusion",
    description:
      "Generate eye catching conclusion with one click with any topic",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.generate_conclusion}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
  {
    title: "Generate Introduction",
    description: "Generate any topic intro to grab your audience attention",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.generate_introduction}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
  {
    title: "Blog Article Outline Generator",
    description:
      "Submit your keyword and with one click you will get a content outline in minutes ",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.blog_article_outline_generator}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
  {
    title: "Blog Paragraph",
    description:
      "Write a portion of your blog's paragraph in seconds. Just add your topic and get the paragraph",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.blog_content_single_and_bulk}`,
    icon: "",
    parentCategory: parentCategories.MORE_AI_TOOLS,
  },
];

export const UserDashBoard = () => {
  const [selectedParentCategory, setSelectedParentCategory] = useState(
    DEFAULT_PARENT_CATEGORY
  );
  const muiTheme = useTheme();

  const handleParentCategory = (event, newParentCategory) => {
    if (!!newParentCategory) {
      setSelectedParentCategory(newParentCategory);
    }
  };

  return (
    <PrivatePageLayout>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Grid
        container={true}
        spacing={3}
        sx={{
          padding: "0 32px 60px",
          maxWidth: "1240px",
          margin: "auto !important",
        }}
      >
        <Grid item={true} xs={12}>
          <ToggleButtonGroup
            value={selectedParentCategory}
            exclusive
            onChange={handleParentCategory}
          >
            {Object.keys(parentCategories).map((parentCategory) => (
              <ToggleButton
                sx={{
                  backgroundColor:
                    parentCategory === selectedParentCategory
                      ? `${muiTheme.palette.primary.main} !important`
                      : "transparent",
                  color:
                    parentCategory === selectedParentCategory
                      ? "white !important"
                      : "rgba(0, 0, 0, 0.54)",
                  padding: "12px 20px",
                  fontWeight: 600,
                }}
                value={parentCategory}
              >
                {parentCategories[parentCategory]}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
        {categories
          .filter(
            (category) =>
              selectedParentCategory === DEFAULT_PARENT_CATEGORY ||
              category.parentCategory ===
                parentCategories[selectedParentCategory]
          )
          .map((category, index) => (
            <Grid item={true} md={12} lg={4}>
              <Link
                key={index}
                to={category.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <Paper
                  sx={{
                    padding: "20px",
                    minHeight: "150px",
                    lineHeight: 1.5,
                    border: "1px solid rgba(255, 74, 23, 0.4)",
                    backgroundColor: "rgba(255, 74, 23, 0.02)",
                    ":hover": {
                      boxShadow: `0 0 0 2px ${muiTheme.palette.primary.main}`,
                    },
                  }}
                >
                  <Box component="h3" sx={{ marginBottom: "8px" }}>
                    {category.title}
                  </Box>
                  {category.description ? (
                    <Box>{category.description}</Box>
                  ) : null}
                </Paper>
              </Link>
            </Grid>
          ))}
      </Grid>
    </PrivatePageLayout>
  );
};
