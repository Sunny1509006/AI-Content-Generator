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
import {
  BLOG_CATEGORIES,
  DEFAULT_PARENT_CATEGORY,
  PARENT_BLOG_CATEGORIES,
} from "../../utils/constants";
import PrivatePageLayout from "../layouts/PrivatePageLayout";

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

  const getBgColorForCategoryCard = (parentCategory) => {
    const defaultColors = {
      backgroundColor: "rgba(255, 74, 23, 0.02)",
      borderColor: "rgba(255, 74, 23, 0.4)",
      ":hover": {
        boxShadow: `0 0 0 2px ${muiTheme.palette.primary.main}`,
      },
    };

    const colors = {
      [PARENT_BLOG_CATEGORIES.INFO_BLOG_CONTENT]: defaultColors,
      [PARENT_BLOG_CATEGORIES.AFFILIATE_REVIEW_CONTENT]: {
        backgroundColor: "rgba(255, 152, 0, 0.08)",
        borderColor: "rgba(255, 152, 0, 0.4)",
        ":hover": {
          boxShadow: `0 0 0 2px ${muiTheme.palette.warning.main}`,
        },
      },
      [PARENT_BLOG_CATEGORIES.MORE_AI_TOOLS]: {
        backgroundColor: "rgba(3, 169, 244, 0.08)",
        borderColor: "rgba(3, 169, 244, 0.4)",
        ":hover": {
          boxShadow: `0 0 0 2px ${muiTheme.palette.info.main}`,
        },
      },
    };

    return colors[parentCategory] || defaultColors;
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
            sx={{
              marginBottom: "16px",
            }}
          >
            {Object.keys(PARENT_BLOG_CATEGORIES).map((parentCategory) => (
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
                {PARENT_BLOG_CATEGORIES[parentCategory]}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
        {BLOG_CATEGORIES.filter(
          (category) =>
            selectedParentCategory === DEFAULT_PARENT_CATEGORY ||
            category.parentCategory ===
              PARENT_BLOG_CATEGORIES[selectedParentCategory]
        ).map((category, index) => (
          <Grid item={true} md={12} lg={4}>
            <Link
              key={index}
              to={category.link}
              style={{
                textDecoration: "none",
                color: "black",
                display: "inline-block",
                width: "100%",
                height: "100%",
              }}
            >
              <Paper
                sx={{
                  padding: "20px",
                  minHeight: "150px",
                  height: "100%",
                  lineHeight: 1.5,
                  border: "1px solid rgba(255, 74, 23, 0.4)",
                  ...getBgColorForCategoryCard(category.parentCategory),
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
