import React, {  useState } from "react";
import FiltersCard from "../../components/FiltersCard";

import { RentData } from "./Data";
import "./featured.css";
import FeaturedCard from "./FeaturedCard";
const ForRentFeatureCard = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [post, setPost] = useState(RentData);

  // const [searchResults, setSearchResults] = useState([]);
  const handleValue = (event) => {
    const results = RentData.location.filter((item) =>
      item.toLowerCase().includes(event.targut.value.toLowerCase())
    );
    setPost(results);
  };

  return (
    <div>
      <FiltersCard onChange={handleValue} />
      <div className="wrap mt-4">
        <div className="heading d-flex justify-content-center mb-4">
          <h1>Featured Listings</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {post &&
            post.map((data, ind) => (
              <FeaturedCard
                key={data.id}
                title={data.title}
                img={data.img}
                price={data.price}
                details={data.details}
                bedrooms={data.bedrooms}
                bathrooms={data.bathrooms}
                sqrFt={data.sqrFt}
                location={data.location}
                types={data.types}
                purpose={data.purpose}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ForRentFeatureCard;
