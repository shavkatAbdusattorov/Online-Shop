import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="img"
            src="src/assets/1709278405_banner_big_aero.jpg"
            alt=""
            // style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide className="xs:hidden md:block">
          <img
            className=""
            id="img"
            src="src/assets/afa5dff89c546d75a564325df29d8f98.jpg"
            alt=""
            // style={{
            //   width: "1200px",
            //   height: "340px",
            //   objectFit: "cover",
            //   borderRadius: "10px",
            // }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            id=""
            src="src/assets/Ssmartfony-tecno_65e83ab74220e.jpg"
            alt=""
            // style={{
            //   width: "1500px",
            //   height: "340px",
            //   borderRadius: "40px",
            //   objectFit: "contain",
            // }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            id=""
            src="src/assets/2222222222240991.jpg"
            alt=""
            // style={{
            //   width: "1500px",
            //   height: "340px",
            //   borderRadius: "40px",
            //   objectFit: "contain",
            // }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
