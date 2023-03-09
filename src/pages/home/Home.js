import React from "react";
import "./home.css";

import homeImgae from "../../assests/images/hero-banner.png";
import Button from "../../components/button";
// import Service from "../service/Service";
import { Link } from "react-router-dom";
import News from "../news/News";
import { Navbar } from "../../components/navbar/Navbar";
import { Fade } from "react-reveal";
import ForRentFeatureCard from "../feautres/ForRentFeatureCard";
const Home = () => {
  return (
    <div className="row d-flex col-12">
      <div className=" col-lg-3 col-md-3 col-12">
        <Navbar />
      </div>
      <div className="mainHomeCont col-lg-9">
        <div className="Wrapper_Home d-flex row col-12">
          <Fade left>
            <div className="textSide col-lg-6 col-md-6 col-12 ">
              <hi className="textFonts">
                Find Your Dream <br /> House By Us
                <div className="d-flex ps-5 mt-4">
                  <Link to="/find-Home">
                    <Button title="Find Your Home" />
                  </Link>
                </div>
              </hi>
            </div>
          </Fade>

          <Fade right>
            <div className="imgSide col-lg-6 col-md-6 col-12">
              <img src={homeImgae} alt="homeImg" className="img" />
            </div>
          </Fade>
        </div>

        <div className="mt-4">
          <News />
        </div>
        <ForRentFeatureCard />

      </div>
    </div>
  );
};

export default Home;
