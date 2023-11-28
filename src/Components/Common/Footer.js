import React from "react";
import "./Footer.css";
import {BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <div className="footer-top-div1">
          <img src="/images/faisaliteb-logo.png" />
          <p>faisaliteb.com@gmail.com</p>
          <div className="footer-div1-socialmedia">
          <a href=" https://www.facebook.com/faisalitebofficial" target="_blank" rel="noopener noreferrer"><BsFacebook color="white" size="30px"/></a>
          <a href="https://twitter.com/faisaliteb" target="_blank" rel="noopener noreferrer"><BsTwitter color="white" size="30px" /></a>
          <a href="https://www.linkedin.com/company/faisaliteb/" target="_blank" rel="noopener noreferrer"><BsLinkedin color="white" size="30px" /></a>
          </div>
          
        </div>
        <div>
          <p style={{fontWeight: 'bold', fontSize: '20px'}}>About Faisaliteb.AI</p> 
          <div className="footer-list">
            <p>Refund Policy</p>
            <p>Terms</p>
            <p>Website Optimization</p>
          </div>
        </div>
        <div>
        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Community</p> 
        <div className="footer-list">
            <p>Digital Marketing</p>
            <p>Business Ideas</p>
            <p>Website Checkup</p>
            <p>Affiliate Marketing</p>
          </div>
        </div>
        <div>
        <p style={{fontWeight: 'bold', fontSize: '20px'}}>Subscribe Newsletters</p>
        <div className="footer-list">
            <p>Join Our Community</p>;
            <div style={{marginTop: '-30px'}}>
            <a href="https://www.facebook.com/groups/seowebsitedoctor" target="_blank" rel="noopener noreferrer"
              style={{textDecoration: 'none' }}>
              <p className="footer-fb-group" >Facebook Group!</p>
            </a>
            <a href="https://t.me/faisalitebfamily" target="_blank" rel="noopener noreferrer"
              style={{textDecoration: 'none' }}>
            <p className="footer-fb-group" >Digital Marketing!</p>
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
