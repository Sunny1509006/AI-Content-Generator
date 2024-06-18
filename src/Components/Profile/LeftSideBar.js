import React from "react";
import { MdDashboard, MdHistory } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import {
  BLOG_CATEGORIES,
  DEFAULT_PARENT_CATEGORY,
  PARENT_BLOG_CATEGORIES,
} from "../../utils/constants";

const PRIVATE_ROUTES = [
  {
    href: "/dashboard",
    menuIcon: <MdDashboard />,
    title: "DashBoard",
  },
  {
    href: "/post-history",
    menuIcon: <MdHistory />,
    title: "Post History",
  },
  // {
  //   href: "/keyword-generator",
  //   menuIcon: <VscSymbolKeyword />,
  //   title: "Keywords Generate (Free)",
  // },
  {
    href: "/publisher-sites",
    menuIcon: <LanguageRoundedIcon />,
    title: "Publisher Sites",
  },
  {
    href: "/chatgpt",
    menuIcon: <QuestionAnswerRoundedIcon />,
    title: "ChatGPT",
  },
];

export const LeftSideBar = () => {
  const location = useLocation();
  const { pathname, search } = location;

  return (
    <Stack
      sx={{
        width: "300px",
        borderRight: "1px solid #FF4A17",
        padding: "8px 20px 8px 0",
        fontSize: "16px",
        fontWeight: "500",
        a: {
          color: "black",
          transition: "color 0.2s ease",
          ":hover": {
            color: "var(--primary-orange)",
          },
        },
        svg: {
          fontSize: "24px",
        },
      }}
      spacing={1}
    >
      {PRIVATE_ROUTES.map((route) => (
        <Stack spacing={1}>
          <Link
            to={route.href}
            style={{
              textDecoration: "none",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                backgroundColor:
                  route.href === pathname + search
                    ? "rgba(0, 0, 0, 0.04)"
                    : "transparent",
                color:
                  route.href === pathname + search ? "primary.main" : "inherit",
                padding: "16px 8px",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  color: "primary.main",
                },
              }}
            >
              {route.menuIcon}
              <Typography>{route.title}</Typography>
            </Stack>
          </Link>
          {route.href === "/dashboard" && (
            <Box sx={{ marginLeft: "16px !important" }}>
              {Object.entries(PARENT_BLOG_CATEGORIES).map(
                ([parentCategoryKey, parentCategoryName]) => {
                  return parentCategoryKey !== DEFAULT_PARENT_CATEGORY ? (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                          ".MuiAccordionSummary-content": {
                            margin: "16px 0",
                          },
                        }}
                      >
                        {parentCategoryName}
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: "0 8px" }}>
                        <List>
                          {BLOG_CATEGORIES.filter(
                            (category) =>
                              category.parentCategory === parentCategoryName
                          ).map((category) => (
                            <ListItem key={category?.title} disablePadding>
                              <Link
                                key={category.title}
                                to={category.link}
                                style={{
                                  textDecoration: "none",
                                  display: "flex",
                                  fontWeight: 400,
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <ListItemButton
                                  sx={{
                                    backgroundColor:
                                      category.link === pathname + search
                                        ? "rgba(0, 0, 0, 0.04)"
                                        : "transparent",
                                    color:
                                      category.link === pathname + search
                                        ? "primary.main"
                                        : "inherit",
                                  }}
                                >
                                  {category.menuIcon}
                                  {category.title}
                                </ListItemButton>
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ) : null;
                }
              )}
            </Box>
          )}
        </Stack>
      ))}
    </Stack>
  );
};
