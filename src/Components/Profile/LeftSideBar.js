import React from "react";
import { MdDashboard, MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscSymbolKeyword } from "react-icons/vsc";
import { Stack } from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

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
  {
    href: "/keyword-generator",
    menuIcon: <VscSymbolKeyword />,
    title: "Keywords Generate (Free)",
  },
  {
    href: "/publisher-sites",
    menuIcon: <LanguageRoundedIcon />,
    title: "Publisher Sites",
  },
];

export const LeftSideBar = () => {
  return (
    <Stack
      sx={{
        minWidth: "250px",
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
      spacing={3}
    >
      {PRIVATE_ROUTES.map((route) => (
        <Link
          to={route.href}
          style={{
            textDecoration: "none",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {route.menuIcon}
          {route.title}
        </Link>
      ))}
    </Stack>
  );
};
