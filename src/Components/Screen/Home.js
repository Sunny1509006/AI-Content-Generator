import React from "react";
import "./Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Header } from "../Common/Header";
import { Homepage } from "../Pages/Homepage";
import { Footer } from "../Common/Footer";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { Contactus } from "../Pages/Contactus";
import { ServiceCard } from "../Common/ServiceCard";
import FAQ from "../Pages/Faqs";
import { Service } from "../Pages/Service";
import { Refund_Policy } from "../Pages/Refund_Policy";
import { Terms_Conditions } from "../Pages/Terms_Conditions";
import { About } from "../Pages/About";
import { Pricing } from "../Pages/Pricing";
import { InfoArticle } from "../ContentGenerator/InfoArticle";
import { UserDashBoard } from "../Profile/UserDashBoard";

export const Home = () => {
  return (
    <div>
      <div className="header-position">
        <Header />
      </div>
      <div className="body-position">
        <div className="body-padding">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/faqs" element={<FAQ />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/info-article" element={<InfoArticle />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/refund_policy" element={<Refund_Policy />} />
            <Route exact path="/terms_and_conditions" element={<Terms_Conditions />} />
            <Route exact path="/dashboard" element={<UserDashBoard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};
