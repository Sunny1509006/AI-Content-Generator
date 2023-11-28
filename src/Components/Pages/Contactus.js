import React from "react";
import "./Contactus.css";
import { BsWhatsapp } from "react-icons/bs";
// import { SiGmail } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";

export const Contactus = () => {
  return (
    <div className="contact-main">
      <h1>Get us In Touch</h1>
      <div className="contact-info-div">
      <div className="contact-info">
        <BsWhatsapp size={24} />
        <p>+8801311320246</p>
      </div>
      <div className="contact-info">
        <CgMail size={24} />
        <p>faisaliteb.com@gmail.com</p>
      </div>
      <div className="contact-info">
        <IoLocation size={24} />
        <p>Lakshmipur Sadar, Lakhsmipur-3703</p>
      </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235169.07073096343!2d90.6858523065211!3d22.931189366094305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754b8ae19dcb481%3A0xd51bd6a39a324fd!2sLakshmipur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1701196445023!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
