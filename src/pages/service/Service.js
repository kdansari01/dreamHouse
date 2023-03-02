import React from "react";
import buy from "../../assests/images/service-1.png";
import rent from "../../assests/images/service-2.png";
import sell from "../../assests/images/service-3.png";
import Card from "../../components/card/Card";
import "./service.css"
const Service = () => {
  return (
    <div className="service" id="service">
      <div className="d-flex text-center justify-content-center mt-4 mb-4">
        <h1 className="text-center">Our Main Focus</h1>
      </div>

      <div className="cardScroll d-flex">
        <Card title="Buy a Home" img={buy} />

        <Card title="Rent a Home" img={rent} />

        <Card title="Sell a Home" img={sell} />
      </div>
    </div>
  );
};

export default Service;
