import React, { useEffect } from "react";
import "./Home.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Common/Header";
import { Homepage } from "../Pages/Homepage";
import { Footer } from "../Common/Footer";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { Contactus } from "../Pages/Contactus";
import FAQ from "../Pages/Faqs";
import { Service } from "../Pages/Service";
import { Refund_Policy } from "../Pages/Refund_Policy";
import { Terms_Conditions } from "../Pages/Terms_Conditions";
import { About } from "../Pages/About";
import { Pricing } from "../Pages/Pricing";
import { UserDashBoard } from "../Profile/UserDashBoard";
import { PostHistory } from "../Pages/PostHistory";
import useAuth from "../../hooks/authHooks";
import { CircularProgress, Stack, Typography } from "@mui/material";
import ConfirmEmail from "../Pages/Auth/ConfirmEmail";
import GenerateArticle from "../Pages/articles/GenerateArticle";
import ArticleDetails from "../Pages/articles/ArticleDetails";
import PublisherSites from "../Pages/PublisherSites";
import KeywordGenerator from "../Pages/KeywordGenerator";
import SubmitManualPayment from "../Pages/SubmitManualPayment";

export const Home = () => {
  const { fetchAuthUser, isAuthenticating } = useAuth();

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return isAuthenticating ? (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 100000,
      }}
    >
      <CircularProgress sx={{ color: "var(--primary-orange)" }} size={80} />
      <Typography sx={{ marginTop: "40px", fontSize: "24px" }}>
        Please, wait for a while!
      </Typography>
      <Typography sx={{ marginTop: "16px", fontSize: "18px" }}>
        Loading data...
      </Typography>
    </Stack>
  ) : (
    <>
      <div className="header-position">
        <Header />
      </div>
      <div className="body-position">
        <div className="body-padding">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/confirm-mail/:hash"
              element={<ConfirmEmail />}
            />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/faqs" element={<FAQ />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/refund_policy" element={<Refund_Policy />} />
            <Route
              exact
              path="/terms_and_conditions"
              element={<Terms_Conditions />}
            />
            <Route exact path="/dashboard" element={<UserDashBoard />} />
            <Route path="articles">
              <Route path="generate" element={<GenerateArticle />} />
              <Route path=":articleID" element={<ArticleDetails />} />
            </Route>
            <Route exact path="/post-history" element={<PostHistory />} />
            <Route path="keyword-generator" element={<KeywordGenerator />} />
            <Route path="publisher-sites" element={<PublisherSites />} />
            <Route
              path="submit-manual-payment"
              element={<SubmitManualPayment />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};
