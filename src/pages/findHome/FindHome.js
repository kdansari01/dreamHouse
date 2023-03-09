import React, { useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import "./findHome.css";
import comingSoon from "../../assests/images/commingsoon.png";
import { Link } from "react-router-dom";
// import Button from "../../components/button";
// import ForRentFeatureCard from "../feautres/ForRentFeatureCard";
import { Navbar } from "../../components/navbar/Navbar";
import ForRent from "./ForRent";
import ForBuy from "./ForBuy";
// import ForBuyFeatureCard from "../feautres/ForBuytFeatureCard";
import { Fade } from "react-reveal";
// import ForBuyFeatureCard from "../feautres/ForBuytFeatureCard";
const FindHome = () => {
  const [state, setState] = useState(1);
  const [isLoadings] = useState(false);
  const togleButton = (index) => {
    setState(index);
  };
  return (
    <div className="row d-flex col-12">
      <div className=" col-lg-3 col-md-3 col-12">
        <Navbar />
      </div>
      {/* <Fade bottom> */}
      <div className="wrappr col-lg-9">
        <Fade left>
          <div className="backHomeSec d-flex align-items-center ">
            <Link to="/" className="BackHome nav-link active">
              <ArrowCircleLeftOutlinedIcon /> Home
            </Link>
          </div>
        </Fade>

        <Fade right>
          <div className="activeTabSec ">
            <div className="tabs d-flex justify-content-center bg-light">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link
                    href="#"
                    className={state === 1 ? "nav-link active" : "nav-link"}
                    onClick={() => togleButton(1)}
                  >
                    For Rent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className={state === 2 ? "nav-link active" : "nav-link"}
                    onClick={() => togleButton(2)}
                  >
                    For Buy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className={state === 3 ? "nav-link active" : "nav-link"}
                    onClick={() => togleButton(3)}
                  >
                    For Sell
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Fade>

        {!isLoadings ? (
          <>
            <div className={state === 1 ? " active-content" : "content"}>
              <div className="featured">
                <ForRent />
              </div>
            </div>
            <div className={state === 2 ? " active-content" : "content"}>
              <div className="featured">
                <ForBuy />
              </div>
            </div>
            <div className={state === 3 ? " active-content" : "content"}>
              <div className="SellSec d-flex justify-content-center">
                <img src={comingSoon} alt="comingSoon" />
              </div>
            </div>
          </>
        ) : null}
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default FindHome;
