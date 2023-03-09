import React, { useState } from "react";
import { Fade } from "react-reveal";
import FiltersCard from "../../components/FiltersCard";
import { RentData } from "../feautres/Data";
import FeaturedCard from "../feautres/FeaturedCard";
import "./findHome.css";
const ForRent = () => {
  const [filtereList, setFilterList] = useState(RentData);
  const [filter, setFilter] = useState({});
  const handleValue = (name, value) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const onClickSearch = () => {
    const listOfFiltered = Object.values(filter);
    if (listOfFiltered.length) {
      //logic filter
      const data = RentData.filter((item) => {
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
            range1="none"
            range2="10k-20k"
            range3="20k-30k"
            range4="30k-40k"
            range5="40k-50k"
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

export default ForRent;
