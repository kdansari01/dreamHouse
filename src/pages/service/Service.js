import React from "react";
import buy from "../../assests/images/service-1.png";
import rent from "../../assests/images/service-2.png";
import sell from "../../assests/images/service-3.png";
import Card from "../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";

import "swiper/css";
import "./service.css";
const Service = () => {
  return (
    <Fade bottom>
      <div className="service" id="service">
        <div className="d-flex text-center justify-content-center mt-4 mb-4">
          <h1 className="text-center">Our Main Focus</h1>
        </div>

        <div className="">
          <Swiper
            spaceBetween={60}
            slidesPerView={2.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Card title="Buy a Home" img={buy} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="Rent a Home" img={rent} />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="Sell a Home" img={sell} />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </Fade>
  );
};

export default Service;
