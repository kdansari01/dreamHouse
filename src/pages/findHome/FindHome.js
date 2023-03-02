import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import InputAdornment from "@mui/material/InputAdornment";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import "./findHome.css";
import comingSoon from "../../assests/images/commingsoon.png";
import { Link } from "react-router-dom";
// import Button from "../../components/button";
import ForRentFeatureCard from "../feautres/ForRentFeatureCard";
import { Navbar } from "../../components/navbar/Navbar";
import ForRent from "./ForRent";
import ForBuy from "./ForBuy";
import ForBuyFeatureCard from "../feautres/ForBuytFeatureCard";

const FindHome = () => {
  const [state, setState] = useState(1);
  const [isLoadings, setIsLoading] = useState(false);
  const togleButton = (index) => {
    setState(index);
  };
  return (
    <div className="row d-flex col-12">
      <div className=" col-lg-3 col-md-3 col-12">
        <Navbar />
      </div>
      <div className="wrappr col-lg-9">
        <div className="backHomeSec d-flex align-items-center ">
          <Link to="/" className="BackHome nav-link active">
            <ArrowCircleLeftOutlinedIcon /> Home
          </Link>
        </div>
        <div className="activeTabSec ">
          <div className="tabs d-flex justify-content-center bg-light">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  href="#"
                  className={state === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => togleButton(1)}
                >
                  For Rent
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={state === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => togleButton(2)}
                >
                  For Buy
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={state === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => togleButton(3)}
                >
                  For Sell
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={state === 1 ? " active-content" : "content"}>
          <ForRent />
        </div>
        <div className={state === 2 ? " active-content" : "content"}>
          <ForBuy />
        </div>
        {!isLoadings ? (
          <>
            <div className={state === 1 ? " active-content" : "content"}>
              <div className="featured">
                <ForRentFeatureCard />
              </div>
            </div>
            <div className={state === 2 ? " active-content" : "content"}>
              <div className="featured">
                <ForBuyFeatureCard />
              </div>
            </div>
            <div className={state === 3 ? " active-content" : "content"}>
              <div className="featured d-flex justify-content-center">
                <img src={comingSoon} alt="comingSoon" />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FindHome;
