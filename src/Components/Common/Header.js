import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/acts",
    name: "Service",
  },
  {
    path: "/acts",
    name: "Pricing",
  },
  {
    path: "/acts",
    name: "Affiliate",
  },
  {
    path: "/acts",
    name: "FAQs",
  },
  {
    path: "/contactus",
    name: "Contact",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/signup",
    name: "Register",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  localStorage.setItem("isOpen", isOpen);
  const toggle = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("isOpen", !isOpen);
  };
  return (
    <div className="header-main">
      <img src="/images/faisaliteb-logo.png" className="header_logo" />
      <div className="header-link">
        {routes.map((route) => (
          <NavLink to={route.path} key={route.name} className="link-decoration">
            <div className="link-style">{route.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="button-div">
        <Button variant="contained" className="custom-button">
          Try Free
        </Button>
      </div>
    </div>
  );
};
