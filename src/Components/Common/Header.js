import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../../hooks/authHooks";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom';

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
  // {
  //   path: "/affiliate",
  //   name: "Affiliate",
  // },
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
  const { loginData } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  localStorage.setItem("isOpen", isOpen);
  const toggle = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("isOpen", !isOpen);
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleApi = () => {
    // axios.post("/api/logout/", {jwt: token})
    setShowMenu(!showMenu);
    // removeToken();
    
  }

  return (
    <div className="header-main">
      <img src="/images/faisaliteb-logo.png" className="header_logo" />
      <div className="header-link">
        {routes.map((route) =>
          loginData.result === true &&
          (route.name === "Login" || route.name === "Register") ? null : (
            <NavLink
              to={route.path}
              key={route.name}
              className="link-decoration"
            >
              <div className="link-style">{route.name}</div>
            </NavLink>
          )
        )}
      </div>
      {loginData.result === true ? (
      <div style={{ 
        display: 'flex',
        

      }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: '30px',
              gap: '10px'
            }}
            onClick={handleMenuClick}
          >
            <img
              src={"/images/profile.png"}
              style={{
                height: "40px",
                width: "40px",
              }}
            />
            <p
              style={{
                fontSize: "12px",
                margin: "0px 0px 0px",
              }}
            >
              {loginData?.name}
            </p>
          </div>
          <div>
            {/* <Button
              onClick={handleMenuClick}
              style={{
                padding: "0px",
                backgroundColor: "var(--secondary-bg)",
              }}
            >
              <BsThreeDotsVertical fontSize={24} className="dotColor" />
            </Button> */}
            {showMenu && (
              <div
                style={{
                  position: "fixed",
                  right: "1px",
                  marginTop: "100px",
                  background: "white",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "1px 1px 1px 1px black",
                }}
              >
                {/* <button onClick={() => console.log('Go to profile page')}>
            profile
          </button> */}
                <Link
                  to="/profile"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <div>Profile</div>
                </Link>
                <div>
                  <Button
                    variant="outline-info"
                    style={{
                      marginTop: "calc(50% - 25px)",
                      margin: "0px 10px",
                      marginBottom: "5px",
                    }}
                    onClick={handleApi}
                    type="submit"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="button-div">
          <Button variant="contained" className="custom-button">
            Trial
          </Button>
        </div>
      )}
    </div>
  );
};
