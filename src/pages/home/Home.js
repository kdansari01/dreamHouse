import React from "react";
import "./home.css";

import homeImgae from "../../assests/images/hero-banner.png";
import Button from "../../components/button";
import Service from "../service/Service";
import { Link } from "react-router-dom";
const Home = () => {
  return (
      <div className="Home_Bg ">
        <div className="Wrapper_Home d-flex row col-12">
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
          <div className="imgSide col-lg-6 col-md-6 col-12">
            <img src={homeImgae} alt="homeImg" className="img" />
          </div>
        </div>
        <div>
          <Service />
        </div>
      </div>
  );
};

export default Home;
