import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import Home from "../home/Home";
import "./landingPage.css";
const LandingPage = () => {
  return (
    <div className="row">
      <div className="d-flex col-12">
        <div className="sideBar col-lg-3 col-md-3 col-12">
          <Navbar />
        </div>

        <div className="rightBar col-lg-9 col-md-9 col-12">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
