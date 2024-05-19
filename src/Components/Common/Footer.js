import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/authHooks";
import { ROUTES } from "../../utils/constants";

export const Footer = () => {
  const { loggedInUser } = useAuth();
  const isLoggedIn = loggedInUser && !!loggedInUser?.id;

  return (
    <div className="footer-main">
      <div className="footer-top">
        <div className="footer-top-div1">
          <img src="/images/faisaliteb-logo.png" />
          <p>faisaliteb.com@gmail.com</p>
          <div className="footer-div1-socialmedia">
            <a
              href=" https://www.facebook.com/faisalitebofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook color="white" size="30px" />
            </a>
            <a
              href="https://twitter.com/faisaliteb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter color="white" size="30px" />
            </a>
            <a
              href="https://www.linkedin.com/company/faisaliteb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin color="white" size="30px" />
            </a>
            <a
              href="https://www.instagram.com/faisaliteb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill color="white" size="30px" />
            </a>
            <a
              href="https://www.youtube.com/@faisaliteb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube color="white" size="30px" />
            </a>
          </div>
        </div>
        {isLoggedIn && (
          <div>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Usefull Links
            </p>
            <div className="footer-list">
              {ROUTES.map((route) => (
                <Link to={route.path} style={{ textDecoration: "none" }}>
                  <p>{route.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            About Faisaliteb.AI
          </p>
          <div className="footer-list">
            <Link to="/refund_policy" style={{ textDecoration: "none" }}>
              <p>Refund Policy</p>
            </Link>
            <Link to="/terms_and_conditions" style={{ textDecoration: "none" }}>
              <p>Terms & Conditions</p>
            </Link>
            <Link to="/faqs" style={{ textDecoration: "none" }}>
              <p>Faqs</p>
            </Link>
          </div>
        </div>
        {/* <div>
        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Community</p> 
        <div className="footer-list">
            <p>Digital Marketing</p>
            <p>Business Ideas</p>
            <p>Website Checkup</p>
            <p>Affiliate Marketing</p>
          </div>
        </div> */}
        <div>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            Subscribe Newsletters
          </p>
          <div className="footer-list">
            <p>Join Our Community</p>;
            <div
              style={{
                marginTop: "-30px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <a
                href="https://www.facebook.com/groups/seowebsitedoctor"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src="/images/facebook_group.png"
                  style={{ height: "30px", width: "30px" }}
                />
                <p className="footer-fb-group">Facebook Group!</p>
              </a>
              <a
                href="https://t.me/faisalitebfamily"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src="/images/digital_marketing.png"
                  style={{ height: "30px", width: "30px" }}
                />
                <p className="footer-fb-group">Digital Marketing!</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <p>Copyright © 2023 Faisaliteb. All Rights Reserved.</p>
      </div>
    </div>
  );
};
