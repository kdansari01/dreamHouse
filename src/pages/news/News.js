import React from "react";
import NewsCard from "./NewsCard";
import news1 from "../../assests/images/blog-1.png";
import news2 from "../../assests/images/blog-2.jpg";
import news3 from "../../assests/images/blog-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from 'react-reveal/Fade';
import "swiper/css";
import "./news.css";
const News = () => {
  return (
    <Fade bottom>
      <div className="news" id="news">
        <div className="d-flex text-center justify-content-center mt-4 mb-4">
          <h1 className="text-center"> Leatest News Feeds</h1>
        </div>
        {/* title, img, category, date */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <NewsCard
              title="The Most Inspiring Interior Design Of 2023"
              img={news1}
              category="Interior"
              date="feb 27,2023"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <NewsCard
              title="Recent Commercial Real Estate Transactions"
              img={news2}
              category="Estate"
              date="feb 27,2023"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <NewsCard
              title="Renovating a Living Room? Experts Share Their Secrets"
              img={news3}
              category="Rooms"
              date="feb 27,2023"
            />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
       
      </div>
    </Fade>
  );
};

export default News;
