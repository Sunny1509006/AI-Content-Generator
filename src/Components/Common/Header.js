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
    path: "/about",
    name: "About",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
  {
    path: "/service",
    name: "Service",
  },
  {
    path: "/affiliate",
    name: "Affiliate",
  },
  {
    path: "/signup",
    name: "Register",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/contactus",
    name: "Contact",
  },
  // {
  //   path: "/faqs",
  //   name: "FAQs",
  // },

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
          Trial
        </Button>
      </div>
    </div>
  );
};
