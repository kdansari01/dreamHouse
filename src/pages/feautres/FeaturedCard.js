import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import "./featured.css";

const FeaturedCard = ({
  title,
  img,
  price,
  details,
  bedrooms,
  bathrooms,
  sqrFt,
  purpose,
  location,
}) => {
  return (
    <div className="cardSize mb-4">
      <div className="card ">
        <div className="imgSec">
          <FavoriteBorderOutlinedIcon className="likes" />
          <p className="tagline">{purpose}</p>

          <img src={img} className="card-img-top " alt="..." />

          <p className="location">
            <LocationOnOutlinedIcon />
            {location}
          </p>
        </div>
        <div className="card-body">
          <p className="price">{price}</p>
          <div>
            <h5 className="card-title ">{title}</h5>
          </div>
          <p className="card-text">{details}</p>
          <div className="row d-flex col-12">
            <div className="desBorder col-4">
              {bedrooms} <BedOutlinedIcon />
              <div>
                <p>Bedroom</p>
              </div>
            </div>
            <div className="desBorder col-4">
              {bathrooms} <BathtubOutlinedIcon />
              <div>
                <p>Bathroom</p>
              </div>
            </div>
            <div className="col-4">
              {sqrFt} <SquareOutlinedIcon />
              <div>
                <p>squr ft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
