import React from "react";
import featuresImg1 from "../../assests/images/property-1.jpg";
import featuresImg2 from "../../assests/images/property-2.jpg";
import featuresImg3 from "../../assests/images/property-3.jpg";
import featuresImg4 from "../../assests/images/property-4.png";
import featuresImg5 from "../../assests/images/blog-1.png";
import featuresImg6 from "../../assests/images/blog-2.jpg";
import Slide from 'react-reveal/Slide';
import "./featured.css";
import FeaturedCard from "./FeaturedCard";
const ForBuyFeatureCard = () => {
  return (
    <div>
      <div className="wrap mt-4">
        <div className="heading d-flex justify-content-center mb-4">
          <h1>Featured Listings</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <FeaturedCard
            title="Modern Apartments"
            img={featuresImg1}
            price="Rs.1Cr"
            details="Beautiful Huge 1 Family House In Heart Of Westbury. Newly
        Renovated With New Wood"
            bedrooms="3"
            bathrooms="2"
            sqrFt="3230"
            purpose="For Buy"
            location="Noida,Up"
          />

          <FeaturedCard
            title="New Apartment Nice View"
            img={featuresImg2}
            price="Rs.80Lac"
            details="Beautiful Huge 1 Family House In Heart Of Westbury. Newly
        Renovated With New Wood"
            bedrooms="3"
            bathrooms="2"
            sqrFt="3230"
            purpose="For Buy"
            location="Noida,Up"
          />

          <FeaturedCard
            title="New Apartment Nice View"
            img={featuresImg3}
            price="Rs.2Cr"
            details="Beautiful Huge 1 Family House In Heart Of Westbury. Newly
        Renovated With New Wood"
            bedrooms="3"
            bathrooms="2"
            sqrFt="3230"
            purpose="For Buy"
            location="Noida,Up"
          />

          <FeaturedCard
            title="New Apartment Nice View"
            img={featuresImg4}
            price="Rs.2Cr"
            details="Beautiful Huge 1 Family House In Heart Of Westbury. Newly
        Renovated With New Wood"
            bedrooms="3"
            bathrooms="2"
            sqrFt="3230"
            purpose="For Buy"
            location="Noida,Up"
          />
          <FeaturedCard
            title="New Apartment Nice View"
            img={featuresImg5}
            price="Rs.1.5Cr"
            details="Beautiful Huge 1 Family House In Heart Of Westbury. Newly
        Renovated With New Wood"
            bedrooms="3"
            bathrooms="2"
            sqrFt="3230"
            purpose="For Buy"
            location="Noida,Up"
          />
          <FeaturedCard
            title="New Apartment Nice View"
            img={featuresImg6}
            price="Rs.80Lac"
            details="Beautiful Huge 1 Family House In Heart Of Westbury. Newly
        Renovated With New Wood"
            bedrooms="3"
            bathrooms="2"
            sqrFt="3230"
            purpose="For Buy"
            location="Noida,Up"
          />
        </div>
      </div>
    </div>
  );
};

export default ForBuyFeatureCard;
