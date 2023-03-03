import React from "react";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import "./news.css";
const NewsCard = ({ title, img, category, date }) => {
  return (
    <div className=" mb-4">
      <div className="card ">
        <div className="imgSec">
          <img src={img} className="card-img-top " alt="..." />
        </div>
        <div className="admin">
          <div>
            <p><PermIdentityOutlinedIcon/> by: Admin</p>
          </div>
          <div>
            <p><AssessmentOutlinedIcon/> {category}</p>
          </div>
        </div>
        <div className="card-body">
          <div>
            <h5 className="card-title ">{title}</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <p><CalendarMonthOutlinedIcon/> {date}</p>
            </div>
            <div>
              <p className="fw-bold cursor-pointer">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
