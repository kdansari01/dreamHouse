import React, { useState } from "react";
import { Fade } from "react-reveal";
import FiltersCard from "../../components/FiltersCard";
import { BuyData } from "../feautres/Data";
import FeaturedCard from "../feautres/FeaturedCard";
import "./findHome.css";
const ForBuy = () => {
  const [filtereList, setFilterList] = useState(BuyData);
  const [filter, setFilter] = useState({});
  const handleValue = (name, value) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const onClickSearch = () => {
    const listOfFiltered = Object.values(filter);
    if (listOfFiltered.length) {
      //logic filter
      const data = BuyData.filter((item) => {
        return Object.keys(filter).some((key) => {
          return item[key].toLowerCase().includes(filter[key].toLowerCase());
        });
      });
      setFilterList(data);
    }
  };
  // console.log("hit me",onClickSearch())
  console.log("filtereList", filtereList);
  return (
    <>
      <Fade bottom>
        <div className="Find">
          <FiltersCard
            onChange={handleValue}
            onClick={onClickSearch}
            range1="30Lac-50Lac"
            range2="50Lac-70Lac"
            range3="70Lac-90Lac"
            range4="90Lac-1Cr"
            range5="1Cr-2Cr"
            range6="2Cr-5Cr"
          />
        </div>
      </Fade>

      <div className="wrap">
        <div className="heading d-flex justify-content-center mb-4">
          <h1 className="text-light">Featured Listings</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {filtereList &&
            filtereList.map((data, ind) => (
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
    </>
  );
};

export default ForBuy;
