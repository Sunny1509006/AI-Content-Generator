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
import { Homepage } from "../Common/Homepage";
import { Footer } from "../Common/Footer";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { Contactus } from "../Pages/Contactus";

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
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};
