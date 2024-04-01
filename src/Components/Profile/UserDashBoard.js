import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LeftSideBar } from "./LeftSideBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { InfoArticle } from "../ContentGenerator/InfoArticle";
import { Avatar, Button, Grid, Paper } from "@mui/material";
import { Helmet } from "react-helmet";
import axios from "../Axios";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { MdArticle } from "react-icons/md";
import { VscSymbolKeyword } from "react-icons/vsc";
import useAuth from "../../hooks/authHooks";
import { ARTICLE_GENERATION_TYPES } from "../../utils/constants";
import PrivatePageLayout from "../layouts/PrivatePageLayout";

const category = [
  {
    title: "Information Content Single / Bulk",
    description:
      "Our AI will help you write 100% unique seo friendly Information article in one click",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.information_content_single_and_bulk}`,
    icon: "",
  },
  {
    title: "AI info Manual Sub Heading",
    description: "Provide your own subheadings to make 100% unique article",
    link: `/articles/generate?generation_type=${ARTICLE_GENERATION_TYPES.ai_info_manual_sub_heading}`,
    icon: "",
  },
  {
    title: "Blog content Single / Bulk",
    description:
      "100% unique One click single or bulk blog content at your hand",
    link: "",
    icon: "",
  },
  {
    title: "Product Content (600-1000 words)",
    description:
      "Any kind of product content starting from 600 to 1k words in one click (Ecommerce)",
    link: "",
    icon: "",
  },
  {
    title: "Amazon Review Content ",
    description:
      "Search, add products manually & write 100% unique Amazon reviews in just a click",
    link: "",
    icon: "",
  },
  {
    title: "Human Touch Content with AI",
    description:
      "Submit your keyword and get a unique outline. After that generate content with human touch ",
    link: "",
    icon: "",
  },
  {
    title: "Guest Post Content",
    description:
      "Our AI will help you write 100% unique seo friendly Guest Post Content in one click",
    link: "",
    icon: "",
  },
  {
    title: "Content Rewrite",
    description: "With our AI you can re-write given content",
    link: "",
    icon: "",
  },
  {
    title: "Generate Backlinks Content",
    description:
      "Input your keyword and generate content for your backlinks easily",
    link: "",
    icon: "",
  },
  {
    title: "Generate Conclusion",
    description:
      "Generate eye catching conclusion with one click with any topic",
    link: "",
    icon: "",
  },
  {
    title: "Generate Introduction",
    description: "Generate any topic intro to grab your audience attention",
    link: "",
    icon: "",
  },
  {
    title: "Blog Article Outline Generator",
    description:
      "Submit your keyword and with one click you will get a content outline in minutes ",
    link: "",
    icon: "",
  },
  {
    title: "Blog Paragraph",
    description:
      "Write a portion of your blog's paragraph in seconds. Just add your topic and get the paragraph",
    link: "",
    icon: "",
  },
];

export const UserDashBoard = () => {
  return (
    <PrivatePageLayout>
      <Grid
        className="login_up_dummy_div"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        {category.map((eachCategory, index) => (
          <Paper
            elevation={20}
            key={index}
            style={{
              padding: "30px 20px",
              width: "32%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minWidth: "250px",
              flexWrap: "wrap",
              minHeight: "200px",
            }}
          >
            <Link
              to={eachCategory.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                {eachCategory.icon}
                <Grid
                  align="center"
                  className="login-icon-div"
                  style={{ marginTop: "10px" }}
                >
                  <h3>{eachCategory.title}</h3>
                </Grid>
                <div>
                  {eachCategory.description ? (
                    <div style={{ display: "flex", marginTop: "-8px" }}>
                      <p style={{ fontSize: "15px", color: "#445658" }}>
                        {eachCategory.description}
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Link>
          </Paper>
        ))}
      </Grid>
    </PrivatePageLayout>
  );
};
